const express = require('express');
const DeckController = require('../controllers/deck.controller');

const router = express.Router();
const deckController = new DeckController();

router.get('/', deckController.getAll);
router.get('/id=:id', deckController.get);
router.post('/', deckController.create);
router.put('/id=:id', deckController.update);
router.delete('/id=:id', deckController.delete);

router.get('/cards/id=:id', deckController.getAllCards);

module.exports = router