var mongoose = require('mongoose');

var authSchema = new mongoose.Schema({
  email: String,
  password: String
});

var authModel = mongoose.model("users", authSchema);
module.exports = authModel;
