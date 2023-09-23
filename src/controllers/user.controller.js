const UserService = require('../services/user.service');
const Controller = require('./_base.controller');

class UserController extends Controller{
    constructor(){
        super(UserService);
    }

}

module.exports = UserController;