const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: String,
  time: Number,
  avatar: String,
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
