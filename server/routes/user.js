const router = require("express").Router();
const userModel = require("../models/schemas/user");
const { validateLoginData } = require("../utils/validators");
const csurf = require('csurf');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

router.use( csurf({ cookie: true }) );

passport.use(new localStrategy(
  (uname, pass, done) => {
    userModel.findOne({userName: uname}).exec()
      .then((user) => {
        if( !user ){
          return done(null, false, { message: "User not Found" });
        }else{
          userModel.authenticate(uname, pass, (err, user) => {
            if (err) {
              err.status = 401;

              return done(err, false, {message: `Error during logging in uname - ${uname}`});
            }

            return done(null, user, {message: "Login of user successful"}); //logic successful
          });
        }
      })
      .catch((err) => {
        err.status = 401;

        return done(err, false, {message: `Error during logging in uname - ${uname}`});
      })
  }
))

/**
 * Login @route -> /user/login
 *
 * @note -> If login is successful then req.user is set by passport
 * 
 * @request_body -> { "userName": "<username of user>", "pass": "<password of user>" }
 *
 * @response -> @statusCode -> 200 (if success)
 *
 * 				when failed -> 401 (login data INVALID, OR, login FAILED)
 * 							   5xx (Server failure)
 */
router.post('/login', (req, res, next) => {

  try{
    // checking if both username and password match regex patterns, @note - This can be done client side too
    if( ! validateLoginData(req.body.username, req.body.password) ){
      return next({ status: 401 });
    }
  }catch(err){
    return next({ status: 401 });
  };

  passport.authenticate("local", (err, user, info) => {
    if( err ){  // err also has status code, applied by the localStrategy
      console.log();
      return next( err );
    }
    if( !user ){
      console.log( info.message || "User Not Found" );
      return next({ status: 401 });
    }

    console.log(`[${Date.now()}] Login of ${user.userName} successful`);
    req.login();  // when using a custom cb, this is advised
    return res.sendStatus(200);

  })(req, res, next); // authenticate() returned a closure, to which we pass the req and res objects

})

module.exports = router;
