class ApiClient {
    constructor (baseURL, omdbAccessToken) {
      this.baseURL = baseURL;
      this.apiKey = omdbAccessToken;
    }
    
    get(client, query, pageNum) {
  
      return this.request({ client, query, pageNum });
    }
    
    request({ client, query, pageNum }) {
  
      const conParams = {
        responseType: 'json',
        baseURL: this.baseURL,
      };
      const input = `?apikey=${this.apiKey}&s=${query}&page=${pageNum}`;
  
      return client
        .get(input, conParams)
        .then(response => {
          return Promise.resolve(response.data)
        })
        .catch(console.error)
    }
  };
  
  
  module.exports = ApiClient