let hotels = {
  hotel1: "aaaaaaaaaaa",
  hotel2: "bbbbbbbbb",
  hotel3: "ccccccccccc"
};

function clearHotels() {  // Ajoutez une fonction pour effacer les hôtels pour les tests
  hotels = {};
}

function getHotels() {
  if (Object.keys(hotels).length === 0) {
    return null;
  }
  return hotels;
}

function getHotelsHandler(req, res) {
  const data = getHotels();
  if (!data) {
    res.status(404).send("Aucun hôtel disponible");
  } else {
    res.status(200).send(data);
  }
}

module.exports = { getHotelsHandler, getHotels, clearHotels };  // Exportez clearHotels pour les tests
