const UserCardService = require('../services/usercard.service');
const BaseController = require('./_base.controller');

class UserCardController extends BaseController{
    constructor(){
        super(UserCardService);
    }
}

module.exports = UserCardController;