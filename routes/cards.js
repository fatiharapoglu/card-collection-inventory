const express = require("express");
const router = express.Router();

const { getAllCards, getCard, deleteCard, editCard } = require("../controllers/cards");

router.use(express.static("public"));

router.route("/").get(getAllCards);
router.route("/:id").get(getCard).patch(editCard).delete(deleteCard);

module.exports = router;
