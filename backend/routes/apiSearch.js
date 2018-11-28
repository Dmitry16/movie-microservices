const express = require('express');
const axios = require('axios');
const router = express.Router();
const request = require('../api');
const NodeCache = require( 'node-cache' );
const cache = new NodeCache({});
/* 
* GET request from the frontend client, fetch data from the external API
* and send collected data from 2 api calls to the client.
*
* ES6 features destructuring and async-await API are used
* in order to consequently get and merge data from the external API.
* When I have all the needed data collected I send it to the client.
*/
router.get('/', async function(req, res, next) {
  // extract the search keyword from the request object
  const searchKeyword = req.query.keyword;
  // get the data by the keyword from the cache
  const cachedData = cache.get(searchKeyword);
  // if there is cached data we send it to the client
  if (cachedData) {
    console.log('cachedDataStats:', cache.getStats());
    res.status(200).send(JSON.parse(cachedData));
    return;
  // if there is no cached data make api calls, check the data,
  // set it to the cache and send it to the frontend client
  } else {
    let page = 0,
      data = {},
      call1Data = [],
      call2Data = [];

    try {
      call1Data = await request.omdbApi.getMovies(axios, searchKeyword, ++page);
      call2Data = await request.omdbApi.getMovies(axios, searchKeyword, ++page);
    }
    catch(err) { console.log(err.errno) }

      // check if the responses have error
      // if not merge them into the data object
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
        // if there is responce with an error send empty object to the client
        res.status(200).send({});
      } else {
        res.status(501).send({})
      }
  }
});

module.exports = router;

