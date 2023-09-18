const BaseService = require('./_base.service');
const user = require('../models/user.model')


class UserService extends BaseService {
    constructor(){
        super(user);
    }
}
module.exports = UserService;