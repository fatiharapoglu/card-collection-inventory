const express = require("express");
const router = express.Router();

const { getAllCards, getCard, deleteCard, addCard, editCard } = require("../controllers/cards");

router.route("/").get(getAllCards).post(addCard);
router.route("/:id").get(getCard).patch(editCard).delete(deleteCard);

module.exports = router;
