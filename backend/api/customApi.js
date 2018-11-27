const Base = require('./Base');

class OmdbFetchAPI extends Base {

    getMovies(client, query, pageNum) {
        return this.apiClient.get(client, query, pageNum);
    }
}

module.exports = OmdbFetchAPI;