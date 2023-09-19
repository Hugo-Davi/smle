const BaseService = require('./_base.service');
const deck = require('../models/deck.model');

class DeckService extends BaseService {
    constructor(){
        super(deck);
    }
    addCard(id, model){
        return deck.findByIdAndUpdate(id, { $push: { cards: model } });
    }
}
module.exports = DeckService;