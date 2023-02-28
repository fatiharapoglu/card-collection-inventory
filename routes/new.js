const express = require("express");
const router = express.Router();
const addCard = require("../controllers/new");

router.use(express.static("public"));

router.get("/", (req, res) => {
    res.render("new");
});

router.post("/", addCard);

module.exports = router;
