const supertest = require('supertest');
const app = require('../app');


var body;
describe('Get Files API', function () {
    describe('Get File at 0', function () {
        const index = 0;
        it(`index = ${index}`, function () {
            supertest(app)
                .get('/fileByIndex')
                .query({ index })
                .expect(200)
                .expect(204);
        });
    });

    describe('Get Next File', function () {
        const current = -1;
        const offset = 1;
        it(`current = ${current} & offset = ${offset}`, function () {
            supertest(app)
                .get('/file')
                .query({ current, offset })
                .expect(200)
                .expect(204)
                .expect(body);
        });
    });

    describe('Get Prev File', function () {
        const current = 1;
        const offset = -1;
        it(`current = ${current} & offset = ${offset}`, function () {
            supertest(app)
                .get('/file')
                .query({ current, offset })
                .expect(200)
                .expect(204)
                .expect(body);
        });
    });
});
