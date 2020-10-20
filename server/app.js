const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const assert= require('assert');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');
const app = express();

require('dotenv').config();
const User = require('./models/User')

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

var user

app.set('view engine', 'ejs');
//const db = 'mongodb+srv://dscnitp_webdept_muckin:dscnitp_webdept_muckin@cluster0.kokfw.gcp.mongodb.net/User?retryWrites=true&w=majority'
//const db = 'mongodb://127.0.0.1:27017/nwNGO'
const db = 'mongodb+srv://dscnitp_webdept_muckin:dscnitp_webdept_muckin@cluster0.kokfw.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority'
mongoose.connect(db,  {
  useNewUrlParser: true,
  useUnifiedTopology: true,
useFindAndModify: false,
  useCreateIndex: true

}

)
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));






app.get("/sign_up", (req, res)=>{

res.render("sign_up")
});

app.post("/sign_up",(req,res)=>{
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

app.get("/sign_up/org", (req, res)=>{
    res.render("sign_up")
});

app.post("/sign_up/org",(req,res)=>{
  user.Name_of_organisation = req.body.Name_of_organisation,
  user.Address_of_organisation = req.body.Address_of_organisation,
  user.License_number=req.body.License_number,
  user.Type_of_organisation=req.body.Type_of_organisation,
    user.Description_of_organisation=req.body.Description_of_organisation,
      user.Volunteers_number=req.body.Volunteers_number,
      user.Type_of_help=req.body.Type_of_help,
      user.Open_for_volunteers=req.body.Open_for_volunteers
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

      })

   res.redirect('/sign_up/org/preview')
})

app.get("/sign_up/org/preview",(req,res)=>{
  res.render("preview",{
    user:user
  })
})

app.post("/sign_up/org/preview",(req,res)=>{
  res.redirect('/sign_up')
})






const PORT = process.env.PORT ||5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));
