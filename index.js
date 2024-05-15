const functions = require('@google-cloud/functions-framework');
const { getHotels } = require('./hotel/hotel');

// Enregistrement de la fonction HTTP 'getHotels'
functions.http('getHotels', (req, res) => {
    try {
        const data = getHotels();
        res.status(200).send(data);
    } catch (error) {
        res.status(404).send({ error: error.message });
    }
});
