const router = require("express").Router();

const reqModel = require('../models/schemas/requests');

router.get('/get', (req, res) => {
    // Fetching requests
    const max_limit = 150;  //max feeds to fetch (ONLY `if` limit)
    const fetch_last_n_days = 30;   // by default fetches this much days worth of feeds (or more in multiples if not enough)
    const num = Number('_extract_limit_from_query_string_') || max_limit;

    const feeds = []    // feeds to return

    reqModel.find({}, null,{ limit: num }, (err, docs) => {
        if( err ){
            console.error('Couldn\'t fetch all feeds: ', err);
        }
        if( docs.length === 0 ){
            if( reqModel.estimatedDocumentCount() == 0 ){
                if( reqModel.count() === 0 ){   //making it sure, doing this earlier can be comparatively costly for large databases (ours can become if it becomes famous (though :D))
                    console.log('No feeds were found in the database (All time)');
                    return res.status(200).send();
                }
            }
        }
    });    // by default it will only fetch the feeds in the last 30 days, if it's not enough for the limit then fecth another 30 days and repeat

});

router.get('/get/:id', (req, res) => {  // get more details of a particular feed item
    // Fetching requests
    const num = 

});

module.exports = router;
