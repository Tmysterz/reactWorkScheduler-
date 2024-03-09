const { User, Schedule } = require('../models');
const { signToken } = require('../utils/auth');

module.exports = {
    // works correctly 
    async getSingleUser({ user = null, params }, res) {
        const foundUser = await User.findOne({
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
        });

        if (!foundUser) {
            return res.status(400).json({ message: "Cannot find a user with this id!" });
        }

        res.json(foundUser);
    },
    // works correctly
    async createUser({ body }, res) {
        const user = await User.create(body);

        if (!user) {
            return res.status(400).json({ message: "Error creating user" });
        }

        const token = signToken(user);
        res.json({ token, user });
    },
    // works correctly
    async login({ body }, res) {
        const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });

        if (!user) {
            return res.status(400).json({ message: "Error logging in check username or email" });
        }

        const correctPw = await user.isCorrectPassword(body.password);

        if (!correctPw) {
            return res.status(400).json({ message: "Wrong password!" });
        }

        const token = signToken(user);
        res.json({ token, user });
    },
    // works correctly
    async saveSchedule({ user, body }, res) {
        try {
            const updatedUser = await User.findOneAndUpdate(
                { _id: user._id },
                { $addToSet: { savedSchedule: body } },
                { new: true, runValidators: true }
            );
            return res.json(updatedUser);
        } catch (err) {
            return res.status(400).json(err);
        }
    },
    // works correctly
    async removeSchedule(req, res) {
        try {
            const userId = req.user._id;

            const scheduleId = req.params.scheduleId;

            const updatedUser = await User.findByIdAndUpdate(
                userId,
                { $pull: { savedSchedule: { _id: scheduleId } } },
                { new: true }
            );

            if (!updatedUser) {
                return res.status(404).json({ message: "Couldnt find user with that ID"})
            }

            return res.json(updatedUser);

        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Server error'});
        }
    },
    // works correctly 
    async getAllSchedule(req, res) {
        try {
            const userId = req.params.userId;

            const user = await User.findById(userId).populate('savedSchedule');

            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            const savedSchedules = user.savedSchedule;

            return res.json(savedSchedules)
        } catch (error) {
            console.log(error)
        }
    }

}