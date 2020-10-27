var express = require('express');
var router = express.Router();
var path = require('path');
var bcrypt= require('bcryptjs')
var mongoose = require('mongoose')
var path = require('path')
const User=require('../models/person.js')
var user

router.get("/sign_up", (req, res)=>{

res.render("../views/sign_up")
});

router.post("/sign_up",(req,res)=>{
bcrypt.hash(req.body.password,10,(err,hash)=>{
if(err){
  console.log('Password can not be encrypted')
}
user= new User({

 name:req.body.name,
 contactNumber:req.body.contactNumber,
 email:req.body.email,
 password:hash
})
user.save().then(()=>{
 console.log(user)
})




})





    res.redirect('/sign_up/org')

  })

router.get("/sign_up/org", (req, res)=>{
    res.render("../views/sign_up")
});

router.post("/sign_up/org",(req,res)=>{

      User.updateOne({_id:user._id},{
        name:user.name,
        email:user.email,
        contactNumber:user.contactNumber,
        password:user.password,
        Name_of_organisation : req.body.Name_of_organisation,
        Address_of_organisation : req.body.Address_of_organisation,
          License_number:req.body.License_number,
          Type_of_organisation:req.body.Type_of_organisation,
        Description_of_organisation:req.body.Description_of_organisation,
          Volunteers_number:req.body.Volunteers_number,
          Type_of_help:req.body.Type_of_help,
          Open_for_volunteers:req.body.Open_for_volunteers})
          .then(()=>{
                  user.Name_of_organisation = req.body.Name_of_organisation,
                  user.Address_of_organisation = req.body.Address_of_organisation,
                  user.License_number=req.body.License_number,
                  user.Type_of_organisation=req.body.Type_of_organisation,
                    user.Description_of_organisation=req.body.Description_of_organisation,
                      user.Volunteers_number=req.body.Volunteers_number,
                      user.Type_of_help=req.body.Type_of_help,
                      user.Open_for_volunteers=req.body.Open_for_volunteers
      })

   res.redirect('/sign_up/org/preview')
})

router.get("/sign_up/org/preview",(req,res)=>{
  res.render("../views/preview",{
    user:user
  })
})

router.post("/sign_up/org/preview",(req,res)=>{
  user.isChecked=true
  User.updateOne({_id:user._id},{
    user:user}).then(()=>{
    console.log(user)
  })

})

module.exports= router
