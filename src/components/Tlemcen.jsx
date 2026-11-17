
import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import './Tlemcen.css'

const places = [
  {
    id: 1,
    category: 'heritage',
    image: '/images/tlemcen/mechouar.webp',
    mapQuery: 'Palais El Mechouar Tlemcen Algérie',
  },
  {
    id: 2,
    category: 'panorama',
    image: '/images/tlemcen/lalla-setti.webp',
    mapQuery: 'Plateau Lalla Setti Tlemcen Algérie',
  },
  {
    id: 3,
    category: 'nature',
    image: '/images/tlemcen/beni-add.webp',
    mapQuery: 'Grottes de Beni Add Ain Fezza Algérie',
  },
  {
    id: 4,
    category: 'history',
    image: '/images/tlemcen/mansourah.webp',
    mapQuery: 'Mansourah Tlemcen Algérie',
  },
]

function TouristCard({ place }) {
  const { t } = useLanguage()
  const [imageAvailable, setImageAvailable] =
    useState(true)

  const translatedPlace =
    t.tlemcen.places[place.id - 1]

  const category =
    t.tlemcen.categories[place.category]

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(place.mapQuery)

  return (
    <article className="tourist-card">
      <div className="tourist-card-media">

        {imageAvailable ? (
          <img
            src={place.image}
            alt={translatedPlace.name}
            loading="lazy"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className="tourist-image-placeholder">
            <span>RÉSIDENCE LYDIA</span>

            <strong>
              {String(place.id).padStart(2, '0')}
            </strong>

            <span>{category}</span>
          </div>
        )}

        <span className="tourist-card-number">
          {String(place.id).padStart(2, '0')}
        </span>

      </div>

      <div className="tourist-card-info">
        <span className="tourist-card-category">
          {category}
        </span>

        <h3>{translatedPlace.name}</h3>
        <p>{translatedPlace.description}</p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tourist-card-link"
        >
          <span>{t.tlemcen.discover}</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function Tlemcen() {
  const { t } = useLanguage()
  const content = t.tlemcen

  return (
    <section
      id="tlemcen"
      className="tlemcen-section"
    >

      {/* Panorama */}
      <div className="tlemcen-hero">
        <div className="tlemcen-hero-shade" />

        <div className="tlemcen-hero-content">
          <Reveal>
            <div className="tlemcen-hero-text">
              <span className="tlemcen-overline">
                {content.heroSubtitle}
              </span>

              <h2>
                {content.heroTitle}
                <br />
                <em>{content.heroHighlight}</em>
              </h2>

              <p>{content.heroDescription}</p>

              <a
                href="#tlemcen-places"
                className="tlemcen-hero-link"
              >
                {content.explore}
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        <div className="tlemcen-hero-bottom">
          <span>{content.location}</span>
          <span>{content.scroll} ↓</span>
        </div>
      </div>

      {/* Destinations */}
      <div
        id="tlemcen-places"
        className="tlemcen-places"
      >
        <div className="tlemcen-container">

          <Reveal>
            <header className="tlemcen-heading">
              <span className="tlemcen-section-label">
                {content.sectionSubtitle}
              </span>

              <h2>
                {content.sectionTitle}
                <br />
                <em>{content.sectionHighlight}</em>
              </h2>

              <p>{content.sectionDescription}</p>
            </header>
          </Reveal>

          <div className="tlemcen-grid">
            {places.map((place, index) => (
              <Reveal
                key={place.id}
                delay={(index % 2) * 150}
              >
                <TouristCard place={place} />
              </Reveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Tlemcen
