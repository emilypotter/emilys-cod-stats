const User = module.exports

module.exports.getStats = function(callback) {
    User.getStats((err)=> {
      callback(null);
    });
  }