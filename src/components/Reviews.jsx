
import { Star, ArrowUpRight } from 'lucide-react'
import { apartments } from '../data/apartments'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import './Reviews.css'

function Reviews() {
  const { language, t } = useLanguage()

  const formatRating = value =>
    value.toLocaleString(
      language === 'fr' ? 'fr-FR' : 'en-US',
      {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    )

  return (
    <section id="avis" className="reviews-section">
      <div className="reviews-container">
        <Reveal>
          <div className="reviews-heading">
            <span className="reviews-eyebrow">
              {t.reviews.eyebrow}
            </span>

            <h2>{t.reviews.title}</h2>
            <p>{t.reviews.subtitle}</p>
          </div>
        </Reveal>

        <div className="reviews-grid">
          {apartments.map((apartment, index) => (
            <Reveal
              key={apartment.id}
              delay={index * 130}
            >
              <article className="review-card">
                <span className="review-property">
                  {t.apartments.name} {apartment.id}
                </span>

                {apartment.rating == null ? (
                  <p className="review-new">
                    {t.reviews.newListing}
                  </p>
                ) : (
                  <>
                    <div className="review-score">
                      <Star
                        fill="currentColor"
                        size={27}
                      />

                      <strong>
                        {formatRating(apartment.rating)}
                      </strong>

                      <span>/ 5</span>
                    </div>

                    <p className="review-count">
                      {apartment.reviewCount}{' '}
                      {t.reviews.count} · Airbnb
                    </p>
                  </>
                )}

                <a
                  href={apartment.airbnbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="review-link"
                >
                  {t.reviews.view}
                  <ArrowUpRight size={17} />
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="reviews-source-note">
          {t.reviews.sourceNote}
        </p>
      </div>
    </section>
  )
}

export default Reviews
