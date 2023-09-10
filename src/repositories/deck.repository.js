const BaseRepository = require('./_base.repository');
const deck = require('../models/deck.model');

const card = require('../models/card.model');
const usercard = require('../models/usercard.model');

class DeckRepository extends BaseRepository {
    constructor(){
        super(deck);
    }
    async getAllCards(id) {
        return await deck.findById(id).populate('cards').lean().exec();
    }
}
module.exports = DeckRepository;