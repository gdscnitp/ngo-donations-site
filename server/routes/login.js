const router = require('express').Router();

router.post('/', (req, res) => {

    const formIds = {   //to easily change later according to frontend
        'user': 'Username',
        'pass': 'Password'
    };

    req.body[formIds['user']];
    req.body[formIds['pass']];

});

module.exports = router;
