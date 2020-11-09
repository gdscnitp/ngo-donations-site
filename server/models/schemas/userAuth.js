const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

// @note - this model will change according to the one used by signup backend team, according to how the info is originally stored
const userAuth = mongoose.Schema({
  userName: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
});

userAuth.pre("save", function (next) {
  const salt_rounds = 10; //to be able to change, as the app scales

  // @note - can be replaced with just bcrypt.hash later
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

userAuth.statics.authenticate = function (user_id, pass, callback) {
  userModel.findOne({ userName: user_id }, async (err, doc) => {
    if (err) return callback(err);
    else if (!doc) {
      //couldn't find a matching document
      err = { msg: `User ${user_id} Not Found` };
      err.status = 401;
      return callback(err);
    }
    bcrypt
      .compare(pass, doc.pass)
      .then((result) => {
        if (result === true) {
          console.log(`Successful Login of ${user_id}`);
          return callback(null, doc);
        } else {
          console.log(`Failed login attempt by ${user_id}`);
          err = { message: `Failed Login Attempt` };
          err.status = 401;
          return callback(err);
        }
      })
      .catch((err) => {
        err.message = `Password comparison failed with an error`;
        console.error(err.message, err);
        return callback({ msg: err.message, code: err.code });
      });
  });
};

const userModel = mongoose.model("auth", userAuth);
module.exports = userModel;
