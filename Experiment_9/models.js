const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
  },
  email :{
    type: String,
    required:true,
  },
  age: {
    type: Number,
    default: 0,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;