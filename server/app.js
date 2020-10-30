const express = require('express');

const app = express();
const mongoose = require('mongoose');
const { join } = require('path');    //for getting path of the static directory
const { exit } = require('process');
const logger = require('morgan');
const userRouter = require('./routes/user.js');
const morgan = require('morgan');
require('dotenv').config();

const route1 = require('./routes/userSignup');
const route2 = require('./routes/orgSignup');
const editUser = require('./routes/api.js');
const editActivity = require('./routes/activities.js');

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
mongoose.set("useCreateIndex",true);

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
app.use('/user', userRouter);   //login,
app.use('/editUser',editUser); // edit user profile
app.use('/edit',editActivity); // edit activities
app.use('/api1', route1);  // signup user looking for help
app.use('/api2',route2); // signup org looking for help
// Routes END


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
