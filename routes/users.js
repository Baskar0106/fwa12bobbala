var express = require('express');
var router = express.Router();
var variable = 0;

/* GET users listing. */
router.get('/', function(req, res, next) {
  variable = variable + 1;
  res.send(`User access are: ${variable}`);
});

module.exports = router;
