const express = require('express');
const CardController = require('../controllers/card.controller');

const router = express.Router();
const cardController = new CardController();

router.get('/', cardController.getAll);
router.get('/id=:id', cardController.get);
router.post('/', cardController.create);
router.put('/id=:id', cardController.update);
router.delete('/id=:id', cardController.delete);

module.exports = router