const mongoose = require("mongoose");
const Card = require("./models/card");
const jsonCards = require("./cards.json");
require("dotenv").config();

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database.");
        await Card.deleteMany();
        await Card.create(jsonCards);
        console.log("Populated.");
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

start();
