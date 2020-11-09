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
