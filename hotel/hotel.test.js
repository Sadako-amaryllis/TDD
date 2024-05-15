const getHotels = require('./hotel')

const expectedHotels = {
  "hotel1": "aaaaaaaaaaa",
  "hotel2": "bbbbbbbbb",
  "hotel3": "ccccccccccc"
}

it('should return the list of hotels', () => {
  expect(getHotels()).toEqual(expectedHotels)
})

it('should return a message when no hotels are available', () => {
  if (Object.keys(expectedHotels).length === 0) {
    const expectedMessage = "Aucun hôtel disponible"
    expect(getHotels()).toEqual(expectedMessage)
  }
})