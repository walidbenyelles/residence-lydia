
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import ApartmentModal from './ApartmentModal'
import './Apartments.css'

const apartments = [
  {
    id: 1,
    name: 'Appartement 1',
    images: [
      '/images/apartments/apartment-1/photo-1.jpg',
      // Ajoute tes autres photos ici
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
  const { t } = useLanguage()
  const [selectedApartment, setSelectedApartment] =
    useState(null)

  return (
    <>
      <section
        id="appartements"
        className="apartments"
      >
        <Reveal>
          <div className="apartments-heading">
            <span className="section-subtitle">
              {t.apartments.subtitle}
            </span>

            <h2>{t.apartments.title}</h2>
            <p>{t.apartments.description}</p>
          </div>
        </Reveal>

        <div className="apartments-grid">
          {apartments.map((apartment, index) => (
            <Reveal
              key={apartment.id}
              delay={index * 150}
            >
              <article className="apartment-card">
                <div className="apartment-image">
                  <img
                    src={apartment.images[0]}
                    alt={`${t.apartments.name} ${apartment.id}`}
                    loading="lazy"
                  />

                  <span className="apartment-image-label">
                    {t.apartments.location}
                  </span>
                </div>

                <div className="apartment-info">
                  <span className="apartment-category">
                    RÉSIDENCE LYDIA
                  </span>

                  <h3>
                    {t.apartments.name} {apartment.id}
                  </h3>

                  <div className="apartment-divider" />

                  <button
                    type="button"
                    className="apartment-button"
                    onClick={() =>
                      setSelectedApartment(apartment)
                    }
                  >
                    <span>
                      {t.apartments.discover}
                    </span>

                    <span
                      className="apartment-arrow"
                      aria-hidden="true"
                    >
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
