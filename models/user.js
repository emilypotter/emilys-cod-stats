const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  kills: {
    type: number,
    required: true
  }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.addUser = function(newUser, callback) {
  newUser.save(callback);
}

module.exports.getStats = function(callback) {
    User.getStats((err)=> {
      callback(null);
    });
  }