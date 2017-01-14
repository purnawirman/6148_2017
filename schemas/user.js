var mongoose = require('mongoose');

// TODO: Fill out the userSchema.
// Hint: a user is an object such as
//     {'username': 'Isaac', 'favoriteFruit': 'apple'}
var userSchema = new mongoose.Schema({
  username: {type: String, required: true, index: {unique: true}},
  favoriteFruit: {type: String, required: true}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
