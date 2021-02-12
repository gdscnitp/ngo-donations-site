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
    how_to_help:{
        type:String
    },
    prev_exp:{
        type:String
    },
    address:{
        type:String
    },
    occupation:{
        type:String
    },
    willJoinOrganisation:{
        type:String,
        default:'opel'
    }
})
const WillingIndividual = mongoose.model("WillingIndividual",individual)
module.exports = WillingIndividual
