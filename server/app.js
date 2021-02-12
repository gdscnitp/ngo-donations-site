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
const events = require("./routes/event");
const requestRouter = require("./routes/request");
const signupRouter = require("./routes/sign_up");
const reqRouter = require("./routes/donation-need-routes/request")
const lookingIndividual = require("./routes/signupRoutes/lookingIndividual")
const lookingOrganisation = require("./routes/signupRoutes/lookingOrganisation")
const willingIndividual = require("./routes/signupRoutes/willingIndividual")
const route1 = require('./routes/userSignup');
const route2 = require('./routes/orgSignup');
const editUser = require('./routes/api.js');

const route1 = require("./routes/userSignup");
const route2 = require("./routes/orgSignup");
const editUser = require("./routes/api.js");

const { SESSION_SECRET } = require("./secretConfig");

require("dotenv").config();
const User = require("./models/person");
var string = require("string-sanitizer");
const bcrypt = require("bcrypt");
var user;

const PORT = process.env.PORT || 5000; // changed so fronted runs on 3000 and server at 5000
const DB_NAME = "muckin_testing"; // @note - later change it according to database used in production

const MONGO_DB_URI = `mongodb+srv://dscnitp_webdept_muckin:${process.env.DB_PASSWORD}@cluster0.kokfw.gcp.mongodb.net?retryWrites=true`; // @note - Don't modify this, if it doesn't work for you please ask
//${process.env.DB_PASSWORD}
mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
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

// if( process.env.NODE_ENV !== 'production' )
//   app.use(
//     require("cors")({
//     origin: "*"
//   }))

app.use(
  rateLimit({
    windowMs: 24 * 60 * 60 * 1000,
    max: 100,
  })
);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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
//Heroku deploy code
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Routes START
app.use("/user", userRouter); // login, logout
app.use(signupRouter); // sign_up individual and organisation
app.use(activitiesRouter); // image, update-details, delete-details
app.use("/requests", requestRouter); // /new request
app.use("/feeds", feedRouter); // /get feeds
// Routes END

app.use('/editUser',editUser); // edit user profile
app.use('/api1', route1);  // signup user looking for help
app.use('/api2',route2); // signup org looking for help

app.use('/activity',activitiesRouter);
app.use(reqRouter)
app.use(lookingIndividual)
app.use(lookingOrganisation)
app.use(willingIndividual)
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
