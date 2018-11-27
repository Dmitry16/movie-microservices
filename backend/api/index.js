const { baseUrl, omdbAccessToken } = require('../config');
const ApiClient = require('./ApiClient');
const mandatory = require('../utils/validationHelper');

const OmdbFetchAPI  = require('./customAPI');

function apiFactory( 
    baseURL = mandatory('baseURL'),
    omdbAccessToken = mandatory('omdbAccessToken')
){
    const api = new ApiClient( baseURL, omdbAccessToken );

    return {
        omdbApi: new OmdbFetchAPI({ apiClient: api }),
    };
}

module.exports = apiFactory(baseUrl, omdbAccessToken);