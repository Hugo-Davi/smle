const BaseRepository = require('./_base.repository');
const usercard = require('../models/usercard.model')

class UserCardRepository extends BaseRepository {
    constructor(){
        super(usercard);
    }
}
module.exports = UserCardRepository;