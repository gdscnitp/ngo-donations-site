const express = require("express");
const router = express.Router();
const multer = require("multer");
const User = require("../models/Activities");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/");
  },
  filename: function (req, file, cb) {
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

var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5, // later updated;
  },
  fileFilter: fileFilter,
});

// image path
// limit: 5mb
// filter : png, jpeg,jpg
// later checkAuth added to check user signin or not;
router.patch("/image/:id", upload.single("profileImage"), function (
  req,
  res,
  next
) {
  const id = req.params.id;
  const profilePic = req.file.path;

  userModel.findById(id, function (err, data) {
    data.Image = profilePic ? profilePic : data.Image;
    data
      .save()
      .then((doc) => {
        res.status(201).json({
          message: "Profile Image Updated Successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
});
// update records route
router.patch("/update-details/", function (req, res, next) {
  // check added later

  const id = req.params.id;
  const Info = req.body.details;
  userModel.findById(id, function (err, data) {
    data.UserName = Info ? Info : data.UserName;
    data
      .save()
      .then((doc) => {
        res.status(201).json({
          message: "Category Updated Successfully",
          results: doc,
        });
      })
      .catch((err) => {
        res.json(err);
      });
  });
});

// delete records route
router.delete("/delete-details/", function (req, res, next) {
  const id = req.body._id;
  findByIdAndRemove(id)
    .then((doc) => {
      res.status(201).json({
        message: "Category Deleted Successfully",
        results: doc,
      });
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
