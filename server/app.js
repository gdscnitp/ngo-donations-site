const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { join } = require("path"); //for getting path of the static directory
const { exit } = require("process");
const morgan = require("morgan");
const session = require("express-session"); // @note - Session data is not saved in the cookie itself, just the session ID. Session data is stored server-side
const mongoStore = require("connect-mongo")(session);
const rateLimit = require("express-rate-limit");
const userRouter = require("./routes/user");
const activitiesRouter = require("./routes/activities");
const feedRouter = require("./routes/feed");
const requestRouter = require("./routes/request");
const signupRouter = require("./routes/sign_up");
const { SESSION_SECRET } = require("./secretConfig");
const sgMail = require('@sendgrid/mail')
require("dotenv").config();
const User = require("./models/person");
var string = require("string-sanitizer");
const bcrypt = require("bcrypt");
var user;
//PORT = 3001;
const PORT = process.env.PORT || 5000;  // changed so fronted runs on 3000 and server at 5000
const DB_NAME = "muckin_testing"; // @note - later change it according to database used in production

const MONGO_DB_URI = `mongodb+srv://dscnitp_webdept_muckin:${process.env.DB_PASSWORD}@cluster0.kokfw.gcp.mongodb.net?retryWrites=true`; // @note - Don't modify this, if it doesn't work for you please ask
//${process.env.DB_PASSWORD}
mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
      dbName:"fin",
    w: "majority",
  })
  .catch((err) => {
    console.error(`Error in DB connection: mongo DB couldn't be reached`);
    console.error(err);
    exit(1);
  });

const db = mongoose.connection; //access to the pending connection
db.on("error", (err) => {
  console.log(`Error in DB connection`);
  console.error(err);
});
db.once("open", () => {
  console.log(`Connected to the database : ${DB_NAME}`);
});

if( process.env.NODE_ENV !== 'production' )
  app.use(
    require("cors")({
    origin: "*"
  }))

app.use(
  rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 100,
  })
);

app.use(morgan("dev")); // to log requests made to api
app.use(express.urlencoded({ extended: false })); // to parse url encoded data and form inputs
app.use(express.json()); // to parse json data
app.use(express.static(join(__dirname, "public")));
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false, // since connect-mongo implements `touch` method, so resave:true not required
    saveUninitialized: false, // useful for implementing login sessions
    cookie: {
      // secure: true,	// @note - uncomment, if all clients will be on HTTPS
      maxAge: 14 * 24 * 3600, // 14 days
    },
    store: new mongoStore({
      url: MONGO_DB_URI,
      dbName: "session-store",
    }),
  })
);

//app.post('/sign_up', (req, res) => {
  //  console.log('Hello')
//})


// Routes START
app.use("/user", userRouter); // login, logout
app.use("/sign_up", signupRouter); // sign_up individual and organisation
app.use("/activities", activitiesRouter); // image, update-details, delete-details
app.use("/requests", requestRouter); // /new request
app.use("/feeds", feedRouter); // /get feeds
// Routes END
app.use("/org", signupRouter);




app.post("/sign_up/", async (req, res) => { // finally url will be "/sign_up/" (as the previous one used)
    console.log('Okay we can reach here')


    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            console.log("Password can not be encrypted");
        }
        user = new User({
            name: req.body.name,
            contactNumber: req.body.contactNumber,
            email: req.body.email,
            password: hash
        });
        user.save().then(() => {
            console.log(user);
        });

    });

    res.redirect('/willingorganisationsignupstep2')
});

var OTP;
app.post('/verify-email', (req, res) => {
    console.log('Hey there')
    sgMail.setApiKey(process.env.API_KEY)
    stringx = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    OTP = '';
    var len = stringx.length;
    for (let i = 0; i < 6; i++) {
        OTP += stringx[Math.floor(Math.random() * len)];
    }


    mail = 'Your OTP is ' + OTP;
    const msg = {
        to: user.email, // Change to your recipient
        from: 'muckinverify@gmail.com', // Change to your verified sender
        subject: 'OTP',
        text: mail,

    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error + ' Cannot send')
        })
    console.log('OTP ' + OTP)
    res.redirect('/willingorganisationsignupstep2')
})

app.post('/verifyemail', (req, res) => {
    otpReq = string.sanitize(req.body.otp);
    if (otpReq === OTP) {
        user.isVerifiedEmail = true;
    }
    user.save().then(() => {
        console.log(user)
    })
    res.redirect('/willingorganisationsignupstep2')
    console.log(otpReq);

    console.log("OTP " + OTP);


})

























app.post("/org", (req, res) => { // finally url will be "/sign_up/org" (as the previous one used)
    user.Name_of_organisation = string.sanitize(req.body.nameorganisation);
    user.Address_of_organisation = string.sanitize(
        req.body.addressorganisation
    );
    user.License_number = string.sanitize(req.body.license);
    user.Type_of_organisation = string.sanitize(req.body.typeorganisation);
    user.Description_of_organisation = string.sanitize(
        req.body.describe
    );
    user.Volunteers_number = string.sanitize(req.body.numbervolun);
    user.Type_of_help = string.sanitize(req.body.help);
    user.Open_for_volunteers = string.sanitize(req.body.isopen);
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
        console.log(user)
    });



    res.redirect("/willingorganisationsignupstep3")
});

app.post("/accept", (req, res) => {
    res.redirect('/')
})
































//404 and Error handlers
app.use((req, res, next) => {
  //catch any request to endpoint not available
  next({ status: 404, message: `Route ${req.baseUrl} not found` }, req, res);
});
app.use((err, req, res, next) => {
  //error handler
  res
    .status(err.status || 500)
    .send(err.message || `Request couldn't be completed`);
});

//404 and Error handlers
app.use((req, res, next) => {
  //catch any request to endpoint not available
  next({ status: 404, message: `Route ${req.baseUrl} not found` }, req, res);
});
app.use((err, req, res, next) => {
  //error handler
  res
    .status(err.status || 500)
    .send(err.message || `Request couldn't be completed`);
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));
