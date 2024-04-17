const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    name: String,
    avatarUrl: String,
    location: String,
    blog: String,
    bio: String,
    deleted: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
