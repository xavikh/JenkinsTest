
const app = require('../app');
const request = require('supertest')(app);


describe('POST /user', function() {
    it('Valid user', function(done) {
        request
            .get('/')
            .expect(200, done);
    });
});

describe('POST /product', function() {
    it('Valid Product', function(done) {
        request
            .get('/')
            .expect(200, done);
    });
});

describe('POST /purchase', function() {
    it('Valid Purchase', function(done) {
        request
            .get('/')
            .expect(200, done);
    });
});

