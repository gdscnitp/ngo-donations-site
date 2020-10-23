const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const { join } = require('path');    //for getting path of the static directory
const { exit } = require('process');
const logger = require('morgan');
const userRouter = require('./routes/user.js');
const morgan = require('morgan');
require('dotenv').config();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

var user

app.set('view engine', 'ejs');






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

const db = mongoose.connection; //access to the pending connection
db.on('error', (err) => {
        console.log(`Error in DB connection`)
});
db.once('open', () => {
    console.log(`Connected to the database : ${DB_NAME}`);
})

app.use( morgan('dev') );   //to log requests made to api
app.use( express.urlencoded({extended: false}) );
app.use( express.json() );
app.use( express.static( join( __dirname, 'public'  ) ) );



// Routes START
app.use('/user', userRouter);   //login, logout
// Routes END


    //404 and Error handlers
app.use( (req, res, next) => {  //catch any request to endpoint not available
    next({status: 404, message: `Route ${req.baseUrl} not found`}, req, res);
})
app.use( (err, req, res, next) => { //error handler
    res.status( err.status || 500 ).send(err.message || `Request couldn't be completed`);
})

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











app.listen(
    PORT,
    console.log(`Server listening on ${PORT}`)
);
