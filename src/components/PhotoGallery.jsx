
import { useEffect, useRef, useState } from 'react'
import './PhotoGallery.css'

function PhotoGallery({ images, initialIndex = 0, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const touchStartX = useRef(null)
  const lastScrollTime = useRef(0)

  const next = () => {
    setCurrentIndex(index => (index + 1) % images.length)
  }

  const previous = () => {
    setCurrentIndex(index =>
      (index - 1 + images.length) % images.length
    )
  }

  // Navigation au clavier
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setCurrentIndex(index => (index + 1) % images.length)
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        setCurrentIndex(index =>
          (index - 1 + images.length) % images.length
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [images.length])

  // Navigation avec la molette
  function handleWheel(event) {
    if (images.length <= 1) return

    event.preventDefault()

    const now = Date.now()

    // Évite de défiler trop vite
    if (now - lastScrollTime.current < 450) return

    if (Math.abs(event.deltaY) < 10) return

    lastScrollTime.current = now

    if (event.deltaY > 0) {
      next()
    } else {
      previous()
    }
  }

  // Navigation tactile
  function handleTouchStart(event) {
    touchStartX.current = event.touches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return

    const touchEndX = event.changedTouches[0].clientX
    const distance = touchStartX.current - touchEndX

    if (Math.abs(distance) > 50) {
      if (distance > 0) {
        next()
      } else {
        previous()
      }
    }

    touchStartX.current = null
  }

  if (!images.length) return null

  return (
    <div
      className="photo-gallery"
      role="dialog"
      aria-modal="true"
      aria-label="Galerie photos"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

      <button
        className="gallery-close"
        onClick={onClose}
        aria-label="Fermer la galerie"
      >
        ×
      </button>

      <button
        className="gallery-arrow"
        onClick={previous}
        aria-label="Photo précédente"
      >
        ‹
      </button>

      
<div
  className="gallery-image-container"
  onMouseDown={(event) => {
    if (
      event.target === event.currentTarget
    ) {
      onClose()
    }
  }}
>
  <img
    src={images[currentIndex]}
    alt={`Photo ${currentIndex + 1}`}
    draggable="false"
  />

  <span className="gallery-counter">
    {currentIndex + 1} / {images.length}
  </span>
</div>


      <button
        className="gallery-arrow"
        onClick={next}
        aria-label="Photo suivante"
      >
        ›
      </button>

    </div>
  )
}

export default PhotoGallery
