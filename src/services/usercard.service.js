const BaseService = require('./_base.service');
const usercard = require('../models/usercard.model')

class UserCardService extends BaseService {
    constructor(){
        super(usercard);
    }
}
module.exports = UserCardService;