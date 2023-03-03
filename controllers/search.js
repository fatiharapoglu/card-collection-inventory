const Card = require("../models/card");

const search = async (req, res) => {
    const { keywords } = req.query;
    try {
        const cards = await Card.find({
            $or: [
                { name: { $regex: keywords, $options: "i" } },
                { faction: { $regex: keywords, $options: "i" } },
                { type: { $regex: keywords, $options: "i" } },
            ],
        });
        if (cards.length !== 0) return res.render("cards", { cards });
        res.render("empty", { keywords });
    } catch (error) {
        res.status(500).render("error", { error });
    }
};

module.exports = search;
