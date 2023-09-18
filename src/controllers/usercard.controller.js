const UserCardRepository = require('../services/usercard.service');
const BaseController = require('./_base.controller');

class UserCardController extends BaseController{
    constructor(){
        super(UserCardRepository);
    }
}

module.exports = UserCardController;