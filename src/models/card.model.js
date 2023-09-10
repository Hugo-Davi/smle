const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const cardSchema = new Schema({
    _id: { type: objectId, auto: true },
    front: { type: String, required: [ true, 'require front' ] },
    back: { type: String, required: [ true, 'require back' ] }
});

const card = mongoose.model('cards', cardSchema);
module.exports = card;