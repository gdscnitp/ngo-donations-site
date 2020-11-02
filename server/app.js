const express = require('express');
const rateLimit = require('express-rate-limit')
//const { body } = require('express-validator');

const mongoose = require('mongoose');
const { join } = require('path'); 
const bcrypt = require('bcryptjs')   //for getting path of the static directory
const { exit } = require('process');
const logger = require('morgan');
const userRouter = require('./routes/user.js');

const morgan = require('morgan');
require('dotenv').config();
const User=require('./models/person');
//const Event=require('./models/event');
const PORT = process.env.PORT || 3000;
const DB_NAME = 'events'        // later change it according to database
const MONGO_DB_URI = `mongodb+srv://dscnitp_webdept_muckin:dscnitp_webdept_muckin@cluster0.kokfw.gcp.mongodb.net/project2?retryWrites=true&w=majority`;
mongoose.connect( MONGO_DB_URI , 
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
    //w: 'majority'
}).catch(err => { console.error(`Error in DB connection: mongo DB couldn't be reached`); exit(1); });

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

const app = express();
app.use( morgan('dev') );   //to log requests made to api
app.use( express.urlencoded({extended: false}) );
app.use( express.json() );
app.use( express.static( join( __dirname, 'public'  ) ) );


// app.set('view engine','ejs')







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




app.get('/', function(req, res){
  console.log("Root Route")
  res.json({ message: "hello world" });
});



app.use('/user', userRouter);
app.use('/event', require('./routes/event'));





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
