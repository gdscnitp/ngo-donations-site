const userModel = require("../models/schemas/user");
const { compare } = require("bcrypt");

// for now, `u_id` can be an email or a username
const validateLoginData = (u_id, pass) => {
  if (!u_id || !pass || typeof u_id !== "string" || typeof pass !== "string") {
    return false;
  }

  const userName_regex = new RegExp(/^[a-zA-Z0-9_-]{3,16}$/u, "u");
  const email_regex = new RegExp(/^.+@.+$/u, "u");

  return userName_regex.test(u_id) || email_regex.test(u_id);
};

/*
 * @about the next line and the if condition, checks if a user is already logged in
 * @note - Frontend client should not call the /login route for logged in user, the next if condition is just a preventive measure in case it happens maybe due to a bug
 */
const loggedInCheck = async (req, res, next) => {
  if (req.session.uName && req.session.uHash) {
    const query = userModel.findOne({ userName: req.session.uName });
    await query
      .exec()
      .then((user) => {
        if (!user) {
          req.session.uName = null;
        } else {
          compare(user.userName + user.password, req.session.uHash).then(
            (isSame) => {
              if (isSame) {
                return res
                  .status(304)
                  .send({ msg: "You are already logged in :-)" });
              } else {
                req.session.uHash = null;

                return next(req, res); // Continue to login
              }
            }
          ); // exception thrown will be caught by next caught block
        }
      })
      .catch((err) => {
        console.error(`[${[Date()]} At logged in check] `, err);

        return res.sendStatus(500);
      }); // server error; couldn't query the database
  }
};

exports.validateLoginData = validateLoginData;
exports.loggedInCheck = loggedInCheck;
