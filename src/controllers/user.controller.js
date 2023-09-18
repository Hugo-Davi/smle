const UserService = require('../services/user.service');
const BaseController = require('./_base.controller');

class UserController extends BaseController{
    constructor(){
        super(UserService);
    }
}

module.exports = UserController;