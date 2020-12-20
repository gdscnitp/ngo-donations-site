const router = require("express").Router();
const userModel = require("../models/schemas/user");
const { validateLoginData } = require("../utils/validators");
const csurf = require('csurf');
const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const cors = require("cors");

router.use( csurf({ cookie: true }) );
router.use(cors)  // @todo - Setup cors for origin netlify.app

router.use(passport.initialize());
router.use(passport.session());

passport.use(new localStrategy(
  (uname, pass, done) => {
    userModel.findOne({userName: uname}).exec()
      .then((user) => {
        if( !user ){
          return done(null, false, { message: "User not Found" });
        }else{
          userModel.authenticate(uname, pass)
                      .then((user) => {
                        return done(null, user, {message: "Login of user successful"}); //logic successful
                      })
                      .catch((err) => {
                        err.status = 401;

                        return done(err, false, {message: `Error during logging in uname - ${uname}`});          
                      })
            }
      })
      .catch((err) => {
        err.status = 401;

        return done(err, false, {message: `Error during logging in uname - ${uname}`});
      })
  }
))

passport.serializeUser((user, callback) => {
  callback(null, user.id);
});

passport.deserializeUser((id, callback) => {
  userModel.findById( id, (err, user) => {
    if(err){
      callback(err, null);
    }

    callback(null, {
      name: user.name,
      oauth: user.oauth,  // if avaialable
      verified: user.verified,
    });

  });
})

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
    return res.status(200).json({
      user: req.user
    });

  })(req, res, next); // authenticate() returned a closure, to which we pass the req and res objects

})

module.exports = router;
