const { Schema, model, SchemaTypes } = require('mongoose');

const requestSchema = Schema({
    desc: {
        type: String,
        alias: 'description'
    },
    tag: { // takes the `Describe your needs`
        type: [String],
        alias: 'needs',
        default: []
    },
    loc: { // location
        type: String,
        alias: 'location'
    },
    reason: {
        type: String,
    },
    needy: {
        type: Number,
        alias: 'num_needy'
    },
    req: { //organisation or individual name
        type: SchemaTypes.Mixed, // can be ID of the document of user profile or organisation profile, or can simply be there userName
        required: true,
        alias: 'requester'
    },
    call: { // if req is an ID of an organisation or user, then contact name not must, that can be queried from the user or organisation collection
        type: String,
        alias: 'contact',
    }
});

requestSchema.pre('save', function () {
    if (!this.call && typeof this.requester === 'string') { // ie. requester is not an ID, so contact informationis a must here
        throw Error('Contact Information is required when only the name of the requester has been provided');
    }
});

module.exports = model('request', requestSchema);
