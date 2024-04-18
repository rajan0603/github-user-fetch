const User = require('../model/User');
const axios = require("axios");

exports.getUser = async (username) => {
    try{
        let user =  await User.findOne({ username });
        if(!user){
            // fetch data from api
            const res = await axios.get(`https://api.github.com/users/${username}`);
            const userData = res.data;
            
            let user = new User({
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
                repositories: reposData.map(repo => ({
                    username: repo.owner.login,
                    name: repo.name,
                    description: repo.description,
                    url: repo.html_url,
                    language: repo.language,
                })),
            });
            await user.save();

            return user;
        }
        return user;
    }
    catch(error){
        throw error;
    }
};

exports.findMutualFriends = async (username) => {
    try {
        const user = await User.findOne({ username });

        if (user && user.friends.length > 0) {
            return user.friends;
        }
        
        const [followersResponse, followingResponse] = await Promise.all([
            axios.get(`https://api.github.com/users/${username}/followers`),
            axios.get(`https://api.github.com/users/${username}/following`)
        ]);

        const followers_list = followersResponse.data.map(user => user.login);
        const following_list = followingResponse.data.map(user => user.login); 
        console.log(followers_list);
        const mutualFriends = followers_list.filter(user => following_list.includes(user));

        await User.findOneAndUpdate(
            { username },
            { followers_list, following_list, friends: mutualFriends },
            { upsert: true }
        );

        return mutualFriends;
    } catch (error) {
        throw error;
    }
};

exports.updateUser = async ({username,location,blog, bio}) => {
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
        let sortOption = {};
        if (sortBy) {
            sortOption[sortBy] = -1;
        }

        const users = await User.find().sort(sortOption);

        return users;
    }
    catch(error){
        throw error;
    }
};

exports.searchUser = async ({username, location}) => {
    try{
        let query = {};
        if (username || location) {
            query = {
                $or: []
            };

            if (username) {
                query.$or.push({ username: { $regex: username, $options: 'i' } });
            }

            if (location) {
                query.$or.push({ location: { $regex: location, $options: 'i' } });
            }
        }
        const users = await User.find(query);

        if(!users){
            throw new Error("users does not found");
        }

        return users;
    }
    catch(error){
        throw error;
    }
}