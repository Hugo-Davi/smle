const BaseRepository = require('./_base.repository');
const user = require('../models/user.model')


class UserRepository extends BaseRepository {
    constructor(){
        super(user);
    }
    findByUsername(username) {
        return this.collection.findOne({username: username});
    }
}
module.exports = UserRepository;