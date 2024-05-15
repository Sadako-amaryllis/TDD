const request = require('supertest');
const app = require('../app');

describe('Functional Tests for hotel API', () => {
    describe('GET /api/hotels', () => {
        it('should return status 200 and the list of hotels on success', async () => {
            const response = await request(app).get('/api/hotels');
            expect(response.status).toBe(200);
            expect(response.body).toBeDefined();
        });

        it('should return status 404 and an error message if no hotels are available', async () => {
            // Clearing hotels data to simulate no hotels available
            require('../hotel/hotel').clearHotels();

            const response = await request(app).get('/api/hotels');
            expect(response.status).toBe(404);
            expect(response.body).toEqual({ message: "Aucun hôtel disponible" });
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
