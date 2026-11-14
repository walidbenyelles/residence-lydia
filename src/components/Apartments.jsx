import './Apartments.css'
import Reveal from './Reveal'
const apartments = [
  {
    id: 1,
    name: 'Appartement 1',
    image: '/images/apartments/apartment-1.jpg',
  },
  {
    id: 2,
    name: 'Appartement 2',
    image: '/images/apartments/apartment-2.jpg',
  },
  {
    id: 3,
    name: 'Appartement 3',
    image: '/images/apartments/apartment-3.jpg',
  },
]

function Apartments() {
  return (
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
                src={apartment.image}
                alt={apartment.name}
                loading="lazy"
              />
            </div>

            <div className="apartment-info">
              <h3>{apartment.name}</h3>

              <button
                type="button"
                className="apartment-button"
              >
                Découvrir <span aria-hidden="true">↗</span>
              </button>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </section>
)
}

export default Apartments