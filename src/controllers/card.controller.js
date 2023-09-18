const CardRepository = require('../services/card.service');
const BaseController = require('./_base.controller');

class CardController extends BaseController{
    constructor(){
        super(CardRepository);
    }
}

module.exports = CardController;