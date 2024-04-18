const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/search', userController.searchUser);
router.get('/:username', userController.getUser);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.softDeleteUser);
router.get('/mutualFriends/:username', userController.findMutualFriends);
router.get('/', userController.getUsers);

module.exports = router;
