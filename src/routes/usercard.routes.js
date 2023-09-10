const express = require('express');
const UserCardController = require('../controllers/usercard.controller');

const router = express.Router();
const usercardController = new UserCardController();

router.get('/', usercardController.getAll);
router.get('/id=:id', usercardController.get);
router.post('/', usercardController.create);
router.put('/id=:id', usercardController.update);
router.delete('/id=:id', usercardController.delete);

module.exports = router