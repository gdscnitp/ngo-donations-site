const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
  },

  email: {
    type: String,
  },

  contactNumber: {
    type: String,
  },
  problem: {
    type: String,
  },
  KindOfHelp: {
    type: String,
  },
  occupation: {
    type: String,
  },
  Will_for_Organisation: {
    type: String,
  },
});
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const User = mongoose.model("user", UserSchema);

module.exports = User;
