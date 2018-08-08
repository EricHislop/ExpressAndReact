var express = require('express');
var router = express.Router();
var db = require('../db.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(db.boats);
});

module.exports = router;
