function getPictures(hotelData) {
  const picturesList = {}

  for (const hotel in hotelData) {
      const pictures = hotelData[hotel][0].pictures;
      if (Object.keys(pictures).length === 0) {
          return "Vous n'avez fait aucune réservation"
      }
      picturesList[hotel] = pictures
  }

  return picturesList
}

module.exports = getPictures