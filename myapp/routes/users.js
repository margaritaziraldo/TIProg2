var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
// Get
router.get('/register', userController.register);

router.get('/login', userController.login);



// result get 
router.get('/register', userController.results);

// result post 
router.post('/register', userController.results);


// Post
// router.post('/register', userController.formRegister);
// router.post('/login', userController.formLogin);
// router.post('/logout', userController.logout);

// Param

module.exports = router;
