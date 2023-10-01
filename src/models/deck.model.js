const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const deckSchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: [ true, 'require a name' ] },
    owner: { type: objectId, ref: 'users', require: true },
    text: { type: String },
    type: { type: String },
    // types: [ { type: String } ],
    cards: [{
        front: { type: String, required: true },
        back: { type: String, required: true },
        nextReview: { type: Date },
        last5rates: [{ type: Number }]
    }]
});

const deck = mongoose.model('decks', deckSchema);
module.exports = deck;