
import {
  MessageCircle,
  MapPin,
  ArrowUpRight,
} from 'lucide-react'

import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import './Contact.css'

const contact = {
  phone: '213557879267',
  email: '',
  instagram: '',
}

function Contact() {
  const { t } = useLanguage()
  const content = t.contact

  const whatsappUrl =
    `https://wa.me/${contact.phone}?text=` +
    encodeURIComponent(content.whatsappMessage)

  return (
    <footer
      id="contact"
      className="contact-section"
    >
      <div className="contact-container">

        {/* Réservation */}
        <Reveal>
          <div className="contact-hero">

            <span className="contact-eyebrow">
              {content.eyebrow}
            </span>

            <h2>
              {content.title}
              <br />
              <em>{content.titleHighlight}</em>
            </h2>

            <p>{content.description}</p>

            <div className="contact-actions">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button primary"
              >
                <MessageCircle size={20} />
                {content.whatsapp}
                <ArrowUpRight size={18} />
              </a>

              <a
                href="#appartements"
                className="contact-button secondary"
              >
                {content.apartments}
                <ArrowUpRight size={18} />
              </a>

            </div>
          </div>
        </Reveal>

        {/* Footer */}
        <div className="contact-footer">

          <div className="footer-brand">
            <h3>RÉSIDENCE LYDIA</h3>

            <p>{content.brandDescription}</p>

            <div className="footer-location">
              <MapPin size={17} />
              <span>{content.location}</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-links">
            <h4>{content.explore}</h4>

            <a href="#accueil">
              {t.nav.home}
            </a>

            <a href="#appartements">
              {t.nav.apartments}
            </a>

            <a href="#apropos">
              {t.nav.about}
            </a>

            <a href="#tlemcen">
              {t.nav.tlemcen}
            </a>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4>{content.contact}</h4>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>

            <a href={`tel:+${contact.phone}`}>
              +213 557 87 92 67
            </a>

            {contact.email && (
              <a href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
            )}

            {contact.instagram && (
              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.instagram}
              </a>
            )}

            <a
              href="https://www.google.com/maps/search/?api=1&query=Sidi+Said+Tlemcen+Algerie"
              target="_blank"
              rel="noopener noreferrer"
            >
              {content.maps}
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()}
            {' '}Résidence Lydia. {content.rights}
          </span>
<span>
            By walid B
          </span>
        
        </div>

      </div>
    </footer>
  )
}

export default Contact
