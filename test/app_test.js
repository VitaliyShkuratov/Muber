const assert = require('assert'),
    request = require('supertest'),
    app = require('../app');

describe('The express app', () => {
    it('handle a GET request to /api', (done) => {
        request(app)
            .get('/api')
            .end((err, response) => {
                assert(response.body.hi === 'there');
                done();
            });
    });
});