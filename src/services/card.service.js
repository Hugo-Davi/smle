const Service = require('./_base.service');
const card = require('../models/card.model')

class CardService extends Service {
    constructor(){
        super(card);
    }
}
module.exports = CardService;