const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const xss = require("xss-clean");
const rateLimiter = require("express-rate-limit");
const favicon = require("serve-favicon");
require("ejs");
require("dotenv").config();

const cardsRouter = require("./routes/cards");
const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const notFound = require("./middleware/404");

mongoose.set("strictQuery", false);
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("trust proxy", 1);
app.use(favicon("public/assets/favicon.png"));
app.use(express.static("public"));
app.use(expressLayouts);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(methodOverride("_method"));
app.use(
    rateLimiter({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
    })
);

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
