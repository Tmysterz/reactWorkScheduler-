const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

//  may need to ref to savedSchedule a type id instead of giving it scheduleSchema
const scheduleSchema = require('./Schedule')
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must use a valid email address'],
        },
        password: {
            type: String,
            required: true,
        },
        savedSchedule: [scheduleSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

// hash user password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `scheduleCount` with the number of saved scheduled events we have
userSchema.virtual('scheduleCount').get(function () {
    return this.savedSchedule.length;
});

const User = model('User', userSchema);

module.exports = User;
