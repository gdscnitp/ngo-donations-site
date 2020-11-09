const app = require("express")();
const bcrypt = require("bcrypt");

const User = require("../models/person");

var string = require("string-sanitizer");

var user;
// app.set('view engine','ejs')

// app.get("/sign_up", (req, res)=>{
//
// res.render("sign_up")
// });

app.post("/", (req, res) => { // finally url will be "/sign_up/" (as the previous one used)
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
    user.save().then(() => {
      console.log(user);
    });
  });

  // res.redirect('/sign_up/org')
});

// app.get("/sign_up/org", (req, res)=>{
//     res.render("sign_up")
// });

app.post("/org", (req, res) => { // finally url will be "/sign_up/org" (as the previous one used)
  user.Name_of_organisation = string.sanitize(req.body.Name_of_organisation);
  user.Address_of_organisation = string.sanitize(
    req.body.Address_of_organisation
  );
  user.License_number = string.sanitize(req.body.License_number);
  user.Type_of_organisation = string.sanitize(req.body.Type_of_organisation);
  user.Description_of_organisation = string.sanitize(
    req.body.Description_of_organisation
  );
  user.Volunteers_number = string.sanitize(req.body.Volunteers_number);
  user.Type_of_help = string.sanitize(req.body.Type_of_help);
  user.Open_for_volunteers = string.sanitize(req.body.Open_for_volunteers);
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
    console.log(req.body.Volunteers_number);
    console.log(user.Name_of_organisation);
    console.log(user.Address_of_organisation);
  });

  // res.redirect("/sign_up/org/preview")
});

// app.get("/sign_up/org/preview",(req,res)=>{
//   res.render("preview",{
//     user:user
//   })
// })

// app.post("/sign_up/org/preview",(req,res)=>{
//   user.isChecked=true
//   User.updateOne({_id:user._id},{
//     user:user}).then(()=>{
//     console.log(user)
//   })
//
// })

app.get("/", function (req, res) {
  console.log("Root Route");
  res.json({ message: "hello world" });
});

module.exports = app;
