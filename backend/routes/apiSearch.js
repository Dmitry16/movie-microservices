const express = require('express');
const axios = require('axios');
const router = express.Router();
const fetchData = require('../api');
const NodeCache = require( 'node-cache' );
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
  // if there is cached data we send it to the client. 
  // Else we fetch external API, cache the data and then send it.
  if (cachedData) {
    console.log('cachedDataStats:', cache.getStats());
    res.status(200).send(JSON.parse(cachedData));
    return;
  } else {
    let page = 0;
    try {
      const call1Data = await fetchData.OMDb.getMovies(axios, searchKeyword, ++page);
      const call2Data = await fetchData.OMDb.getMovies(axios, searchKeyword, ++page);
      let data = {};
      // check if the response has an error
      if (call1Data && !call1Data.hasOwnProperty('Error')) {
        data = {'Search': [...call1Data.Search]};

        if (call2Data && !call2Data.hasOwnProperty('Error')) {
          data = {'Search': [...call1Data.Search, ...call2Data.Search]};
        }
        console.log('cachedDataStats:', cache.getStats());
        cache.set(searchKeyword, JSON.stringify(data))
        res.status(200).send(data);
      } 
      else if (call1Data || call2Data) {
        res.status(404).send({});
      } else {
        res.status(501).send({})
      }
    } catch(err) {
      console.error(err.code)
    }
  }
});

module.exports = router;

