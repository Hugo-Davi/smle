const CardService = require('../services/card.service');
const BaseController = require('./_base.controller');

class CardController extends BaseController{
    constructor(){
        super(CardService);
    }
}

module.exports = CardController;