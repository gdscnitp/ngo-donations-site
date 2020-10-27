const router = require("express").Router();
const authModel = require("../models/schemas/userAuth");
const { validateLoginData } = require("../util/validators");

//temporary route for testing, will be replaced by the one made by signup backend team
router.post("/signup", (req, res) => {
	const user_id = req.body.userName;
	const pass = req.body.password;

	if (!validateLoginData(user_id, pass)) {
		return res.status(401).send({
			error: "Invalid login data passed or All fields not filled",
			receivedUserName: req.body.userName,
		});
	}

	authModel.create({ userName: user_id, pass: pass }, (err, doc) => {
		if (!err && doc) {
			res.sendStatus(200);
		} else {
            res.sendStatus(500);
        }
	});
});

router.post("/login", (req, res, next) => {
	const user_id = req.body.userName;
	const pass = req.body.password;

	if (!validateLoginData(user_id, pass)) {
		res.status(401).send({
			error: "Invalid login data passed or All fields not filled",
		});
	}

	authModel.authenticate(user_id, pass, (err, user) => {
		if (err) {
			return next(err);
		}

		return res.status(200).send("Login of user successful"); //logic successful
	});
});

module.exports = router;
