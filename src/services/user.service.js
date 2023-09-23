const Service = require('./_base.service');
const user = require('../models/user.model')


class UserService extends Service {
    constructor(){
        super(user);
    }
}
module.exports = UserService;