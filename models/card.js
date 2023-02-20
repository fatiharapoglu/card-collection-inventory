const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CardSchema = new Schema({
    name: { type: String, required: true },
    power: { type: Number, required: true },
    provision: { type: Number, required: true },
    faction: { type: String, required: true },
    type: [{ type: Schema.Types.ObjectId, ref: "Type", required: true }],
});

CardSchema.virtual("url").get(() => {
    return `/cards/${this._id}`;
});

module.exports = mongoose.model("Card", CardSchema);
