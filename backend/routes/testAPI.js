var express = require("express");
const app = require("../app");
var router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors())

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

module.exports = router;