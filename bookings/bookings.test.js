const displayBookedHotels = require('./bookings')

const hotelData = {
    "hotel1": [
        {
            "name": "aaaaaaaaaaa",
            "pictures": {
                "photo1": "EEEEEEEEEEE.png",
                "photo2": "DDDDDDDDDDD.png"
            },
            "book": "false"
        }
    ],
    "hotel2": [
        {
            "name": "bbbbbbbbbbbbbbb",
            "pictures": {
                "photo1": "FFFFFFFFFFF.png",
                "photo2": "GGGGGGGGGGG.png"
            },
            "book": "false"
        }
    ],
    "hotel3": [
        {
            "name": "cccccccccccccccccccc",
            "pictures": {
                "photo1": "HHHHHHHHHHHH.png",
                "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
            },
            "book": "true"
        }
    ],
}

test('affiche la liste des hôtels réservés', () => {
    const expectedData = {
        "hotel3": {
            "name": "cccccccccccccccccccc",
            "pictures": {
                "photo1": "HHHHHHHHHHHH.png",
                "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
            }
        }
    }

    const result = displayBookedHotels(hotelData)

    console.log(displayBookedHotels(hotelData))

    expect(result).toEqual(expectedData)
})

test('affiche le message lorsque aucun hôtel n\'est réservé', () => {
    const expectedMessage = "Vous n'avez fait aucune réservation"

    const result = displayBookedHotels({})

    console.log(result)

    expect(result).toEqual(expectedMessage)
})