const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
<<<<<<< HEAD
const UserSchema = new Schema({
  _id : mongoose.Schema.Types.ObjectId,
=======
const ActivitySchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
>>>>>>> upstream/master
  details: {
    type: String,
    required: [true, "The todo text field is required"],
  },
  Image: {
    type: String,
  },
});

//create model for todo
const Activity = mongoose.model("activity", ActivitySchema);

module.exports = Activity;
