const hotels = {
  hotel1: "aaaaaaaaaaa",
  hotel2: "bbbbbbbbb",
  hotel3: "ccccccccccc"
}

function getHotels() {
  if (Object.keys(hotels).length === 0) {
      return "Aucun hôtel disponible"
  }
  return hotels
}

module.exports = getHotels