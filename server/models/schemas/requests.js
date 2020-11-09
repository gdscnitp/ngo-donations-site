const { Schema, model, SchemaTypes } = require("mongoose");

const requestSchema = Schema({
  desc: {
    type: String,
    alias: "description",
  },
  tag: {
    // takes the `Describe your needs`
    type: [String],
    alias: "needs",
    default: [],
  },
  loc: {
    // location
    type: String,
    alias: "location",
  },
  reason: {
    type: String,
  },
  needy: {
    type: [Number], //a range, should be a pair of number
    alias: "num_needy",
  },
  req: {
    //organisation or individual name
    type: SchemaTypes.Mixed, // can be ID of the document of user profile or organisation profile, or can simply be there userName
    required: true,
    alias: "requester",
  },
  call: {
    // if req is an ID of an organisation or user, then contact name not must, that can be queried from the user or organisation collection
    type: String,
    alias: "contact",
  },
});

requestSchema.pre("save", function () {
  if (!this.call && typeof this.requester === "string") {
    // ie. requester is not an ID, so contact informationis a must here
    throw Error(
      "Contact Information is required when only the name of the requester has been provided"
    );
  }
});

module.exports = model("requests", requestSchema); // @note_to_self (remove later) -> Actually what mongoose does behind the scenes, is that it `plurizes` the "request" to "requests" and that is used as collection name. May seem simple but It took almost 20-30 minutes to dig this much deep into mongoose (find it at -> node_modules/mongoose@5.x.xx/node_modules/mongoose/lib/index.js, line no. 567 )
