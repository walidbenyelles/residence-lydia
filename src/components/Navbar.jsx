
import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="navbar">
      <a href="#accueil" className="navbar-logo">
        <img
          src="/images/logo.svg"
          alt=""
          className="navbar-logo-image"
        />

        <div className="navbar-logo-text">
          <span>RÉSIDENCE LYDIA</span>
          <small>TLEMCEN · ALGÉRIE</small>
        </div>
      </a>

      <nav
        className="navbar-links"
        aria-label={
          language === 'fr'
            ? 'Navigation principale'
            : 'Main navigation'
        }
      >
        <a href="#accueil">
          {t.nav.home}
        </a>

        <a href="#appartements">
          {t.nav.apartments}
        </a>

        <a href="#apropos">
          {t.nav.about}
        </a>

        <a href="#avis">
          {t.nav.reviews}
        </a>

        <a href="#tlemcen">
          {t.nav.tlemcen}
        </a>

        <a href="#contact">
          {t.nav.contact}
        </a>
      </nav>

      <button
        type="button"
        className="language-button"
        onClick={() =>
          setLanguage(
            language === 'fr' ? 'en' : 'fr'
          )
        }
        aria-label={
          language === 'fr'
            ? 'Switch to English'
            : 'Passer en français'
        }
      >
        {language === 'fr' ? 'EN' : 'FR'}
      </button>
    </header>
  )
}

export default Navbar
