
import { useState } from 'react'
import Reveal from './Reveal'
import './Tlemcen.css'

const places = [
  {
    id: 1,
    name: 'Palais El Mechouar',
    category: 'PATRIMOINE',
    description:
      "Découvrez l'un des monuments les plus emblématiques de l'histoire de Tlemcen.",
    image: '/images/tlemcen/mechouar.jpg',
    mapQuery: 'Palais El Mechouar Tlemcen Algérie',
  },
  {
    id: 2,
    name: 'Plateau de Lalla Setti',
    category: 'PANORAMA',
    description:
      'Prenez de la hauteur et admirez les paysages de Tlemcen et de ses environs.',
    image: '/images/tlemcen/lalla-setti.jpg',
    mapQuery: 'Plateau Lalla Setti Tlemcen Algérie',
  },
  {
    id: 3,
    name: 'Grottes de Béni Add',
    category: 'NATURE',
    description:
      'Explorez un univers souterrain aux formations rocheuses remarquables.',
    image: '/images/tlemcen/beni-add.jpg',
    mapQuery: 'Grottes de Beni Add Ain Fezza Algérie',
  },
  {
    id: 4,
    name: 'Mansourah',
    category: 'HISTOIRE',
    description:
      'Découvrez les vestiges historiques et le célèbre minaret de Mansourah.',
    image: '/images/tlemcen/mansourah.jpg',
    mapQuery: 'Mansourah Tlemcen Algérie',
  },
]

function TouristCard({ place }) {
  const [imageAvailable, setImageAvailable] = useState(true)

  const mapsUrl =
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent(place.mapQuery)

  return (
    <article className="tourist-card">
      <div className="tourist-card-media">
        {imageAvailable ? (
          <img
            src={place.image}
            alt={place.name}
            loading="lazy"
            onError={() => setImageAvailable(false)}
          />
        ) : (
          <div className="tourist-image-placeholder">
            <span>RÉSIDENCE LYDIA</span>
            <strong>
              {String(place.id).padStart(2, '0')}
            </strong>
            <span>{place.category}</span>
          </div>
        )}

        <span className="tourist-card-number">
          {String(place.id).padStart(2, '0')}
        </span>
      </div>

      <div className="tourist-card-info">
        <span className="tourist-card-category">
          {place.category}
        </span>

        <h3>{place.name}</h3>
        <p>{place.description}</p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="tourist-card-link"
        >
          <span>Découvrir le lieu</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  )
}

function Tlemcen() {
  return (
    <section id="tlemcen" className="tlemcen-section">

      {/* PANORAMA IMMERSIF */}

      <div className="tlemcen-hero">
        <div className="tlemcen-hero-shade" />

        <div className="tlemcen-hero-content">
          <Reveal>
            <div className="tlemcen-hero-text">

              <span className="tlemcen-overline">
                DÉCOUVREZ L'OUEST ALGÉRIEN
              </span>

              <h2>
                Tlemcen,
                <br />
                <em>l'art de voyager.</em>
              </h2>

              <p>
                Une ville où l'histoire rencontre
                la beauté des paysages.
                Découvrez une destination riche
                en patrimoine, en culture
                et en traditions.
              </p>

              <a
                href="#tlemcen-places"
                className="tlemcen-hero-link"
              >
                Explorer la ville
                <span aria-hidden="true">↓</span>
              </a>

            </div>
          </Reveal>
        </div>

        <div className="tlemcen-hero-bottom">
          <span>TLEMCEN · ALGÉRIE</span>
          <span>DÉFILER POUR EXPLORER ↓</span>
        </div>
      </div>

      {/* DESTINATIONS */}

      <div id="tlemcen-places" className="tlemcen-places">
        <div className="tlemcen-container">

          <Reveal>
            <header className="tlemcen-heading">
              <span className="tlemcen-section-label">
                EXPLOREZ LES ENVIRONS
              </span>

              <h2>
                Les trésors
                <br />
                <em>de Tlemcen.</em>
              </h2>

              <p>
                Des monuments chargés d'histoire
                aux merveilles naturelles,
                laissez-vous inspirer par les
                plus beaux lieux de la région.
              </p>
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

          {/* MESSAGE FINAL */}

          <Reveal>
            <div className="tlemcen-ending">
              <span>VOTRE ESCAPADE COMMENCE ICI</span>

              <h2>
                Explorez la ville.
                <br />
                <em>Séjournez chez nous.</em>
              </h2>

              <p>
                Profitez de votre séjour à Résidence
                Lydia pour découvrir Tlemcen.
              </p>

              <a href="#appartements">
                Découvrir nos appartements
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Tlemcen
