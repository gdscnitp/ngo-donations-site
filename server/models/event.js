const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//create schema for Event Schema
const eventSchema = new Schema({
  _id : {
    type: mongoose.Schema.Types.ObjectID,
  },
  name: {
    type: String,
    // required: true
  },
  Description: {
    type: String,
    // required: true
  },
  Region: {
    type: String,
    // required: true
  },
  StartDate: {
    type: Date,
    // required: true
  },
  EndDate: {
    type: Date,
    // required: true

  },
  StartTime: {
    type: Date,
    // required: true
  },
  EndTime: {
    type: Date,
    // required: true
  }
})

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
