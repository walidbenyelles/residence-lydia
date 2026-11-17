
import { useState } from 'react'
import { Star } from 'lucide-react'

import { apartments } from '../data/apartments'
import { useLanguage } from '../i18n/LanguageContext'

import Reveal from './Reveal'
import ApartmentModal from './ApartmentModal'
import './Apartments.css'

function Apartments() {
  const { language, t } = useLanguage()

  const [selectedApartment, setSelectedApartment] =
    useState(null)

  const formatRating = value =>
    value.toLocaleString(
      language === 'fr' ? 'fr-FR' : 'en-US',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )

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
                    decoding="async"
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

                  <div className="apartment-facts">
                    <span>
                      {apartment.capacity}{' '}
                      {t.modal.guests.toLowerCase()}
                    </span>

                    <span>·</span>

                    <span>
                      {apartment.bedrooms}{' '}
                      {t.modal.bedrooms.toLowerCase()}
                    </span>
                  </div>

                  <div className="apartment-rating">
                    {apartment.rating != null ? (
                      <>
                        <Star
                          size={17}
                          fill="currentColor"
                          aria-hidden="true"
                        />

                        <strong>
                          {formatRating(apartment.rating)}
                        </strong>

                        <span>
                          / 5 · {apartment.reviewCount}{' '}
                          {t.reviews.count}
                        </span>

                        <span className="apartment-rating-source">
                          Airbnb
                        </span>
                      </>
                    ) : (
                      <span className="apartment-new-badge">
                        {t.reviews.newListing}
                      </span>
                    )}
                  </div>

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
