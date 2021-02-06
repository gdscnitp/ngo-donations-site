const mongoose = require('mongoose');
var string = require("string-sanitizer");
const sgMail = require('@sendgrid/mail')
const express = require("express");
var router = express.Router()
//const app=express()
const bcrypt = require("bcrypt");
const User = require('../../models/signupSchema/WillingIndividual')
var user
router.post('/willingIndividualStep1',(req,res)=>{
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

     res.redirect('/willingindividualsignupstep2')
})


var OTP;
router.post('/willingIndividualverify-email', (req, res) => {
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
    res.redirect('/willingindividualsignupstep2')
})

router.post('/willingIndividualverifyemail', (req, res) => {
    otpReq = string.sanitize(req.body.otp);
    if (otpReq === OTP) {
        user.isVerifiedEmail = true;
    }
    user.save().then(() => {
        console.log(user)
    })
    res.redirect('/willingindividualsignupstep2')
    console.log(otpReq);

    console.log("OTP " + OTP);


})

router.post('/willingIndividualStep2',(req,res)=>{
    
    user.how_to_help=string.sanitize(req.body.how_to_help)
    
    user.prev_exp=string.sanitize(req.body.prev_exp)
    
    user.address=string.sanitize(req.body.address)
    
    user.occupation=string.sanitize(req.body.occupation)
    

    user.willJoinOrganisation=string.sanitize(req.body.willJoinOrgnaisation)
    

    User.updateOne(
        { _id: user._id },
        {
            name: user.name,
            email: user.email,
            contact: user.contact,
            password: user.password,
            prev_exp: user.prev_exp,
            address: user.address,
            occupation:user.occupation,
            how_to_help:user.how_to_help,
            willJoinOrganisation:user.willJoinOrganisation
        }
    ).then(() => {
        console.log(user)

})
res.redirect('/willingindividualsignupstep3')
})


router.post("/willingIndividualStep3", (req, res) => {
    res.redirect('/')
})
module.exports = router