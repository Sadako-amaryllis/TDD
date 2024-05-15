const { getHotels, clearHotels } = require('./hotel');

test('getHotels should return the list of hotels', () => {
  expect(getHotels()).toEqual({
    "hotel1": "aaaaaaaaaaa",
    "hotel2": "bbbbbbbbb",
    "hotel3": "ccccccccccc"
  });
});

test('getHotels should return null when no hotels are available', () => {
  clearHotels();  // Effacer les hôtels avant le test
  expect(getHotels()).toBeNull();
});
