const getPictures = require('./pictures')

const hotelDataWithPictures = {
    "hotel1": [
        {
            "name": "aaaaaaaaaaa",
            "pictures": {
                "photo1": "EEEEEEEEEEE.png",
                "photo2": "DDDDDDDDDDD.png"
            }
        }
    ],
    "hotel2": [
        {
            "name": "bbbbbbbbbbbbbbb",
            "pictures": {
                "photo1": "FFFFFFFFFFF.png",
                "photo2": "GGGGGGGGGGG.png"
            }
        }
    ],
    "hotel3": [
        {
            "name": "cccccccccccccccccccc",
            "pictures": {
                "photo1": "HHHHHHHHHHHH.png",
                "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
            }
        }
    ],
}

const hotelDataWithoutPictures = {
    "hotel1": [
        {
            "name": "aaaaaaaaaaa",
            "pictures": {}
        }
    ],
    "hotel2": [
        {
            "name": "bbbbbbbbbbbbbbb",
            "pictures": {
                "photo1": "FFFFFFFFFFF.png",
                "photo2": "GGGGGGGGGGG.png"
            }
        }
    ],
    "hotel3": [
        {
            "name": "cccccccccccccccccccc",
            "pictures": {
                "photo1": "HHHHHHHHHHHH.png",
                "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
            }
        }
    ],
}

test('devrait retourner la liste des photos des hôtels', () => {
    const expectedData = {
        "hotel1": {
            "photo1": "EEEEEEEEEEE.png",
            "photo2": "DDDDDDDDDDD.png"
        },
        "hotel2": {
            "photo1": "FFFFFFFFFFF.png",
            "photo2": "GGGGGGGGGGG.png"
        },
        "hotel3": {
            "photo1": "HHHHHHHHHHHH.png",
            "photo2": "IIIIIIIIIIIIIIIIIIIIIIIIIIIIIII.png"
        }
    }

    const resultWithPictures = getPictures(hotelDataWithPictures)
    const resultWithoutPictures = getPictures(hotelDataWithoutPictures)

    expect(resultWithPictures).toEqual(expectedData)
    expect(resultWithoutPictures).toEqual("Vous n'avez fait aucune réservation")
})