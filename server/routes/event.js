const router = require('express').Router();
const mongoose =require('mongoose');
const Event = require('../models/event');


router.get("/",(req,res,next)=>{
  res.send("Get request handled by event page");
});

router.post("/", (req, res,next) => {
    
  const event = new Event({
     _id: new mongoose.Types.ObjectId(),
     name: req.body.name,
     Description: req.body.Description,
     Region: req.body.Region,
     StartDate: req.body.StartDate,
     EndDate: req.body.EndDate,
     StartTime: req.body.StartTime,
     EndTime: req.body.EndTime
  });
  event
    .save()
    .then(()=>{
      console.log(event);
    })  
    .catch(err => console.log(err));

  res.status(201).json({
    message:"Handling post request to event",
    event: event
  }); 
});

module.exports = router;
