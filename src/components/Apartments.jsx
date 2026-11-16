import './Apartments.css'
import Reveal from './Reveal'
import { useState } from 'react'
import ApartmentModal from './ApartmentModal'


const apartments = [
  {
    id: 1,
    name: 'Appartement 1',

    images: [
      '/images/apartments/apartment-1/photo-1.jpg',
      '/images/apartments/apartment-1/photo-1.jpg',
      '/images/apartments/apartment-1/photo-1.jpg',

    ],

    description: '',

    capacity: 6,
    bedrooms: 3,

    amenities: [
      'wifi',
      'clim',
      'kitchen',
      'balcony',
      'tv',
      'heating',
      'washer',
      'parking',
    ],

    airbnbUrl:
      'https://www.airbnb.fr/rooms/1202441066113094720',

    whatsappUrl: '',
  },

  {
    id: 2,
    name: 'Appartement 2',

    images: [
      '/images/apartments/apartment-2/photo-1.jpg',
    ],

    description: '',
    capacity: null,
    bedrooms: null,
    amenities: [],
    airbnbUrl: '',
    whatsappUrl: '',
  },

  {
    id: 3,
    name: 'Appartement 3',

    images: [
      '/images/apartments/apartment-3/photo-1.jpg',
    ],

    description: '',
    capacity: null,
    bedrooms: null,
    amenities: [],
    airbnbUrl: '',
    whatsappUrl: '',
  },
]



function Apartments() {
  const [selectedApartment, setSelectedApartment] = useState(null)
  
  return (
  <>
  <section id="appartements" className="apartments">
    <Reveal>
      <div className="apartments-heading">
        <span className="section-subtitle">
          RÉSIDENCE LYDIA
        </span>

        <h2>Nos appartements</h2>

        <p>
          Découvrez nos trois appartements à Tlemcen
          et trouvez celui qui correspond à votre séjour.
        </p>
      </div>
    </Reveal>

    <div className="apartments-grid">
      {apartments.map((apartment, index) => (
  <Reveal key={apartment.id} delay={index * 150}>
    <article className="apartment-card">
      <div className="apartment-image">
        <img
          src={apartment.images[0]}          alt={apartment.name}
          loading="lazy"
        />

        <span className="apartment-image-label">
          TLEMCEN · ALGÉRIE
        </span>
      </div>

      <div className="apartment-info">
        <span className="apartment-category">
          RÉSIDENCE LYDIA
        </span>

        <h3>{apartment.name}</h3>

        <div className="apartment-divider"></div>

        <button
          type="button"
          className="apartment-button"
        onClick={() => setSelectedApartment(apartment)} 
        >
          <span>Découvrir l'appartement</span>
          <span className="apartment-arrow" aria-hidden="true">
            ↗
          </span>
        </button>
      </div>
    </article>
  </Reveal>
))}
    </div>
  </section>
  <ApartmentModal
      apartment={selectedApartment}
      onClose={() => setSelectedApartment(null)}
    />
  </>
)

}

export default Apartments