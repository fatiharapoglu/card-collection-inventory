const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: [40, "Name should be lower than 40 characters"],
    },
    power: {
        type: Number,
        required: true,
        min: [0, "Power can't be lower than 0"],
        max: [20, "Power can't be higher than 20"],
    },
    provision: {
        type: Number,
        required: true,
        min: [0, "Provision can't be lower than 0"],
        max: [20, "Provision can't be higher than 20"],
    },
    faction: { type: String, required: true },
    type: { type: String, required: true },
});

CardSchema.virtual("url").get(function () {
    return `/cards/${this._id}`;
});

module.exports = mongoose.model("Card", CardSchema);
