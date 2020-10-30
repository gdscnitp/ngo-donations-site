const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");


const UserSchema = new Schema({

    username:{
        type:String,
    },
    email:{
        type:String,
    },
    contactNumber:{
        type:String,
    },
    nameOrg:{
        type:String,
    },
    address:{
        type:String,
    },
    licenceNumber:{
        type:String,
    },
    yearOfEstablishment:{
        type:Number,
    },
    typeofOrg:{
        type:String,
    },
    description:{
        type:String,
    },
    volunteers:{
        type:Number,
    },
    helpedPeople:{
        type:Number,
    }
})
UserSchema.plugin(passportLocalMongoose,{ usernameField : 'email' });

const Org = mongoose.model('org', UserSchema);

module.exports = Org;







  
