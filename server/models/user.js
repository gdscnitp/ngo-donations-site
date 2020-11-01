const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const UserSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  UserName: {
    type: String,
    required: [true, "The todo text field is required"],
  },
  profileImage: {
    type: String,
  },
});

//create model for todo
const User = mongoose.model("user", UserSchema);

module.exports = User;
