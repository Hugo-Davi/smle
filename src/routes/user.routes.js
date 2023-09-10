const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getAll);
router.get('/id=:id', userController.get);
router.post('/', userController.register);
router.put('/id=:id', userController.update);
router.delete('/id=:id', userController.delete);

router.post('/login', userController.login);

module.exports = router;