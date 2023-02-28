const express = require("express");
const router = express.Router();

router.use(express.static("public"));

const { getAllCards, getCard, deleteCard, editCard } = require("../controllers/cards");

router.route("/").get(getAllCards);
router.route("/:id").get(getCard).patch(editCard).delete(deleteCard);

module.exports = router;
