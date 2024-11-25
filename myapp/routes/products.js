var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

// creamos "productController o usamos indexController" ??
// Get
router.get('/add', indexController.add);
router.get('/search-results/', indexController.buscar)


// Post
router.post('/add', indexController.formAdd)

// Params
router.get('/id/:id',indexController.detalle)


module.exports = router