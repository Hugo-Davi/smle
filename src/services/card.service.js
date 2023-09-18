const BaseService = require('./_base.service');
const card = require('../models/card.model')

class CardService extends BaseService {
    constructor(){
        super(card);
    }
}
module.exports = CardService;