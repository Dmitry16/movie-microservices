const request = require('supertest');
const app = require('../app');
const fetchData = require('../apiClient');
const { expect, assert } = require('chai');

//axios mock
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

describe('GET request to "/" endpoint', function() {
    it('server responds with status 200', function(done){
        request(app)
        .get('/')
        .expect(200, done)
    });
});

describe('GET request to "/api/search" endpoint', function() {
    it('gets search parameters from the req object', function(){
        expect(req.query).to.not.be.empty;
    });

    it('calls to OMDb Api with search parameters', function() {
        fetchData(fakeAxios, req.query.str);
        expect(isFakeAxiosCalled).to.equal(true)
    });

    it('gets response from OMDb Api', function() {
        fetchData(fakeAxios, req.query.str).then((data) => {
            expect(data).to.not.be.empty
        });
    });

    it('gets data from OMDb Api', function() {
        fetchData(fakeAxios, req.query.str).then((data) => {
            expect(data).to.not.be.empty
        });
    });

    it('the data is an "array"', function() {
        fetchData(fakeAxios, req.query.str).then((data) => {
            expect(data).to.be.an('array')
        });
    });

    it('server responds with json data', function(done){
        request(app)
            .get('/api/search')
            .expect(200)
            .expect('Content-Type', /json/, done)
            // .expect('Content-Length', '20')
    });

});
