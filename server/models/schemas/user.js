const { Schema, model, SchemaTypes } = require("mongoose");

const bcrypt = require("bcrypt");

// @note - this model will change according to the one used by signup backend team, according to how the info is originally stored
const userSchema = Schema({
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    index: true,
    alias: "name"
  },
  email: {
    // email or mobile one of them should be required
    type: String,
    unique: true,
    sparse: true
  },
  mobile: {
    type: String,
    unique: true,
    sparse: true
  },
  oauth: {
    // oauth token
    type: String,
    unique: true,
    trim: true,
  },
  verified: {
    profile: Boolean, // if profile is verified
    oauth: Boolean,
    email: Boolean,
    mobile: Boolean,
  },
  pass: {
    type: String,
    required: true,
    alias: "password", // not stored on db
  },
  profileImg: {
    // will be a URL
    type: String,
  },
  orgs: {
    // ids of organisations (in their collection) of which the user is a part, role to be determined from organisation database storing the roles of members
    type: [SchemaTypes.ObjectId],
  },
});

userSchema.pre("save", function (next) {
  if (!this.email && !this.mobile) {
    console.error(`Atleast email or mobile number, ${this.userName}`);
  }

  const salt_rounds = 10; //to be able to change, as the app scales	// @note - can be replaced with just bcrypt.hash later
  bcrypt
    .genSalt(salt_rounds)
    .then((salt) => {
      //using arrow function, so that `this` reference doesn't change
      bcrypt
        .hash(this.pass, salt)
        .then((encrypted) => {
          this.pass = encrypted;
          next();
        })
        .catch((err) => {
          console.error(`Error in generating encrypted password, ${err.code}`);
          next(err);
        });
    })
    .catch((err) => {
      console.error(`Error in generating salt, ${err.code}`);
      next(err);
    });
});

/**
 * @note - This function will take in user_id and passowrd, and RETURNS A PROMISE
 * So that it can be easily used with then and catch instead of providing callbacks
 */
userSchema.statics.authenticate = (user_id, pass) => (
  new Promise((resolve, reject) => {
    userModel.findOne({ userName: user_id }, (err, doc) => {
      if (err) {
        return reject(err);
      } else if (!doc) {
        //couldn't find a matching document
        err = { msg: `User ${user_id} Not Found` };
        err.status = 401;

        return reject(err);
      }
      bcrypt
        .compare(pass, doc.pass)
        .then((result) => {
          if (result === true) {
            console.log(`Successful Login of ${user_id}`);

            return resolve( doc );  // SUCCESS
          } else {
            console.log(`Failed login attempt by ${user_id}`);
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

const userModel = model("auth", userSchema);
module.exports = userModel;
