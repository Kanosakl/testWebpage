var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Wiki homepage');
});

router.get('/about/', function(req, res, next) {
	res.send('written by Chikopek');
});

module.exports = router;
