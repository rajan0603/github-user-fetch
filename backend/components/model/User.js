const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    repos_url: String,
    name: String,
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
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
