const userService = require('../services/userService');

exports.getUser = async (req, res) => {
    try {
        const user = await userService.getUser(req.params.username);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        await userService.updateUser(req.params.username, req.body);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

exports.softDeleteUser = async (req, res) => {
    try {
        await userService.softDeleteUser(req.params.username);
        res.status(200).json({ message: 'User soft deleted successfully' });
    } catch (error) {
        console.error('Error soft deleting user:', error);
        res.status(500).json({ error: 'Failed to soft delete user' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers(req.query.sortBy);
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};
