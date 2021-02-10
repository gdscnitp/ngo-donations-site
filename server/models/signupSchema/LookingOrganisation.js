const mongoose = require('mongoose');
const schema = mongoose.Schema;
const individual = new schema({
    userID: {
        type: mongoose.Schema.Types.ObjectID,
      },
      name:{
          type:String
    },
    contact:{
        type:String
    },
    email:{
        type:String
    },
    isVerifiedEmail:{
        type:Boolean,
        default:false
    },
    password:{
        type:String
    },
    organisation:{
        type:String
    },
    address:{
        type:String
    },
    license:{
        type:String
    },
    typeofOrganisation:{
        type:String
    },
    describe:{
        type:String
    },
    volunteers_no:{
        type:String
    },
    type_of_people:{
        type:String
    },
    type_of_help:{
        type:String
    }
})
const LookingOrganisation = mongoose.model("LookingOrganisation",individual)
module.exports = LookingOrganisation
