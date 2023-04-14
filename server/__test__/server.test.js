const app = require('../server');
const supertest = require('supertest')

describe('Testing home page', ()=> {

    test('Response return with 200 status code', async()=> {
        const res = await supertest(app).get('/');
        expect(res.statusCode).toBe(200)
    })

    test('All path return 200 code and html content type', async ()=> {
        const res = await supertest(app).get('/yxklk');
        expect(res.statusCode).toBe(200);
        expect(res.headers['content-type']).toMatch(/text\/html; charset=UTF-8/)
    })
})
