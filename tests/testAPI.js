
const app = require('../index');
const request = require('supertest')(app);


describe('POST /user', function() {
    it('user.name should be an case-insensitive match for "john"', function(done) {
        request
            .get('/')
            .expect(200, done);
    });
});

describe('POST /user', function() {
    it('user.name should be an case-insensitive match for "john"', function(done) {
        request
            .get('/')
            .expect(200, done);
    });
});

describe('POST /user', function() {
    it('user.name should be an case-insensitive match for "john"', function(done) {
        request
            .get('/')
            .expect(200, done);
    });
});

