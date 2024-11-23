var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

// creamos "productController o usamos indexController" ??
// Get
router.get('/add', indexController.add);

// Post
router.post('/add', indexController.formAdd);

// Params


// escribir las rutas de products



module.exports = router