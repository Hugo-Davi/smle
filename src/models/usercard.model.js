const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const usercardSchema = new Schema({
    _id: { type: objectId, auto: true },
    card: { type: objectId, ref: 'cards', require: true},
    lastView: { type: Date },
    last5Rates: {
        type: [{ type: Number }],
        validate: [ (val) => { return val.length <= 5 }, 'Array limmit is 5' ]
    },
    user: { type: objectId, ref: 'users', require: true }
});

const usercard = mongoose.model('usercards', usercardSchema);
module.exports = usercard;