const mongoose = require("mongoose");
const Schema = mongoose.Schema;
console.log("Schema");

const RequestSchema = new Schema({
  desc_problem: {
    type: String,
  },
  desc_need: {
    type: String,
  },
  location: {
    type: String,
  },
  help_required_for: {
    type: String,
  },
  no_of_persons: {
    type: Number,
  },
});
const Requests = mongoose.model("Request", RequestSchema);
module.exports = Requests;
