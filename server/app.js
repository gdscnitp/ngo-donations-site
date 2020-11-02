const express = require("express");
const app = express();
const rateLimit = require("express-rate-limit");
const mongoose = require("mongoose");
const { join } = require("path");
const { exit } = require("process");
const userRouter = require("./routes/user");
const activitiesRouter = require("./routes/activities");
const signupRouter = require("./routes/sign_up");

const morgan = require("morgan");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const DB_NAME = "muckin_testing"; // later change it according to database
const MONGO_DB_URI = `mongodb+srv://dscnitp_webdept_muckin:dscnitp_webdept_muckin@cluster0.kokfw.gcp.mongodb.net/project2?retryWrites=true&w=majority`;
mongoose
  .connect(MONGO_DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: DB_NAME,
    //w: 'majority'
  })
  .catch((err) => {
    console.error(`Error in DB connection: mongo DB couldn't be reached`);
    exit(1);
  });

const db = mongoose.connection; //access to the pending connection
db.on("error", (err) => {
  console.log(`Error in DB connection`);
});
db.once("open", () => {
  console.log(`Connected to the database : ${DB_NAME}`);
});

app.use(
  rateLimit({
    // preliminary rate limit
    windowMs: 24 * 60 * 60 * 1000,
    max: 100,
  })
);
app.use(morgan("dev")); //to log requests made to api
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(join(__dirname, "public")));

// Routes START
app.use("/user", userRouter); // login, logout
app.use("/sign_up", signupRouter); // sign_up individual and organisation
app.use("/activities", activitiesRouter); // image, update-details, delete-details
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

app.listen(PORT, console.log(`Server listening on ${PORT}`));
