const BaseService = require('./_base.service');
const user = require('../models/user.model')


class UserService extends BaseService {
    constructor(){
        super(user);
    }
    findByUsername(username) {
        return this.collection.findOne({username: username});
    }
}
module.exports = UserService;