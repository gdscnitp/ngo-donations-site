const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema for todo
const ActivitySchema = new Schema({
	_id: mongoose.Schema.Types.ObjectId,
	details: {
		type: String,
		required: [true, "The todo text field is required"],
	},
	Image: {
		type: String,
	},
});

//create model for todo
const Activity = mongoose.model("activity", UserSchema);

module.exports = Activity;
