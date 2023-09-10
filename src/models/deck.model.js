const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const deckSchema = new Schema({
    _id: { type: objectId, auto: true },
    name: { type: String, required: [ true, 'require a name' ] },
    cards: [ { type: objectId, ref: 'cards' } ]
});

const deck = mongoose.model('decks', deckSchema);
module.exports = deck;