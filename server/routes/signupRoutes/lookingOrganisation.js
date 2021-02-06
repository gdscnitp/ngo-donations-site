const mongoose = require('mongoose');
var string = require("string-sanitizer");
const sgMail = require('@sendgrid/mail')
const express = require("express");
var router = express.Router()
//const app=express()
const bcrypt = require("bcrypt");
const User = require('../../models/signupSchema/LookingOrganisation')
var user
router.post('/lookingOrganisationStep1',(req,res)=>{
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

     res.redirect('/lookingorganisationsignupstep2')
})

var OTP;
router.post('/lookingOrganisationverify-email', (req, res) => {
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
    res.redirect('/lookingorganisationsignupstep2')
})

router.post('/lookingOrganisationverifyemail', (req, res) => {
    otpReq = string.sanitize(req.body.otp);
    if (otpReq === OTP) {
        user.isVerifiedEmail = true;
    }
    user.save().then(() => {
        console.log(user)
    })
    res.redirect('/lookingorganisationsignupstep2')
    console.log(otpReq);

    console.log("OTP " + OTP);


})


router.post('/lookingOrganisationStep2',(req,res)=>{
    user.organisation=string.sanitize(req.body.organisation)
    user.address=string.sanitize(req.body.address)
    user.license=string.sanitize(req.body.license)
    user.typeofOrganisation=string.sanitize(req.body.typeofOrganisation)
    user.describe=string.sanitize(req.body.describe)
    user.volunteers_no=string.sanitize(req.body.volunteers_no)
    user.type_of_people=string.sanitize(req.body.type_of_people)
    user.type_of_help=string.sanitize(req.body.type_of_help)
    User.updateOne(
        { _id: user._id },
        {
            name: user.name,
            email: user.email,
            contact: user.contact,
            password: user.password,
            organisation:user.organisation,
            address:user.address,
            license:user.license,
            typeofOrganisation:user.typeofOrganisation,
            describe:user.describe,
            volunteers_no:user.volunteers_no,
            type_of_help:user.type_of_help,
            type_of_people:user.type_of_people
        }
    ).then(() => {
        console.log(user)

})
res.redirect('/lookingorganisationsignupstep3')
})


router.post("/lookingOrganisationStep3", (req, res) => {
    res.redirect('/')
})
module.exports = router