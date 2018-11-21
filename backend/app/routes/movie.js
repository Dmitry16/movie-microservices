var express = require('express');
var router = express.Router();
const fetchOMDbApi = require('../apiClient');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetchOMDbApi().then(data => res.status(200).send(data))
});

module.exports = router;
