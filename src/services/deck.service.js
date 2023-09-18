const BaseService = require('./_base.service');
const deck = require('../models/deck.model');

const card = require('../models/card.model');
const usercard = require('../models/usercard.model');

class DeckService extends BaseService {
    constructor(){
        super(deck);
    }
    async getAllCards(id) {
        return await deck.findById(id).populate('cards').lean().exec();
    }
}
module.exports = DeckService;