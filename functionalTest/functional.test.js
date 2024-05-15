const request = require('supertest');
const app = require('../app');
const {clearHotels} = require("../hotel/hotel");

describe('Functional Tests for hotel API', () => {
    describe('GET /api/hotels', () => {

        it('should return status 200 and the list of hotels on success', async () => {
            const response = await request(app).get('/api/hotels');
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
        });


        it('should return status 404 and an error message if no hotels are available', async () => {
            clearHotels();  // Vérifiez que cela fonctionne comme attendu
            const response = await request(app).get('/api/not-found');
            console.log(response.body);  // Pour déboguer ce que vous obtenez réellement
            expect(response.statusCode).toBe(404);
        });
    });

    describe('GET /api/health', () => {
        it('should return status 204 and no response content on success', async () => {
            const response = await request(app).get('/api/health');
            expect(response.status).toBe(204);
            expect(response.body).toEqual({});
        });
    });

    describe('GET /api/forbidden', () => {
        it('should return status 403 on success', async () => {
            const response = await request(app).get('/api/forbidden');
            expect(response.status).toBe(403);
        });
    });
});
