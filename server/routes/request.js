const router = require("express").Router();

const reqModel = require('../models/schemas/requests');

router.post('/new', (req, res) => {
    if (typeof req.body.needs === 'string') {
        req.body.needs = [req.body.needs];
    } // convert to array (since backend stores these as arrays)

    const newRequest = {
        desc: req.body.desc,
        tag: typeof req.body.needs === 'object' ? req.body.needs : null,
        loc: req.body.loc,
        reason: req.body.reason,
        needy: req.body.needy,
        req: req.body.requester,
        call: req.body.contact,
    };

    reqModel.create(newRequest)
        .then((doc) => {
            console.log(`Created a new request with ID: ${doc.id}`);
        })
        .catch((err) => {
            console.error(`Couldn't create a new request, initiated by ${req.body.requester}\n due to: `, err);
        });
});

module.exports = router;
