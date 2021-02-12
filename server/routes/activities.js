const express = require("express");
const router = express.Router();
const multer = require("multer");

const path = require("path");
const Activity = require("../models/Activity");

const app = express();
//  const upload = multer({dest: 'uploads/'});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/png"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // later updated;
  },
  fileFilter: fileFilter,
});

// router.get('/activity', (req,res)=>
// {
//   console.log('Hello')
//  });
router.post('/activity',upload.single('image'),(req, res, next) => {
  console.log(req.file);
  const act = new Activity({
    donateTo: req.body.donateTo,
    donationType: req.body.donationType,
    shareTheMoney: req.body.shareTheMoney,
    image: req.file.path,
  });

  act.save().then((result) => {
    console.log(result);
  });
  res.redirect("/need");
});
module.exports = router;


//@url /activities/getlist
//@desc to get all the list of the activities
//@auth public

router.get('/getlist', async (req, res) => {
  try {
    const response = await Activity.find({});
    res.status(200).json(response)
  } catch (error) {
    console.log(error.message)
  }
})
module.exports = router



