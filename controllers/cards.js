const Card = require("../models/card");

const addCard = async (req, res) => {
    const card = await Card.create(req.body);
    res.status(201).json({ card });
};

const getAllCards = async (req, res) => {
    const cards = await Card.find({});
    res.status(200).render("cards", { cards });
};

const getCard = async (req, res) => {
    const { id: cardID } = req.params;
    const card = await Card.findOne({ _id: cardID });
    res.status(200).json({ card });
};

const deleteCard = async (req, res) => {
    const { id: cardID } = req.params;
    const card = await Card.findOneAndDelete({ _id: cardID });
    res.status(200).json({ card });
};

const editCard = async (req, res) => {
    const { id: cardID } = req.params;
    const card = await Card.findOneAndUpdate({ _id: cardID }, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({ card });
};

module.exports = { getAllCards, getCard, deleteCard, addCard, editCard };
