const user = require('../models/user.model');
const BaseService = require('./_base.service');
const UserService = require('./user.service');

class AuthService extends BaseService{
    constructor(){
        super(user);
    }
    findByUsername(username) {
        return this.collection.findOne({username: username});
    }
}

module.exports = AuthService;