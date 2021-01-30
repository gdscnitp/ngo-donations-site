const { random16BaseString } = require("./utils/random");
exports.SESSION_SECRET = random16BaseString(10);
