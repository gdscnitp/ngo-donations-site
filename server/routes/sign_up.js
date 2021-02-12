const express = require("express");
var router = express.Router();
//const app=express()
const bcrypt = require("bcrypt");

const User = require("../models/person");

var string = require("string-sanitizer");
const sgMail = require("@sendgrid/mail");
var user;
// app.set('view engine','ejs')

// app.get("/sign_up", (req, res)=>{
//
// res.render("sign_up")
// });
router.post("/sign_up/", async (req, res) => {
  // finally url will be "/sign_up/" (as the previous one used)
  console.log("Okay we can reach here");

  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      console.log("Password can not be encrypted");
    }
    user = new User({
      name: req.body.name,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      password: hash,
    });
    user
      .save()
      .then(() => {
        console.log(user);

        // res.sendStatus(200);
      })
      .catch((err) => res.status(500).send(err));
  });

  res.redirect("/willingorganisationsignupstep2");
});

var OTP;
router.post('/verify-email', (req, res) => {
    console.log('Hey there')
    sgMail.setApiKey(process.env.API_KEY)
    stringx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    OTP = '';
    var len = stringx.length;
    for (let i = 0; i < 6; i++) {
        OTP += stringx[Math.floor(Math.random() * len)];
    }


    mail = 'Your OTP is ' + OTP;
    const msg = {
        to: user.email, // Change to your recipient
        from: 'muckinverify@gmail.com', // Change to your verified sender
        subject: 'OTP',
        text: mail,

    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error + ' Cannot send')
        })
    console.log('OTP ' + OTP)
    res.redirect('/willingorganisationsignupstep2')
})

router.post('/verifyemail', (req, res) => {
    otpReq = string.sanitize(req.body.otp);
    if (otpReq === OTP) {
        user.isVerifiedEmail = true;
    }
    user.save().then(() => {
        console.log(user)
    })
    .catch((error) => {
      console.error(error + " Cannot send");
    });
  console.log("OTP " + OTP);
  res.redirect("/willingorganisationsignupstep2");
});

router.post("/verifyemail", (req, res) => {
  otpReq = string.sanitize(req.body.otp);
  if (otpReq === OTP) {
    user.isVerifiedEmail = true;
  }
  user.save().then(() => {
    console.log(user);
  });
  res.redirect("/willingorganisationsignupstep2");
  console.log(otpReq);

  console.log("OTP " + OTP);
});

router.post("/org", (req, res) => {
  // finally url will be "/sign_up/org" (as the previous one used)
  user.Name_of_organisation = string.sanitize(req.body.nameorganisation);
  user.Address_of_organisation = string.sanitize(req.body.addressorganisation);
  user.License_number = string.sanitize(req.body.license);
  user.Type_of_organisation = string.sanitize(req.body.typeorganisation);
  user.Description_of_organisation = string.sanitize(req.body.describe);
  user.Volunteers_number = string.sanitize(req.body.numbervolun);
  user.Type_of_help = string.sanitize(req.body.help);
  user.Open_for_volunteers = string.sanitize(req.body.isopen);
  // console.log(typeof(req.body.Address_of_organisation))
  // console.log(typeof(req.body.Volunteers_number))

  User.updateOne(
    { _id: user._id },
    {
      name: user.name,
      email: user.email,
      contactNumber: user.contactNumber,
      password: user.password,
      Name_of_organisation: user.Name_of_organisation,
      Address_of_organisation: user.Address_of_organisation,
      License_number: user.License_number,
      Type_of_organisation: user.Type_of_organisation,
      Description_of_organisation: user.Description_of_organisation,
      Volunteers_number: user.Volunteers_number,
      Type_of_help: user.Type_of_help,
      Open_for_volunteers: user.Open_for_volunteers,
    }
  ).then(() => {
    console.log(user);
  });

  res.redirect("/willingorganisationsignupstep3");
});

router.post("/accept", (req, res) => {
  res.redirect("/");
});
module.exports = router;
