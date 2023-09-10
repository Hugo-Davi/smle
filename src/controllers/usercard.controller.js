const UserCardRepository = require('../repositories/usercard.repository');
const BaseController = require('./_base.controller');

class UserCardController extends BaseController{
    constructor(){
        super(UserCardRepository);
    }
}

module.exports = UserCardController;