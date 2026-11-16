

import { useEffect, useState } from 'react'
import './ApartmentModal.css'
import PhotoGallery from './PhotoGallery'
import { amenitiesData } from '../data/amenities'
import {
  UsersRound,
  BedDouble,
  Wifi,
  Snowflake,
  CookingPot,
  Sun,
  Tv,
  Thermometer,
  WashingMachine,
  CarFront,
  ArrowUpRight,
} from 'lucide-react'
const amenityIcons = {
  wifi: { label: 'Wi-Fi', Icon: Wifi },
  clim: { label: 'Climatisation', Icon: Snowflake },
  kitchen: { label: 'Cuisine équipée', Icon: CookingPot },
  balcony: { label: 'Balcon', Icon: Sun },
  tv: { label: 'Télévision', Icon: Tv },
  heating: { label: 'Chauffage', Icon: Thermometer },
  washer: { label: 'Lave-linge', Icon: WashingMachine },
  parking: { label: 'Parking', Icon: CarFront },
}
function ApartmentModal({ apartment, onClose }) {

  // Photo actuellement ouverte dans la galerie
  const [galleryIndex, setGalleryIndex] = useState(null)

  useEffect(() => {
    if (!apartment) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        if (galleryIndex !== null) {
          setGalleryIndex(null)
        } else {
          onClose()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [apartment, galleryIndex, onClose])

  if (!apartment) return null

  return (
    <div
      className="modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    
    >
      <div
        className="modal-content"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Fermer les détails"
        >
          ×
        </button>

        
<div className="luxury-gallery-preview">

  <div className="luxury-gallery-grid">

    <button
      type="button"
      className="luxury-gallery-main"
      onClick={() => setGalleryIndex(0)}
      aria-label="Agrandir la première photo"
    >
      <img
        src={apartment.images[0]}
        alt={`${apartment.name} - photo principale`}
      />
    </button>

    {apartment.images.length > 1 && (
      <div className="luxury-gallery-side">
        {apartment.images.slice(1, 3).map((image, index) => (
          <button
            type="button"
            key={image}
            onClick={() => setGalleryIndex(index + 1)}
            aria-label={`Agrandir la photo ${index + 2}`}
          >
            <img
              src={image}
              alt={`${apartment.name} - photo ${index + 2}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>
    )}

  </div>

  <div className="luxury-gallery-footer">
    <span>APERÇU DE L'APPARTEMENT</span>

    <button
      type="button"
      onClick={() => setGalleryIndex(0)}
    >
      Voir toutes les photos
      <span aria-hidden="true"> ↗</span>
      <span className="gallery-total">
        ({apartment.images.length})
      </span>
    </button>
  </div>

</div>


        
<div className="modal-body luxury-body">

  {/* En-tête */}
  <div className="luxury-header">
    <div className="luxury-eyebrow">
      <span className="luxury-line"></span>
      RÉSIDENCE LYDIA · TLEMCEN
    </div>

    <h2 id="modal-title">
      {apartment.name}
    </h2>

    <p className="luxury-tagline">
      Un espace à découvrir
    </p>
  </div>

  {/* Informations principales */}
  <div className="luxury-stats">

    {apartment.capacity != null && (
      <div className="luxury-stat">
        <UsersRound size={24} strokeWidth={1.4} />

        <strong>
          {String(apartment.capacity).padStart(2, '0')}
        </strong>

        <span>VOYAGEURS</span>
      </div>
    )}

    {apartment.bedrooms != null && (
      <div className="luxury-stat">
        <BedDouble size={24} strokeWidth={1.4} />

        <strong>
          {String(apartment.bedrooms).padStart(2, '0')}
        </strong>

        <span>CHAMBRES</span>
      </div>
    )}

  </div>

  {/* Présentation */}
  <div className="luxury-intro">
    <h3>L'art de se sentir chez soi.</h3>

    {apartment.description ? (
      <p>{apartment.description}</p>
    ) : (
      <p>
        Découvrez les prestations et équipements
        disponibles pour votre séjour.
      </p>
    )}
  </div>

  {/* Équipements */}
  {apartment.amenities?.length > 0 && (
    <div className="luxury-amenities">

      <div className="luxury-section-heading">
        <span>LES PRESTATIONS</span>
        <h3>Tout pour votre confort</h3>
      </div>

      <div className="luxury-amenities-grid">
        {apartment.amenities.map((amenity) => {
          const item = amenityIcons[amenity]

          if (!item) return null

          const Icon = item.Icon

          return (
            <div className="luxury-amenity" key={amenity}>
              <Icon size={22} strokeWidth={1.4} />
              <span>{item.label}</span>
            </div>
          )
        })}
      </div>

    </div>
  )}

  {/* Réservation */}
  {(apartment.airbnbUrl || apartment.whatsappUrl) && (
    <div className="luxury-booking">
      <span className="luxury-booking-label">
        VOTRE PROCHAIN SÉJOUR
      </span>

      {apartment.airbnbUrl && (
        <a
          href={apartment.airbnbUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-booking-link"
        >
          <span>Réserver sur Airbnb</span>
          <ArrowUpRight size={22} strokeWidth={1.5} />
        </a>
      )}

      {apartment.whatsappUrl && (
        <a
          href={apartment.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="luxury-whatsapp-link"
        >
          Contacter sur WhatsApp
          <ArrowUpRight size={18} />
        </a>
      )}
    </div>
  )}

</div>

      </div>
      {galleryIndex !== null && (
  <PhotoGallery
    images={apartment.images}
    initialIndex={galleryIndex}
    onClose={() => setGalleryIndex(null)}
  />
)}
    </div>
  )
}

export default ApartmentModal
