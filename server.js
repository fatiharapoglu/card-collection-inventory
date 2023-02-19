const express = require("express");
// const favicon = require("serve-favicon");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const indexRouter = require("./routes/index");

const app = express();
const port = 3000;
dotenv.config();
mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGODB_URL;
async function dbConnection() {
    await mongoose.connect(mongoDB);
}
dbConnection().catch((err) => console.log(err));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(favicon(path.join(__dirname, "public/assets", "favicon.png")));

app.use("/", indexRouter);

app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = app;
