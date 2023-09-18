const express = require('express');
const router = express.Router();

router.use('/', (req, res, next) => {
    console.log("Acessou o middleware");
    next();
});

module.exports = router;