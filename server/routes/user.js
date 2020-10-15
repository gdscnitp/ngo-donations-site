const router = require('express').Router();
const authModel = require("../models/schemas/userAuth");
const { validateLoginData } = require('../util/validators')

router.post('/signup', (req, res) => {
    const user_id = req.body.userName;
    const pass = req.body.password;

    if( !validateLoginData( user_id, pass ) ){
        return res.status(401).send({error: 'Invalid login data passed or All fields not filled', receivedInput: req.body});
    }

    authModel.create({userName: user_id, pass: pass}, (err, doc) => {
        if(doc){
            console.log(doc, ' created');
            res.sendStatus(200);
        }
        else res.sendStatus(500);         
    })
});

router.post('/login', (req, res, next) => {

    const user_id = req.body.userName;
    const pass = req.body.password;

    if( !validateLoginData( user_id, pass ) ){
        res.status(401).send({error: 'Invalid login data passed or All fields not filled'});
    }

    authModel.authenticate(user_id, pass, (err, user) => {
        if(err){
            console.error(err, `Now it will go for `, next.name);
            err.status = 400;
            return next(err);
        }
        // req.session.user_id = user.userName; //NO sessions for now
        return res.status(200).send('Login of user successful'); //logic successful
    })

    res.sendStatus(200);
});

// Will use other collection to fetch user details, like name, phone number, to display on profile page
// router.get('/profile', (req,res,next) => {    
// });

module.exports = router;
