 
const express = require('express');

const cors = require('cors');
const mongoose = require('mongoose');
const assert= require('assert');
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcryptjs');



const app = express();

const publicDirectoryPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname,'./templates/views')

// initialise middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// EJS
app.use(express.static(publicDirectoryPath));

app.set('views',viewsPath);


app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');



//DATABASE CONNECTION

const db = require('./config/connectDB').MongoURI;

app.get("/", (req, res)=>{
  res.render("sign_up")
 
});


mongoose
.connect(
  
  db,
  { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
    
}

)
.then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err));

app.use('/users', require('./routes/users'));



const PORT = process.env.PORT ||5000;

app.listen(PORT,console.log(`Server started on port ${PORT}`));


