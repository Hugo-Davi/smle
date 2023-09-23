const CardService = require('../services/card.service');
const Controller = require('./_base.controller');

class CardController extends Controller{
    constructor(){
        super(CardService);
    }
}

module.exports = CardController;