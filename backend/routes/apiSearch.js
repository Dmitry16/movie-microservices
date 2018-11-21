var express = require('express');
const axios = require('axios');
var router = express.Router();
const fetchData = require('../apiClient');

/* GET users listing. */
router.get('/', function(req, res, next) {
  const query = req.query.keyword;
  fetchData(axios, query).then(data => res.status(200).send(data));
});

module.exports = router;
