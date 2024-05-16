const express = require('express');
const hotelRoutes = require('./hotel/hotel');
const { getHotelsHandler } = require("./hotel/hotel");

const app = express();

app.use(express.json());

// Utilisation de getHotelsHandler comme middleware pour la route '/api/hotels'
// Assurez-vous que getHotelsHandler est correctement défini pour traiter toutes les requêtes à '/api/hotels'
app.use('/api/hotels', getHotelsHandler);

// Routes statiques pour des états HTTP spécifiques
app.get('/api/health', (req, res) => {
    res.status(204).send();
});
app.get('/api/forbidden', (req, res) => {
    res.status(403).send();
});
app.get('/api/not-found', (req, res) => {
    res.status(404).send();
});

// Seulement démarrer le serveur si ce fichier est exécuté directement par Node.js
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app; // Exporter pour les tests