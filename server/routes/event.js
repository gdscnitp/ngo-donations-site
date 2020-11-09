
const router = require('express').Router();
const mongoose =require('mongoose');
const rateLimit = require('express-rate-limit')
const Event = require('../models/event');



const limiter  = rateLimit({
  windowMs:24*60*60*1000,
  max:100
});

var string = require('string-sanitizer');
var sanitizer=require('sanitize')();


router.get("",(req,res,next)=>{
  res.send("Get request handled by event page");
});

router.post("", (req, res,next) => {
    
  const User = new Event({
    _id: new mongoose.Types.ObjectId(),

     name: req.body.name,
     description: req.body.description,
     region: req.body.region,
     startDate: req.body.startDate,
     endDate: req.body.endDate,
     startTime: req.body.startTime,
     endTime: req.body.endTime
  });

 User
    .save()
    .then(()=>{
      console.log(User);
    })  
    .catch(err => console.log(err));

   
});

// Edit Event
router.get("/update", (req,res,next)=>{
  res.send("Get request handled by event page");
});

    
router.post("/update",limiter, (req,res,next)=> {
  // let _id  = req.body.id;
  let _id = "5fa182069e2cd54b404d3573";

  Event.findByIdAndUpdate(_id, string.sanitize(req.body), ()=>{
    console.log("data updated");
    });
    res.send('updated');
});

//Delete Event
router.delete("/delete", limiter,(req,res,next)=> {
  // let _id  = req.body.id;
  let _id = "5fa189a1874d2c455884c9bc";
  Event.findByIdAndRemove(_id, ()=>{
    console.log("Event deleted successfully");
  });
  res.send("Deleted");
});

const router = require("express").Router();
const mongoose = require("mongoose");
const Event = require("../models/event");
//import { Event } from '../models/event';

router.get("", (req, res, next) => {
  res.send("Get request handled by event page");
});

router.post("", (req, res, next) => {
  const User = new Event({
    _id: new mongoose.Types.ObjectId(),

    name: req.body.name,
    description: req.body.description,
    region: req.body.region,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
  });

  User.save()
    .then(() => {
      console.log(User);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

