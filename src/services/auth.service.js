const user = require('../models/user.model');
const BaseService = require('./_base.service');
const UserService = require('./user.service');

const jwt = require('jsonwebtoken')

class AuthService extends BaseService{
    constructor(){
        super(user);
    }

    findByUsername(username) {
        return this.collection.findOne({username: username});
    }
    generateToken(id) {
        return jwt.sign({ id: id }, process.env.SECRET_JWT, { expiresIn: 86400 });
    }

}

module.exports = AuthService;