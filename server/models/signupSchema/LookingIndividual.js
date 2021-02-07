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
    describe:{
        type:String
    },
    typeofHelp:{
        type:String
    },
    address:{
        type:String
    },
    occupation:{
        type:String
    },
    willJoinOrganisation:{
        type:String
    }
})
const LookingIndividual = mongoose.model("LookingIndividual",individual)
module.exports = LookingIndividual
