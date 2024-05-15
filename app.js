const express = require('express');
const hotelRoutes = require('./hotel/hotel');
const {getHotelsHandler} = require("./hotel/hotel"); // Importez les routes des hôtels

const app = express();

app.use(express.json()); // Middleware pour parser les corps JSON

// Utiliser les routeurs
app.use('/api/hotels', getHotelsHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;  // Exporter pour les tests
