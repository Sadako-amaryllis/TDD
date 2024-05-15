function displayBookedHotels(hotelData) {
    const bookedHotels = {}

    for (const hotel in hotelData) {
        if (hotelData[hotel][0].book === "true") {
            bookedHotels[hotel] = {
                name: hotelData[hotel][0].name,
                pictures: hotelData[hotel][0].pictures
            }
        }
    }

    if (Object.keys(bookedHotels).length === 0) {
        return "Vous n'avez fait aucune réservation"
    }

    return bookedHotels
}

module.exports = displayBookedHotels