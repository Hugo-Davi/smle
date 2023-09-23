const express = require('express');
const DeckController = require('../controllers/deck.controller');

const router = express.Router();
const deckController = new DeckController();

const authMiddleware = require('../middleware/auth.middleware');

router.get('/', deckController.getAll);
router.get('/id=:id', deckController.get);
router.post('/', deckController.create);
router.put('/id=:id', authMiddleware, deckController.update);
router.delete('/id=:id', authMiddleware, deckController.delete);

router.put('/card/id=:id', deckController.addCard);

module.exports = router