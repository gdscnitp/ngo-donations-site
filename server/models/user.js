const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for user
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

<<<<<<< HEAD
//create model for user
const User = mongoose.model('edituser', UserSchema);
=======
//create model for todo
const User = mongoose.model("user", UserSchema);
>>>>>>> upstream/master

module.exports = User;
