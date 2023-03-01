const Card = require("../models/card");

const addCard = async (req, res) => {
    try {
        const card = await Card.create(req.body);
        res.status(201).render("card", { card });
    } catch (error) {
        res.status(500).send(`Something went wrong. Error: ${error}`);
    }
};

module.exports = addCard;
