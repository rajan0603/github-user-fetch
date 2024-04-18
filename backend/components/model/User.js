const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    repos_url: String,
    name: String,
    followers_list: [String],
    following_list: [String],
    avatarUrl: String,
    location: String,
    blog: String,
    bio: String,
    public_repos: Number,
    public_gists: Number,
    followers: Number,
    following: Number,
    created_at: String,
    updated_at: String,
    repositories: [{ 
        username: String,
        name: String,
        description: String,
        url: String,
        language: String,
    }],
    friends: [String],
});

module.exports = mongoose.model('User', userSchema);
