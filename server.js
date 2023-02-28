const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const ejs = require("ejs");
require("dotenv").config();

const cardsRouter = require("./routes/cards");
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const notFound = require("./middleware/404");

mongoose.set("strictQuery", false);
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: false }));
app.use(expressLayouts);

app.use("/", indexRouter);
app.use("/cards", cardsRouter);
app.use("/new", newRouter);
app.use(notFound);

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to database.");
        app.listen(port, () => console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();
