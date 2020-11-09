const app = require("express")(); // creating an app instead of a Router(), since it is to be passed to socket.io
const reqModel = require("../models/schemas/requests");

const { Server } = require("http");
const { connection } = require("mongoose");
const io = require("socket.io")(Server(app)); // for providing feeds in `realtime`, in routes/feed.js

const db = connection;
db.once("open", () => {
  const requestWatcher = db.collection(reqModel.collection.name).watch();
  // const activityWatcher = db.collection(reqModel.collection.name).watch();	// @todo Implement after activities implemented

  requestWatcher.on("change", (delta) => {
    // now when the connection has been established is when we will be watching the collection
    const opType = delta.operationType;
    if (opType === "insert") {
      // @note - To be clear what the event is about, prefer the syntax -> channel:event (where channel is the category like feed, and event is any event name related to that channel)
      io.emit("feed:insert", delta.fullDocument); // emit the new document just added
    } else if (opType === "replace") {
      io.emit("feed:replace", delta.fullDocument);
    } else if (opType === "update") {
      io.emit("feed:update", {
        id: delta.documentKey._id,
        updateDescription: delta.updateDescription,
      });
    } else if (opType === "delete") {
      io.emit("feed:delete", delta.documentKey._id); // @expected_from_client_side - if the client is currently having this feed post, then remove it from the feeds array
    } else if (opType === "rename") {
      // Collection name changed
      console.warn(
        `[${Date.now()}] ⚠⚠ Collection name has been changed from ${delta.to.db}.${delta.to.coll} ⚠⚠`
      );
    } else if (opType === "invalidate") {
      // caused by drop or rename
      io.emit("critical:deleteAll", null); // since the server side data has been deleted, remove ALL from client side, let it know it's a critical error (rather i think the client should be taken down)

      console.error(
        `[${Date.now()}] ‼‼🔺 Watch on collection ${reqModel.collection.name} INVALIDATED due to ${opType}. Resume Token is ${delta._id}`
      );
    }
  });
});

/**
 *  @about get ALL types of feeds (limited by param passed) in database
 *  @note returns both requests and activities (activities is @todo)
 *  @example_url -> `https://<website>/feeds/get?limit=25&type=requests` // both are optional in query string
 *
 *  @params -> Accepts a `limit` parameter [RECOMMENDED] (for how many feeds to return), if not given, defaults to 100
 *            Also takes in a `type` parameter [OPTIONAL], having value either 'requests' or 'activities'
 *  @request_body -> {} // OR, { limit: some_number, type: 'requests'/'activities' }
 *
 *  @response -> When successful, responds with an ARRAY of objects
 * 				And each object will have a `type` attribute, which is either 'request' or 'activity'
 *
 *  @working -> just calls reqModel.create() after creating `newRequest`
 */
app.get("/get", (req, res) => {
  const max_limit = 100; //max feeds to fetch (ONLY `if` limit)
  const num = parseInt(req.query.limit) || parseInt(req.body.limit) || max_limit;
  const type = req.query.type || req.body.type || null; // by default both types to be returned

  let feeds = []; // feeds to return

  // fetching requests
  const query = reqModel.find({}).limit(num).sort({ createdAt: "desc" });
  query.exec()
    .then((docs) => {
      if (docs.length === 0) {
        if (reqModel.estimatedDocumentCount() === 0 && reqModel.count() === 0) {
            //making it sure, doing .count() earlier can be comparatively costly for large databases (ours can become if it becomes famous (though :D))
            console.log(`[${Date()}] No feeds were found in the database (All time)`);

            return res.status(200).send({ err: "No Feeds in database" });
        }
      }

      docs = docs.map((doc) => ({
        org_name: doc.req, //requester
        desc: doc.desc,
        reason: doc.reason,
        num: doc.needy, // range of people that will be benefited
        contact: doc.call, //contact
      }));

      feeds = feeds.concat(docs);

      // @todo - Fetch activites too (so as to add to `feeds`, and specify type as 'activity')

      feeds.sort((feed1, feed2) => feed1.createdAt < feed2.createdAt);

      return res.send({ feeds: feeds.slice(-num) }); // `newest` num feeds
    })
    .then((feeds) => {

    })
    .catch((err) => {
      console.error("Couldn't fetch all feeds: ", err);
    });
});

app.get("/get/:id", (req, res) => {
  // get more details of a particular feed item
  reqModel.findById(req.params.id, (err, doc) => {
    if (err) {
      return res.status(500).send({
        err: `Can't query the database`,
      });
    }
    if (!doc) {
      // @todo - Fetch an activity feed with a particular... Implement after activities also implemented

      return res.status(404).send({
        err: `Can't find feed`,
      });
    }

    return res.send(doc); // @note - As any sensitive data are added to request Schema, create remove/alter those keys
  });
});

module.exports = app;
