const BaseRepository = require('./_base.repository');
const card = require('../models/card.model')

class CardRepository extends BaseRepository {
    constructor(){
        super(card);
    }
}
module.exports = CardRepository;