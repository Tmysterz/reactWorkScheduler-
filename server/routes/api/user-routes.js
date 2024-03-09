// create user controllers first
const router = require('express').Router();
const {
  createUser,
  getSingleUser,
  saveSchedule,
  removeSchedule,
  getAllSchedule,
  login,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');
// works correctly
router.route('/').post(createUser).put(authMiddleware, saveSchedule);
// works correctly
router.route('/login').post(login);
// works correctly
router.route('/me').get(authMiddleware, getSingleUser);
// works correctly
router.route('/schedule/:scheduleId').delete(authMiddleware, removeSchedule);
// works correctly 
router.route('/:userId').get(authMiddleware, getAllSchedule);

module.exports = router;
