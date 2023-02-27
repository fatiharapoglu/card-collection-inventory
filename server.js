const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
// const favicon = require("serve-favicon");

const indexRouter = require("./routes/index");

const app = express();
const port = process.env.PORT || 3000;
const mongoDB = process.env.MONGODB_URI;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(favicon(path.join(__dirname, "public/assets", "favicon.png")));

app.use("/", indexRouter);

mongoose.set("strictQuery", false);

dbConnection();
async function dbConnection() {
    try {
        await mongoose.connect(mongoDB);
        app.listen(port, () => console.log(`Listening on port ${port}...`));
    } catch (err) {
        console.log(err);
    }
}

module.exports = app;
