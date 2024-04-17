const User = require('../model/User');
const axios = require("axios");

exports.getUser = async (username) => {
    try{
        let user =  await User.findOne({ username });
        if(!user){
            // fetch data from api
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const userData = res.data;
            user = new User({
                username: userData.login,
                repos_url: userData.repos_url,
                name: userData.name,
                avatarUrl: userData.avatar_url,
                location: userData.location,
                blog: userData.blog,
                bio: userData.bio,
                public_repos: userData.public_repos,
                public_gists: userData.public_gists,
                followers: userData.followers,
                following: userData.following,
                created_at: userData.created_at,
                updated_at: userData.updated_at,
            })
        }
        return user;
    }
    catch(error){
        throw error;
    }
};

exports.findMutualFollowers = async () => {
    try {
        const mutualFollowers = await User.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'username',
                    foreignField: 'followers.username',
                    as: 'friends'
                }
            },
            {
                $match: {
                    'friends.followers.username': '$username'
                }
            }
        ]);

        return mutualFollowers;
    } catch (error) {
        throw error; 
    }
};

exports.updateUser = async ({username, location,blog, bio}) => {
    try{
        const user = await User.findOneAndUpdate({ username }, {location, blog, bio});
        if(!user){
            throw new Error("user does not found");
        }

        return user;
    }
    catch(error){
        throw error;
    }
};

exports.softDeleteUser = async (username) => {
    try{
        const user = await User.findOneAndDelete({ username }, {deleted: true});
        if(!user){
            throw new Error("user does not found");
        }

        return user;
    }
    catch(error){
        throw error;
    }
};

exports.getUsers = async (sortBy) => {
    try{
        const users = await User.find().sort(sortBy);

        return users;
    }
    catch(error){
        throw error;
    }
};

exports.searchUser = async ({username, location}) => {
    try{
        const users = await User.find({
            $or: [
                { username: { $regex: username, $options: 'i' } },
                { location: { $regex: location, $options: 'i' } }
            ]
        });

        if(!users){
            throw new Error("users does not found");
        }
    }
    catch(error){
        throw error;
    }
}