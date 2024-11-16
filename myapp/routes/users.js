var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', (req, res) => {
  res.render('register');
});

module.exports = router;
