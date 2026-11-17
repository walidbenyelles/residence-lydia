
import { useLanguage } from '../i18n/LanguageContext'
import './Hero.css'

function Hero() {
  const { t } = useLanguage()

  return (
    <section id="accueil" className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <span className="hero-subtitle">
          {t.hero.subtitle}
        </span>

        <h1>
          {t.hero.title}
          <br />
          <em>{t.hero.titleHighlight}</em>
        </h1>

        <p>{t.hero.description}</p>

        <a
          href="#appartements"
          className="hero-button"
        >
          {t.hero.button}
        </a>
      </div>
    </section>
  )
}

export default Hero
