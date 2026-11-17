
import {
  MapPin,
  Building2,
  ArrowUpRight,
} from 'lucide-react'

import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import './About.css'

function About() {
  const { t } = useLanguage()
  const about = t.about

  return (
    <section id="apropos" className="about-section">
      <div className="about-container">

        <Reveal>
          <div className="about-heading">
            <span className="about-eyebrow">
              {about.eyebrow}
            </span>

            <h2>
              {about.title}
              <br />
              <em>{about.titleHighlight}</em>
            </h2>

            <p>{about.description1}</p>
            <p>{about.description2}</p>
          </div>
        </Reveal>

        <div className="about-features">

          <Reveal delay={0}>
            <div className="about-feature">
              <span className="about-feature-number">
                03
              </span>

              <h3>{about.features[0].title}</h3>
              <p>{about.features[0].description}</p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="about-feature">
              <MapPin size={32} strokeWidth={1.3} />

              <h3>{about.features[1].title}</h3>
              <p>{about.features[1].description}</p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="about-feature">
              <Building2 size={32} strokeWidth={1.3} />

              <h3>{about.features[2].title}</h3>
              <p>{about.features[2].description}</p>
            </div>
          </Reveal>

        </div>

        <Reveal>
          <div className="about-location">
            <div>
              <span>{about.locationSubtitle}</span>
              <h3>{about.locationTitle}</h3>
              <p>{about.location}</p>
            </div>

            <a
              href="https://maps.app.goo.gl/b4phijvF37wdZQpm7"
              target="_blank"
              rel="noopener noreferrer"
            >
              {about.maps}
              <ArrowUpRight size={19} />
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}

export default About
