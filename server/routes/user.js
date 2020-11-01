const router = require("express").Router();
const userModel = require("../models/schemas/user");
const { validateLoginData, loggedInCheck } = require("../utils/validators");
const { hash } = require("bcrypt");

//temporary route for testing, will be replaced by the one made by signup backend team
router.post("/signup", (req, res) => {
  const user_id = req.body.userName;
  const pass = req.body.password;

  if (!validateLoginData(user_id, pass)) {
    return res.status(401).send({
      error: "Invalid login data passed or All fields not filled",
      receivedUserName: req.body.userName,
    });
  }

  userModel.create({ userName: user_id, pass: pass }, (err, doc) => {
    if (!err && doc) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  });
});

/**
 * Login @route -> /user/login
 *
 * @note -> If login is successful the userName is also stored in the session,
 * 			and can be accessed using `req.session.uName`
 *
 * @request_body -> { "userName": "<username of user>", "pass": "<password of user>" }
 *
 * @response -> @statusCode -> 200 (if success)
 * 							   304 (already logged in)
 *
 * 				when failed -> 401 (login data INVALID, OR, login FAILED)
 * 							   5xx (Server failure)
 */
router.post("/login", loggedInCheck, (req, res, next) => {
  const { userName, pass } = req.body;

  if (!validateLoginData(userName, pass)) {
    return res.status(401).send({
      error: "Invalid login data passed or All fields not filled",
    });
  }

  userModel.authenticate(userName, pass, (err, user) => {
    if (err) {
      err.status = 401;

      return next(err);
    }

    console.log(`[${Date.now()}] Login of ${user.userName} successful`);
    req.session.uName = user.userName;
    hash(user.userName + user.password, 2, (err, hashed) => {
      if (!err) {
        req.session.uHash = hashed;
      }
    });

    return res.status(200).send("Login of user successful"); //logic successful
  });
});

module.exports = router;
