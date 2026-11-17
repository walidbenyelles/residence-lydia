
const commonAmenities = [
  'wifi',
  'clim',
  'heating',
  'kitchen',
  'tv',
  'washer',
  'streetParking',
  'oven',
  'microwave',
  'dishwasher',
  'coffeeMaker',
  'towels',
  'iron',
  'crib',
  'selfCheckin',
]

const commonRules = [
  'noEvents',
  'noSmoking',
  'noPets',
  'familyBooklet',
]

export const apartments = [
  {
    id: 1,

    airbnbTitle:
      'Luxueux Appartement 3 - Résidence Lydia',

    airbnbUrl:
      'https://fr.airbnb.be/rooms/1811350676909420423',

    images: [
      '/images/apartments/apartment-1/photo-1.jpg',
    ],

    capacity: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    floor: 2,

    rating: null,
    reviewCount: 0,
    reviewStatus: 'new',

    amenities: commonAmenities,
    rules: commonRules,

    checkIn: '15:00',
    checkOut: '10:00',

    description: {
      fr: 'Appartement aménagé au 2e étage d’une résidence privée à Tlemcen, à proximité des commerces. Cuisine équipée, climatisation et chauffage dans toutes les pièces. Le logement ne dispose pas de vue dégagée (vis-à-vis sur un immeuble).',

      en: 'Furnished apartment on the second floor of a private residence in Tlemcen, close to local shops. Equipped kitchen, air conditioning and heating throughout. The apartment does not have an open view (it faces another building).',
    },
  },

  {
    id: 2,

    airbnbTitle:
      'Luxueux Appartement 2 - Résidence Lydia',

    airbnbUrl:
      'https://www.airbnb.fr/rooms/1360322649669779996',

    images: [
      '/images/apartments/apartment-2/photo-1.jpg',
    ],

    capacity: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    floor: 1,

    rating: 4.94,
    reviewCount: 69,
    reviewStatus: 'rated',

    amenities: [
      ...commonAmenities,
      'nespresso',
    ],

    rules: commonRules,

    checkIn: '15:00',
    checkOut: '10:00',

    description: {
      fr: 'Appartement moderne au 1er étage d’une résidence privée à Tlemcen, à environ 10 minutes du centre-ville. Wi-Fi rapide, cuisine équipée avec lave-vaisselle et machine Nespresso, climatisation et chauffage.',

      en: 'Modern apartment on the first floor of a private residence in Tlemcen, approximately 10 minutes from the city centre. Fast Wi-Fi, equipped kitchen with dishwasher and Nespresso machine, air conditioning and heating.',
    },
  },

  {
    id: 3,

    airbnbTitle:
      'Luxueux Appartement 4 - Résidence Lydia',

    airbnbUrl:
      'https://www.airbnb.fr/rooms/1202441066113094720',

    images: [
      '/images/apartments/apartment-3/photo-1.jpg',
    ],

    capacity: 5,
    bedrooms: 2,
    beds: 3,
    bathrooms: 1,
    floor: 2,

    rating: 4.96,
    reviewCount: 81,
    reviewStatus: 'rated',

    amenities: [
      ...commonAmenities,
      'nespresso',
    ],

    rules: commonRules,

    checkIn: '15:00',
    checkOut: '10:00',

    description: {
      fr: 'Appartement aménagé au 2e étage d’une résidence privée à Tlemcen, à environ 10 minutes du centre-ville en voiture. Cuisine équipée avec lave-vaisselle et machine Nespresso, Wi-Fi rapide, climatisation et chauffage.',

      en: 'Furnished apartment on the second floor of a private residence in Tlemcen, approximately 10 minutes from the city centre by car. Equipped kitchen with dishwasher and Nespresso machine, fast Wi-Fi, air conditioning and heating.',
    },
  },
]
