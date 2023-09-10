const CardRepository = require('../repositories/card.repository');
const BaseController = require('./_base.controller');

class CardController extends BaseController{
    constructor(){
        super(CardRepository);
    }
}

module.exports = CardController;