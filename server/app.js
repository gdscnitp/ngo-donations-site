const express = require('express');

const app = express();
const mongoose = require('mongoose');

const mongoose = require('mongoose');

const DB_NAME = 'muckIn_testing'        // later change it according to database selected
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useCreateIndex: true,
    dbName: DB_NAME
})

const db = mongoose.connection; //access to the pending connection
db.on('error', (err) => {
        console.log('Error in DB connection: ' + err)
});
db.once('open', () => {
    console.log(`Connected to the database : ${DB_NAME}`);
})


const loginRouter = require('./routes/login.js')

app.use( express.urlencoded({extended: false}) );
app.use( express.json() );

    // mounting the subroutes
app.use('/login', loginRouter);

app.listen(
    PORT,
    console.log(`Server listening on ${PORT}`)
);
