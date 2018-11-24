var express = require('express');
const axios = require('axios');
var router = express.Router();
const fetchData = require('../apiClient');

/* 
* GET search query from the frontend client
* and fetch data from the external API.
* Here I make use of the ES6 destructuring and async-await API
* in order to consequently get and merge data from the external API.
* When I have all the needed data collected I send it to the client.
*/
router.get('/', async function(req, res, next) {
  const query = req.query.keyword;
  let page = 2;
  const call1 = await fetchData(axios, query, ++page);
  const call2 = await fetchData(axios, query, ++page);
  let data = {};
  if (!call1.hasOwnProperty('Error')) {
    data = {'Search': [...call1.Search]};
    if (!call2.hasOwnProperty('Error')) {
      data = {'Search': [...call1.Search, ...call2.Search]};
    }
    res.status(200).send(data);
  } 
  else {
    res.status(200).send({});
  }  
});

module.exports = router;
