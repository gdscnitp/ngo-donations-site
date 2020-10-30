const express = require('express');
const rateLimit = require('express-rate-limit')
const { body } = require('express-validator');
const app = express();
const mongoose = require('mongoose');
const { join } = require('path');    //for getting path of the static directory
const { exit } = require('process');
const logger = require('morgan');
const userRouter = require('./routes/user.js');
const morgan = require('morgan');
require('dotenv').config();
<<<<<<< HEAD
const User=require('./models/person')
=======

const route1 = require('./routes/userSignup');
const route2 = require('./routes/orgSignup');
const editUser = require('./routes/api.js');
const editActivity = require('./routes/activities.js');

>>>>>>> signup (org + ind) looking for help Backend
const PORT = process.env.PORT || 3000;
const DB_NAME = 'auth'        // later change it according to database
const MONGO_DB_URI = `mongodb+srv://dscnitp_webdept_muckin:${process.env.DB_PASSWORD}@cluster0.kokfw.gcp.mongodb.net`;
mongoose.connect( MONGO_DB_URI , {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
    w: 'majority'
}).catch(err => { console.error(`Error in DB connection: mongo DB couldn't be reached`); exit(1); });
<<<<<<< HEAD
const bcrypt = require('bcryptjs')
=======
mongoose.set("useCreateIndex",true);

>>>>>>> signup (org + ind) looking for help Backend
const db = mongoose.connection; //access to the pending connection
db.on('error', (err) => {
        console.log(`Error in DB connection`)
});
db.once('open', () => {
    console.log(`Connected to the database : ${DB_NAME}`);
})
const limiter  = rateLimit({
  windowMs:24*60*60*1000,
  max:100
});
var string = require('string-sanitizer')
var sanitizer=require('sanitize')();

var user
app.use( morgan('dev') );   //to log requests made to api
app.use( express.urlencoded({extended: false}) );
app.use( express.json() );
app.use( express.static( join( __dirname, 'public'  ) ) );
// app.set('view engine','ejs')


// Routes START
app.use('/user', userRouter);   //login,
app.use('/editUser',editUser); // edit user profile
app.use('/edit',editActivity); // edit activities
app.use('/api1', route1);  // signup user looking for help
app.use('/api2',route2); // signup org looking for help
// Routes END




// app.get("/sign_up", (req, res)=>{
//
// res.render("sign_up")
// });

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





  // res.redirect('/sign_up/org')

  })

// app.get("/sign_up/org", (req, res)=>{
//     res.render("sign_up")
// });

app.post("/sign_up/org",limiter,(req,res)=>{

  user.Name_of_organisation = string.sanitize(req.body.Name_of_organisation)
  user.Address_of_organisation = string.sanitize(req.body.Address_of_organisation)
  user.License_number=string.sanitize(req.body.License_number)
  user.Type_of_organisation=string.sanitize(req.body.Type_of_organisation)
    user.Description_of_organisation=string.sanitize(req.body.Description_of_organisation)
      user.Volunteers_number=string.sanitize(req.body.Volunteers_number)
      user.Type_of_help=string.sanitize(req.body.Type_of_help)
      user.Open_for_volunteers=string.sanitize(req.body.Open_for_volunteers)
// console.log(typeof(req.body.Address_of_organisation))
// console.log(typeof(req.body.Volunteers_number))

        User.updateOne({_id:user._id},{
          name:user.name,
          email:user.email,
          contactNumber:user.contactNumber,
          password:user.password,
          Name_of_organisation : user.Name_of_organisation,
          Address_of_organisation : user.Address_of_organisation,
            License_number:user.License_number,
            Type_of_organisation:user.Type_of_organisation,
          Description_of_organisation:user.Description_of_organisation,
            Volunteers_number:user.Volunteers_number,
            Type_of_help:user.Type_of_help,
            Open_for_volunteers:user.Open_for_volunteers}).then(()=>{
            console.log(req.body.Volunteers_number)
            console.log(user.Name_of_organisation)
            console.log(user.Address_of_organisation)
            })

// res.redirect("/sign_up/org/preview")

})

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








    //404 and Error handlers
app.use( (req, res, next) => {  //catch any request to endpoint not available
    next({status: 404, message: `Route ${req.baseUrl} not found`}, req, res);
})
app.use( (err, req, res, next) => { //error handler
    res.status( err.status || 500 ).send(err.message || `Request couldn't be completed`);
})


app.listen(
    PORT,
    console.log(`Server listening on ${PORT}`)
);
