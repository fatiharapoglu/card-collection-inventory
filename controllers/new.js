const Card = require("../models/card");

const addCard = async (req, res) => {
    const card = await Card.create(req.body);
    res.status(201).render("card", { card });
};

module.exports = addCard;
