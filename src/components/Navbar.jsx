
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

import { useLanguage } from '../i18n/LanguageContext'
import './Navbar.css'

function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { id: 'accueil', label: t.nav.home },
    { id: 'appartements', label: t.nav.apartments },
    { id: 'apropos', label: t.nav.about },
    { id: 'avis', label: t.nav.reviews },
    { id: 'tlemcen', label: t.nav.tlemcen },
    { id: 'contact', label: t.nav.contact },
  ]

  const toggleLanguage = () => {
    setLanguage(current =>
      current === 'fr' ? 'en' : 'fr'
    )
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }
const goToHome = (event) => {
  event.preventDefault()
  setMenuOpen(false)

  window.scrollTo({
    top: 0,
    behavior: window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches ? 'instant' : 'smooth',
  })

  window.history.replaceState(null, '', '#accueil')
}
  // Fermer avec Échap
  useEffect(() => {
    if (!menuOpen) return

    const handleEscape = event => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [menuOpen])

  // Fermer le menu si on repasse sur ordinateur
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(min-width: 901px)'
    )

    const handleChange = event => {
      if (event.matches) {
        setMenuOpen(false)
      }
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener(
        'change',
        handleChange
      )
    }
  }, [])

  return (
    <header className="navbar">

      {/* Logo */}
      <a
  href="#accueil"
  className="navbar-logo"
  onClick={goToHome}
>
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

      {/* Navigation ordinateur */}
      <nav
        className="navbar-links"
        aria-label={
          language === 'fr'
            ? 'Navigation principale'
            : 'Main navigation'
        }
      >
        {navLinks.map(link => (
  <a
    key={link.id}
    href={`#${link.id}`}
    onClick={
      link.id === 'accueil'
        ? goToHome
        : undefined
    }
  >
    {link.label}
  </a>
))}
      </nav>

      {/* Actions */}
      <div className="navbar-actions">
        <button
          type="button"
          className="language-button"
          onClick={toggleLanguage}
          aria-label={
            language === 'fr'
              ? 'Switch to English'
              : 'Passer en français'
          }
        >
          {language === 'fr' ? 'EN' : 'FR'}
        </button>

        <button
          type="button"
          className="navbar-menu-toggle"
          onClick={() =>
            setMenuOpen(current => !current)
          }
          aria-expanded={menuOpen}
          aria-controls="navbar-mobile-menu"
          aria-label={
            menuOpen
              ? language === 'fr'
                ? 'Fermer le menu'
                : 'Close menu'
              : language === 'fr'
                ? 'Ouvrir le menu'
                : 'Open menu'
          }
        >
          {menuOpen ? (
            <X size={25} strokeWidth={1.5} />
          ) : (
            <Menu size={25} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Menu mobile */}
      <nav
        id="navbar-mobile-menu"
        className={
          `navbar-mobile-menu ${menuOpen ? 'is-open' : ''}`
        }
        aria-label={
          language === 'fr'
            ? 'Navigation mobile'
            : 'Mobile navigation'
        }
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="navbar-mobile-inner">

          <span className="navbar-mobile-eyebrow">
            RÉSIDENCE LYDIA · TLEMCEN
          </span>

          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={
                link.id === 'accueil'
                  ? goToHome
                  : closeMenu
            }
              className="navbar-mobile-link"
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{link.label}</span>

              <span className="navbar-mobile-number">
                {String(index + 1).padStart(2, '0')}
              </span>
            </a>
          ))}

          <div className="navbar-mobile-footer">
            <span>SIDI SAÏD · TLEMCEN</span>

            <ArrowUpRight
              size={18}
              strokeWidth={1.4}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
