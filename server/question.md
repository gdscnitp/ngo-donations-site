How do we handle the case in backend when a user is already logged in, and still the /login route is accessed ?

As of now, what i thought was, after a successful login, `req.session.uid = <username>`, and `req.session.uhash = hash(<username>+<password>>)`.
Then in /login route, 
phir ye check krna ki req.session.uid is not null, phir check ki the username is in database, then cross verify using the hash, of username_password from database, and req.session.uhash

Sun ne me thik laga lekin, **is it secure/not_recommended ??** Because we are saving it in the session object (though it's not in cookie as for what i know ?)
