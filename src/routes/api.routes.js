const express = require('express');
const router = express.Router();

// Authentication Route
router.use('/auth', require('./auth.routes'));

router.use('/card', require('./card.routes'));
router.use('/deck', require('./deck.routes'));
router.use('/user', require('./user.routes'));

module.exports = router;