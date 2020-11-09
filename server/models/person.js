const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectID = mongoose.Schema.Types.ObjectID;
const User = new Schema({
  userID: {
    type: ObjectID,
  },
  name: {
    type: String,
    // ,
    // required:true
  },
  contactNumber: {
    type: Number,
    default: 0,
    // ,
    // required:true
  },
  isVerifiedPhone: {
    type: Boolean,
    // ,
    // default:false
  },
  email: {
    type: String,
    // ,
    // required:true
  },
  isVerifiedEmail: {
    type: Boolean,
    // ,
    // default:false
  },
  password: {
    type: String,
    // ,
    // required:true
  },
  Name_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  Address_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  License_number: {
    type: String,
  },
  Type_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  Description_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  Volunteers_number: {
    type: Number,
    default: 0,
    // ,
    // required:true
  },
  Type_of_help: {
    type: String,
    // ,
    // required:true
  },
  Open_for_volunteers: {
    type: String,
    // ,
    // required:true
  },
  isChecked: { type: Boolean, default: false },
});

const user = mongoose.model("User", User);
module.exports = user;
