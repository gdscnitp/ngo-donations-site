const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const nodemailer = require("nodemailer");


exports.users = function(req, res, next) {
    User.findOne({ email: req.body.email }, function (err, user) {
      // error occur
      if(err){
          return res.status(500).send({msg: err.message});
      }
      
      else if (user) {
          return res.status(400).send({msg:'This email address is already associated with another account.'});
      }
     
      else{
        
          req.body.password = Bcrypt.hashSync(req.body.password, 10);
          
          user = new User({ 
              name: req.body.name,
               email: req.body.email, 
               password: req.body.password 
            });
          user.save(function (err) {
              if (err) { 
                return res.status(500).send({msg:err.message});
              }
              
              
              var token = new Token({ _userId: user._id, token: crypto.randomBytes(16).toString('hex') });
              token.save(function (err) {
                if(err){
                  return res.status(500).send({msg:err.message});
                }
  
                  
                  var transporter = nodemailer.createTransport({ service: 'Sendgrid', auth: { user: process.env.SENDGRID_USERNAME, pass: process.env.SENDGRID_PASSWORD } });
                  var mailOptions = { from: 'no-reply@example.com', to: user.email, subject: 'Account Verification Link', text: 'Hello '+ req.body.name +',\n\n' + 'Please verify your account by clicking the link: \nhttp:\/\/' + req.headers.host + '\/confirmation\/' + user.email + '\/' + token.token + '\n\nThank You!\n' };
                  transporter.sendMail(mailOptions, function (err) {
                      if (err) { 
                          return res.status(500).send({msg:'Technical Issue!, Please click on resend for verify your Email.'});
                       }
                       else
                      return res.status(200).send('A verification email has been sent to ' + user.email + '. It will be expire after one day. If you not get verification Email click on resend token.');
                  });
              });
          });
      }
      
    });
  
}
