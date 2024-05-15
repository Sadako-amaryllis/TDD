const request = require('supertest');
const app = require('../app');
const { clearHotels } = require('../hotel/hotel');

describe('API /api/hotels', () => {
    test('getHotels should handle no available hotels', async () => {
        clearHotels();  // Assurez-vous que les hôtels sont vides pour ce test
        const response = await request(app).get('/api/hotels');
        expect(response.status).toEqual(404);
        expect(response.text).toContain("Aucun hôtel disponible");
    });
});