const router = require("express").Router();

const reqModel = require("../models/schemas/requests");
const { random16BaseString, randomBinaryString } = require("../utils/random");

/**
 *  @about Creates new request document in database
 *  @request_body -> {
 *      needs: [String] or String   // @note - This should be removed though
 *      desc: String,      // description
 *      loc: String     // location
 *      reason: String, // reason
 *      needy: String,  // needy
 *      requester: String or Organisation ID  // who requested
 *      contact: String     // contact number
 *  }
 *
 *  @response -> When successful, responds with a JSON object, with the new document that was added in `Added Doc` key
 *
 *  @working -> calls reqModel.create() after creating `newRequest`
 */
router.post("/new", (req, res) => {
  if (typeof req.body.needs === "string") {
    req.body.needs = [req.body.needs];
  } // convert to array (since backend stores these as arrays)

  const newRequest = {
    desc: req.body.desc,
    tag: Array.isArray(req.body.needs) ? req.body.needs : null,
    loc: req.body.loc,
    reason: req.body.reason,
    needy: req.body.needy,
    req: req.body.requester,
    call: req.body.contact,
  };

  reqModel
    .create(newRequest)
    .then((doc) => {
      console.log(`Created a new request with ID: ${doc.id}`);
      res.status(200).send({
        "Added Doc": doc,
      });
    })
    .catch((err) => {
      console.error(
        "Couldn't create a new request, initiated by ",
        req.body.requester,
        "\n due to: ",
        err
      );
      res.sendStatus(500);
    });
});

/**
 * @about Creates 100 sample feed post, with random content
 * @note Won't execute in production
 * @deleting these random feeds -> just remove the newest 100 (be sure to pause the server route to add first, let it store them as temporaries, later add those to the db)
 */
router.get("/createSamples", async (req, res) => {
  if (process.env.NODE_ENV === "production") {
    return res.sendStatus(404);
  }

  for (let i = 0; i < 100; ++i) {
    const newRequest = {
      desc: random16BaseString(),
      tag: [random16BaseString(5)],
      loc: random16BaseString(4),
      reason: random16BaseString(8),
      needy: [Math.random() % 10, Math.random() % 101],
      req: random16BaseString(8),
      call: randomBinaryString(10),
    };

    reqModel
      .create(newRequest)
      .then((doc) => {
        console.log(`Created Doc : ${doc}`);
      })
      .catch((err) => {
        console.log(`Stopped at i=${i} : `, err);
      });
    console.log("Passed loop");
  }

  res.sendStatus(200);
});

module.exports = router;
