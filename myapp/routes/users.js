var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// Get
router.get('/register', userController.register);
router.get('/login', userController.login);


// Post
router.post('/login', userController.loginUser);
router.post('/register', userController.results);
router.post('/logout', userController.logout);

module.exports = router;
