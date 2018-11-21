const config = require('../config');
//making connection params
const apiBase = 'http://www.omdbapi.com/';

const conParams = {
  responseType: 'json',
  baseURL: apiBase,
};

function fetchData(axios, keyword) {
  const apiKey = config.OMDb_PERSONAL_ACCESS_TOKEN;
  const pageNum = 20;
  const input = `?apikey=${apiKey}&s=${keyword}&page=${pageNum}`;
  return axios
    .get(input, conParams)
    .then(response => {
      return Promise.resolve(response.data)
    })
    .catch(console.error)
};

module.exports = fetchData