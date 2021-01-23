const express = require ('express');
const router = express.Router();
const User = require('../models/orgSignup');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;


router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))

router.use(passport.initialize());
router.use(passport.session());

passport.use('signup', new LocalStrategy({
  passReqToCallback : true,
},
function(req, username, password, done) {
  findOrCreateUser = function(){
    // find a user in Mongo with provided username
    User.findOne({'username': username},function(err, user) {
      // In case of any error return
      if (err){
        console.log('Error in SignUp: '+err);
        return done(err);
      }
      // already exists
      if (user) {
        console.log('User already exists');
        return done(null, false,
           req.flash('message','User Already Exists'));
      } else {
        // if there is no user with that email
        // create the user
        const newUser = new User();
        // set the user's local credentials
        // newUser.username = username;
        // newUser.password = createHash(password);
        newUser.username = req.body.Name
        newUser.contactNumber = req.body.contactNo;
        newUser.problem  = req.body.Problem,
        newUser.nameOrg = req.body.nameOrg,
        newUser.address = req.body.address,
        newUser.licenceNumber = req.body.licenceNumber,
        newUser.yearOfEstablishment = req.body.year,
        newUser.typeofOrg = req.body.typeofOrg,
        newUser.description = req.body.description,
        newUser.volunteers = req.body.volunteers,
        newUser.helpedPeople= req.body.helpedPeople,

        // save the user
        newUser.save(function(err) {
          if (err){
            console.log('Error in Saving user: '+err);
            throw err;
          }
          console.log('User Registration succesful');
          return done(null, newUser);
        });
      }
    });
  };

  // Delay the execution of findOrCreateUser and execute
  // the method in the next tick of the event loop
  process.nextTick(findOrCreateUser);
})
)


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());




// Handles Signup Request
router.post('/signup', (req, res, next) => {

  User.register(
    {
      username: req.body.Name,
      email: req.body.Email,
      contactNumber : req.body.contactNo,
      nameOrg : req.body.nameOrg,
      address : req.body.address,
      licenceNumber : req.body.licenceNumber,
      yearOfEstablishment: req.body.year,
      typeofOrg: req.body.typeofOrg,
      description: req.body.description,
      volunteers: req.body.volunteers,
      helpedPeople: req.body.helpedPeople,
    },
  req.body.Password, (err, user) => {
  if(err) {
    console.log(err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.json({err: err});
  }
  else {
    passport.authenticate('local')(req, res, () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({success: true, status: 'Registration Successful!'});
    });
  }
})
})





module.exports = router;
