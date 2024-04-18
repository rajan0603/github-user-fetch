const userService = require('../services/userServices');

exports.getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUser(username);
        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ error: 'Failed to fetch user' });
    }
};

exports.findMutualFriends = async (req, res) => {
    try {
        const { username } = req.params;
        const mutualFriends = await userService.findMutualFriends(username);
        res.status(200).json(mutualFriends);
    } catch (error) {
        res.status(500).json({ error: 'Failed to find and save mutual friends' });
    }
};


exports.updateUser = async (req, res) => {
    try {
        const { username } = req.params;
        const { location, blog, bio } = req.body;

        const user = await userService.updateUser({username, location, blog, bio});

        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ error: 'Failed to update user' });
    }
};

exports.softDeleteUser = async (req, res) => {
    try {
        const {username} = req.params;
        const user = await userService.softDeleteUser(username);

        res.status(200).json({ message: 'User soft deleted successfully' });
    } catch (error) {
        console.error('Error soft deleting user:', error);
        res.status(500).json({ error: 'Failed to soft delete user' });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const { sortBy } = req.query;
        const users = await userService.getUsers(sortBy);

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Failed to fetch users' });
    }
};

exports.searchUser = async (req,res) => {
    try{
        const { username, location } = req.query;
        const users = await userService.searchUser({username, location});

        res.status(200).json(users);
    }
    catch(error){
        res.status(500).json({
            error: error.message,
        })
    }
}
