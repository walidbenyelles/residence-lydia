import './Hero.css'

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-subtitle">
          BIENVENUE À TLEMCEN
        </span>

        <h1>
          Un beau voyage mérite
          <br />
          <em>un séjour à sa hauteur.</em>
        </h1>

        <p>
          Découvrez Résidence Lydia, votre adresse
          pour un séjour confortable à Tlemcen.
        </p>

        <a href="#appartements" className="hero-button">
          Découvrir nos appartements
        </a>
      </div>
    </section>
  )
}

export default Hero