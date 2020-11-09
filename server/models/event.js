const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for Event Schema
const eventSchema = new Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectID,
  },
  name: {
    type: String,
    // required: true
  },
  description: {
    type: String,
    // required: true
  },
  region: {
    type: String,
    //required: true
  },
  startDate: {
    type: Date,
    //required: true
  },
  endDate: {
    type: Date,
    //required: true

    startTime: {
      type: String,
      //required: true
    },
    endTime: {
      type: String,
      //required: true
    },
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
