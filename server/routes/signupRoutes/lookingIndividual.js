const mongoose = require('mongoose');
var string = require("string-sanitizer");
const sgMail = require('@sendgrid/mail')
const express = require("express");
var router = express.Router()
//const app=express()
const bcrypt = require("bcrypt");
const User = require('../../models/signupSchema/LookingIndividual')
var user
router.post('/lookingIndividualStep1',(req,res)=>{
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            console.log("Password can not be encrypted");
        }
        user = new User({
            name: req.body.name,
            contact: req.body.contact,
            email: req.body.email,
            password: hash
        });
        user.save().then(() => {
            console.log(user);
            
           // res.sendStatus(200);
        })
        .catch(err => res.status(500).send(err));

    });

     res.redirect('/lookingindividualsignupstep2')
})

var OTP;
router.post('/lookingIndividualverify-email', (req, res) => {
    console.log('Hey there')
    sgMail.setApiKey('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')
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
    res.redirect('/lookingindividualsignupstep2')
})

router.post('/lookingIndividualverifyemail', (req, res) => {
    otpReq = string.sanitize(req.body.otp);
    if (otpReq === OTP) {
        user.isVerifiedEmail = true;
    }
    user.save().then(() => {
        console.log(user)
    })
    res.redirect('/lookingindividualsignupstep2')
    console.log(otpReq);

    console.log("OTP " + OTP);


})

router.post('/lookingIndividualStep2',(req,res)=>{
    user.describe=string.sanitize(req.body.describe)
    user.typeofHelp=string.sanitize(req.body.typeofHelp)
    user.address=string.sanitize(req.body.address)
    user.occupation=string.sanitize(req.body.occupation)
    user.willJoinOrganisation=string.sanitize(req.body.willJoinOrganisation)
    User.updateOne(
        { _id: user._id },
        {
            name: user.name,
            email: user.email,
            contact: user.contact,
            password: user.password,
            describe: user.describe,
            address: user.address,
            occupation:user.occupation,
            typeofHelp:user.typeofHelp,
            willJoinOrganisation:user.willJoinOrganisation
        }
    ).then(() => {
        console.log(user)

})
res.redirect('/lookingindividualsignupstep3')
})


router.post("/lookingIndividualStep3", (req, res) => {
    res.redirect('/')
})
module.exports = router