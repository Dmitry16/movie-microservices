const express = require('express');
const axios = require('axios');
const router = express.Router();
const fetchData = require('../apiClient');
const NodeCache = require( "node-cache" );
const cache = new NodeCache({});

/* 
* GET search query from the frontend client
* and fetch data from the external API.
* Here I make use of the ES6 destructuring and async-await API
* in order to consequently get and merge data from the external API.
* When I have all the needed data collected I send it to the client.
*/
router.get('/', async function(req, res, next) {
  const searchKeyword = req.query.keyword;
  const cachedData = cache.get(searchKeyword);
  // if there is cached data we send it. Else we fetch external API, cache the data and send it.
  if (cachedData) {
    console.log('cachedData1::', cache.getStats());
    res.status(200).send(JSON.parse(cachedData));
    return;
  } else {
    let page = 0;
    const call1Data = await fetchData(axios, searchKeyword, ++page);
    const call2Data = await fetchData(axios, searchKeyword, ++page);
    let data = {};
    if (!call1Data.hasOwnProperty('Error')) {
      data = {'Search': [...call1Data.Search]};
      if (!call2Data.hasOwnProperty('Error')) {
        data = {'Search': [...call1Data.Search, ...call2Data.Search]};
      }
      console.log('cachedData2::', cache.getStats());
      cache.set(searchKeyword, JSON.stringify(data))
      res.status(200).send(data);
    } 
    else {
      res.status(200).send({});
    }
  }
});

module.exports = router;
