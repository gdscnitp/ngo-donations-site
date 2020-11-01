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
const { random16BaseString } = require("./utils/random");
require("dotenv").config();

const PORT = process.env.PORT || 3000;
const DB_NAME = "muckin_testing";

const MONGO_DB_URI = `mongodb+srv://dscnitp_webdept_muckin:${process.env.DB_PASSWORD}@cluster0.kokfw.gcp.mongodb.net`;
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
    secret: random16BaseString(10),
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

// Routes START
app.use("/user", userRouter); // login, logout
app.use("/sign_up", signupRouter); // sign_up individual and organisation
app.use("/activities", activitiesRouter); // image, update-details, delete-details
app.use("/requests", requestRouter); // /new request
app.use("/feeds", feedRouter); // /get feeds
// Routes END

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
