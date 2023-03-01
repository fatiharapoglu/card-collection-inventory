const Card = require("../models/card");

const getAllCards = async (req, res) => {
    try {
        const cards = await Card.find({});
        res.status(200).render("cards", { cards });
    } catch (error) {
        res.status(500).render("error", { error });
    }
};

const getCard = async (req, res) => {
    try {
        const { id: cardID } = req.params;
        const card = await Card.findOne({ _id: cardID });
        res.status(200).render("card", { card });
    } catch (error) {
        res.status(500).render("error", { error });
    }
};

const editCard = async (req, res) => {
    try {
        const { id: cardID } = req.params;
        const card = await Card.findOneAndUpdate({ _id: cardID }, req.body, {
            new: true,
            runValidators: true,
        });
        res.status(200).render("card", { card });
    } catch (error) {
        res.status(500).render("error", { error });
    }
};

const deleteCard = async (req, res) => {
    try {
        const { id: cardID } = req.params;
        const card = await Card.findOneAndDelete({ _id: cardID });
        getAllCards(req, res);
    } catch (error) {
        res.status(500).render("error", { error });
    }
};

module.exports = { getAllCards, getCard, deleteCard, editCard };
