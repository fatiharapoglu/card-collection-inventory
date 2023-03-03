const express = require("express");
const router = express.Router();
const search = require("../controllers/search");

router.get("/", (req, res) => {
    res.render("index");
});

router.get("/search", search);

module.exports = router;
