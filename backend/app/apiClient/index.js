const axios = require('axios');
const config = require('../config');
//making connection params
const apiBase = 'http://www.omdbapi.com/';
const apiKey = config.OMDb_PERSONAL_ACCESS_TOKEN;
const keyword = 'universe';
const pageNum = 10;
const input = `?apikey=${apiKey}&s=${keyword}&page=${pageNum}`;

const conParams = {
  responseType: 'json',
  baseURL: apiBase,
};

let data = [];

function fetchData() {
  return axios
    .get(input, conParams)
    .then(response => {
      // response.data
      return Promise.resolve(response.data)
      // console.log(typeof response.data)
    })
    // .then()
    .catch(console.error)
};

module.exports = fetchData