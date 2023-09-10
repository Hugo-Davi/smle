const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const objectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    _id: { type: objectId, auto: true },
    username: { type: String, require: true, unique: true },
    password: { type: String, require: true, unique: true }
});

const user = mongoose.model('users', userSchema);
module.exports = user;