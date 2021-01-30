const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const User = new Schema({
  userID: {
    type: Schema.Types.ObjectID,
  },
  name: {
    type: String,
    // ,
    // required:true
  },
  contactNumber: {
    type: Number,
    // ,
    // required:true
  },
  isVerifiedPhone: {
    type: Boolean,
     default:false
  },
  email: {
    type: String,
    // ,
    // required:true
  },
  isVerifiedEmail: {
    type: Boolean,
   default:false
  },
  password: {
    type: String,
    // ,
    // required:true
  },
  Name_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  Address_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  License_number: {
    type: String,
  },
  Type_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  Description_of_organisation: {
    type: String,
    // ,
    // required:true
  },
  Volunteers_number: {
    type: Number,
    default: 0,
    // ,
    // required:true
  },
  Type_of_help: {
    type: String,
    // ,
    // required:true
  },
  Open_for_volunteers: {
    type: String,
    // ,
    // required:true
  },
  isChecked: { type: Boolean, default: false },
});

/**
 * @note - This function will take in email_id and passowrd, and RETURNS A PROMISE
 * So that it can be easily used with then and catch instead of providing callbacks
 */
User.statics.authenticate = (email_id, pass) => (
  new Promise((resolve, reject) => {
    personModel.findOne({ email: email_id }, (err, doc) => {
      if (err) {
        return reject(err);
      } else if (!doc) {
        //couldn't find a matching document
        err = { msg: `User ${email_id} Not Found` };
        err.status = 401;

        return reject(err);
      }
      bcrypt
        .compare(pass, doc.password)
        .then((result) => {
          if (result === true) {
            console.log(`Successful Login of ${email_id}`);

            return resolve( doc );  // SUCCESS
          } else {
            console.log(`Failed login attempt by ${email_id}`);
            err = { message: `Failed Login Attempt` };
            err.status = 401;
  
            return reject(err);
          }
        })
        .catch((err) => {
          err.message = `Password comparison failed with an error`;
          console.error(err.message, err);
  
          return reject({ msg: err.message, code: err.code });
        });
    });
  })
);

const personModel = model("User", User);
module.exports = personModel;
