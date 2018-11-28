const HttpClient = require('../api');
const { expect } = require('chai');

//external api call mock
let isFakeAxiosCalled = false;
const fakeApiResponse = { data: [{foo: 'bar'}] };
const fakeAxios = {
    get: () => {
        isFakeAxiosCalled = true;
        return Promise.resolve(fakeApiResponse);
    },
    then: () => { 
        return Promise.resolve(fakeApiResponse.data) 
    }
}
const req = {query: {keyword: 'str'}};
const fakeParameters = [ fakeAxios, req.query.keyword, 0 ];

describe('GET request to "/api/search" endpoint', function() {
    it('gets search parameters from the req object', function(){
        expect(req.query).to.not.be.empty;
    });

    it('calls to OMDb Api with search parameters', function() {
        HttpClient.fetchOmdbApi.getMovies(...fakeParameters);
        expect(isFakeAxiosCalled).to.equal(true)
    });

    it('gets response from OMDb Api', function() {
        HttpClient.fetchOmdbApi.getMovies(...fakeParameters).then((data) => {
            expect(data).to.not.be.empty
        });
    });

    it('getMovies method returns a promise', function() {
        expect(HttpClient.fetchOmdbApi.getMovies(...fakeParameters))
        .to.be.a('promise');
    });

    it('gets data from OMDb Api', function() {
        HttpClient.fetchOmdbApi.getMovies(...fakeParameters).then((data) => {
            expect(data).to.not.be.empty
        });
    });

    it('the data is an "array"', function() {
        HttpClient.fetchOmdbApi.getMovies(...fakeParameters).then((data) => {
            expect(data).to.be.an('array')
        });
    });

    it('getMovies method throw an error when parameters are missing', function() {
        try {
            HttpClient.fetchOmdbApi.getMovies()
            .then((data) => {})
        } catch(err) { expect(err).to.be.an('Error') }
    });
});
