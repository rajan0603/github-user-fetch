const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/:username', userController.getUser);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.softDeleteUser);
router.get('/', userController.getUsers);

module.exports = router;
