
import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  UsersRound,
  BedDouble,
  BedSingle,
  Bath,
  Layers,
  Star,
  ArrowUpRight,
  Wifi,
  Snowflake,
  CookingPot,
  Sun,
  Tv,
  Thermometer,
  WashingMachine,
  CarFront,
  Microwave,
  Coffee,
  Baby,
  KeyRound,
  ParkingCircle,
  UtensilsCrossed,
  Shirt,
  CookingPot as OvenIcon,
  Clock3,
} from 'lucide-react'

import { useLanguage } from '../i18n/LanguageContext'
import PhotoGallery from './PhotoGallery'
import './ApartmentModal.css'

const amenityIcons = {
  wifi: Wifi,
  clim: Snowflake,
  heating: Thermometer,
  kitchen: CookingPot,
  tv: Tv,
  washer: WashingMachine,
  streetParking: ParkingCircle,
  oven: OvenIcon,
  microwave: Microwave,
  dishwasher: UtensilsCrossed,
  coffeeMaker: Coffee,
  nespresso: Coffee,
  towels: Bath,
  iron: Shirt,
  crib: Baby,
  selfCheckin: KeyRound,
  balcony: Sun,
  parking: CarFront,
}

function ApartmentModal({ apartment, onClose }) {
  const { language, t } = useLanguage()

  const [galleryIndex, setGalleryIndex] =
    useState(null)

  const closeGallery = useCallback(
    () => setGalleryIndex(null),
    []
  )

  useEffect(() => {
    if (!apartment) return

    const previousOverflow =
      document.body.style.overflow

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow =
        previousOverflow
    }
  }, [apartment])

  useEffect(() => {
    if (!apartment) return

    const handleKeyDown = event => {
      if (event.key !== 'Escape') return

      event.preventDefault()

      if (galleryIndex !== null) {
        closeGallery()
      } else {
        onClose()
      }
    }

    window.addEventListener(
      'keydown',
      handleKeyDown
    )

    return () => {
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [apartment, galleryIndex, closeGallery, onClose])

  if (!apartment) return null

  const apartmentName =
    `${t.apartments.name} ${apartment.id}`

  const rating = apartment.rating?.toLocaleString(
    language === 'fr' ? 'fr-FR' : 'en-US',
    {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }
  )

  const whatsappUrl =
    'https://wa.me/213557879267?text=' +
    encodeURIComponent(
      `${t.contact.apartmentMessage} ${apartmentName} - Résidence Lydia.`
    )

  return (
    <div
      className="modal-overlay"
      onMouseDown={event => {
        if (
          event.target === event.currentTarget &&
          galleryIndex === null
        ) {
          onClose()
        }
      }}
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal={galleryIndex === null}
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label={t.modal.close}
        >
          ×
        </button>

        {/* Photos */}
        <div className="luxury-gallery-preview">
          <div className="luxury-gallery-grid">
            <button
              type="button"
              className="luxury-gallery-main"
              onClick={() => setGalleryIndex(0)}
              aria-label={t.modal.viewPhotos}
            >
              <img
                src={apartment.images[0]}
                alt={apartmentName}
              />
            </button>

            {apartment.images.length > 1 && (
              <div className="luxury-gallery-side">
                {apartment.images
                  .slice(1, 3)
                  .map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() =>
                        setGalleryIndex(index + 1)
                      }
                      aria-label={
                        `${t.modal.photo} ${index + 2}`
                      }
                    >
                      <img
                        src={image}
                        alt={
                          `${apartmentName} — ${t.modal.photo} ${index + 2}`
                        }
                        loading="lazy"
                      />
                    </button>
                  ))}
              </div>
            )}
          </div>

          <div className="luxury-gallery-footer">
            <span>{t.modal.preview}</span>

            <button
              type="button"
              onClick={() => setGalleryIndex(0)}
            >
              {t.modal.viewPhotos} ↗

              <span className="gallery-total">
                ({apartment.images.length})
              </span>
            </button>
          </div>
        </div>

        {/* Informations */}
        <div className="modal-body luxury-body">
          <div className="luxury-header">
            <div className="luxury-eyebrow">
              <span className="luxury-line" />
              {t.modal.subtitle}
            </div>

            <h2 id="modal-title">
              {apartmentName}
            </h2>

            <p className="luxury-tagline">
              {t.modal.tagline}
            </p>

            <div className="luxury-rating">
              {apartment.rating != null ? (
                <>
                  <Star
                    size={19}
                    fill="currentColor"
                    aria-hidden="true"
                  />

                  <strong>{rating}</strong>

                  <span>
                    / 5 · {apartment.reviewCount}{' '}
                    {t.reviews.count} Airbnb
                  </span>
                </>
              ) : (
                <span>
                  {t.reviews.newListing}
                </span>
              )}
            </div>
          </div>

          {/* Capacité */}
          <div className="luxury-stats">
            <div className="luxury-stat">
              <UsersRound
                size={24}
                strokeWidth={1.4}
              />

              <strong>
                {String(apartment.capacity)
                  .padStart(2, '0')}
              </strong>

              <span>{t.modal.guests}</span>
            </div>

            <div className="luxury-stat">
              <BedDouble
                size={24}
                strokeWidth={1.4}
              />

              <strong>
                {String(apartment.bedrooms)
                  .padStart(2, '0')}
              </strong>

              <span>{t.modal.bedrooms}</span>
            </div>

            <div className="luxury-stat">
              <BedSingle
                size={24}
                strokeWidth={1.4}
              />

              <strong>
                {String(apartment.beds)
                  .padStart(2, '0')}
              </strong>

              <span>{t.modal.beds}</span>
            </div>

            <div className="luxury-stat">
              <Bath
                size={24}
                strokeWidth={1.4}
              />

              <strong>
                {String(apartment.bathrooms)
                  .padStart(2, '0')}
              </strong>

              <span>{t.modal.bathrooms}</span>
            </div>
          </div>

          {/* Description */}
          <div className="luxury-intro">
            <h3>{t.modal.introTitle}</h3>

            <p>
              {apartment.description[language] ||
                apartment.description.fr}
            </p>
          </div>

          {/* Informations pratiques */}
          <div className="luxury-additional-info">
            <div>
              <Layers size={18} />

              <span>
                {t.modal.floor} :{' '}
                {apartment.floor}
                {language === 'fr'
                  ? apartment.floor === 1
                    ? 'er'
                    : 'e'
                  : apartment.floor === 1
                    ? 'st'
                    : 'nd'}
              </span>
            </div>

            <div>
              <Clock3 size={18} />

              <span>
                {t.modal.checkin} {apartment.checkIn}
                {' · '}
                {t.modal.checkout} {apartment.checkOut}
              </span>
            </div>
          </div>

          {/* Équipements */}
          {apartment.amenities.length > 0 && (
            <div className="luxury-amenities">
              <div className="luxury-section-heading">
                <span>
                  {t.modal.amenitiesSubtitle}
                </span>

                <h3>
                  {t.modal.amenitiesTitle}
                </h3>
              </div>

              <div className="luxury-amenities-grid">
                {apartment.amenities.map(amenity => {
                  const Icon = amenityIcons[amenity]

                  if (!Icon) return null

                  return (
                    <div
                      className="luxury-amenity"
                      key={amenity}
                    >
                      <Icon
                        size={22}
                        strokeWidth={1.4}
                      />

                      <span>
                        {t.amenities[amenity]}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Règlement */}
          <div className="luxury-rules">
            <div className="luxury-section-heading">
              <span>{t.modal.important}</span>

              <h3>
                {t.modal.houseRules}
              </h3>
            </div>

            <ul>
              {apartment.rules.map(rule => (
                <li key={rule}>
                  {t.rules[rule]}
                </li>
              ))}
            </ul>
          </div>

          {/* Réservation */}
          <div className="luxury-booking">
            <span className="luxury-booking-label">
              {t.modal.bookingSubtitle}
            </span>

            <a
              href={apartment.airbnbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-booking-link"
            >
              <span>{t.modal.airbnb}</span>

              <ArrowUpRight
                size={22}
                strokeWidth={1.5}
              />
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="luxury-whatsapp-link"
            >
              {t.modal.whatsapp}
              <ArrowUpRight size={18} />
            </a>
          </div>

          <p className="airbnb-data-note">
            {t.modal.airbnbNote}
          </p>
        </div>
      </div>

      {galleryIndex !== null && (
        <PhotoGallery
          images={apartment.images}
          initialIndex={galleryIndex}
          onClose={closeGallery}
        />
      )}
    </div>
  )
}

export default ApartmentModal
