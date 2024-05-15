const getReservations = require('./reservations')

describe('getHotels', () => {
  it('should return a list of reservations', () => {
    expect(getReservations()).toEqual({
        reservation1: "aaaaaaaaaaa",
        reservation2: "bbbbbbbbb",
        reservation3: "ccccccccccc"
    })
  })
})