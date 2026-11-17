
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import './PhotoGallery.css'

function PhotoGallery({
  images,
  initialIndex = 0,
  onClose,
}) {
  const { t } = useLanguage()

  const [currentIndex, setCurrentIndex] =
    useState(initialIndex)

  const touchStartX = useRef(null)
  const lastScrollTime = useRef(0)

  const next = () => {
    setCurrentIndex(index =>
      (index + 1) % images.length
    )
  }

  const previous = () => {
    setCurrentIndex(index =>
      (index - 1 + images.length) % images.length
    )
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        setCurrentIndex(index =>
          (index + 1) % images.length
        )
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
      window.removeEventListener(
        'keydown',
        handleKeyDown
      )
    }
  }, [images.length])

  function handleWheel(event) {
    if (images.length <= 1) return

    const now = Date.now()

    if (now - lastScrollTime.current < 450) {
      return
    }

    if (Math.abs(event.deltaY) < 10) {
      return
    }

    lastScrollTime.current = now

    if (event.deltaY > 0) {
      next()
    } else {
      previous()
    }
  }

  function handleTouchStart(event) {
    touchStartX.current =
      event.touches[0].clientX
  }

  function handleTouchEnd(event) {
    if (touchStartX.current === null) return

    const touchEndX =
      event.changedTouches[0].clientX

    const distance =
      touchStartX.current - touchEndX

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
      aria-label={t.gallery.title}
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
        type="button"
        className="gallery-close"
        onClick={onClose}
        aria-label={t.gallery.close}
      >
        ×
      </button>

      <button
        type="button"
        className="gallery-arrow"
        onClick={previous}
        aria-label={t.gallery.previous}
      >
        ‹
      </button>

      <div
        className="gallery-image-container"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            onClose()
          }
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`${t.gallery.photo} ${currentIndex + 1}`}
          draggable="false"
        />

        <span className="gallery-counter">
          {currentIndex + 1} / {images.length}
        </span>
      </div>

      <button
        type="button"
        className="gallery-arrow"
        onClick={next}
        aria-label={t.gallery.next}
      >
        ›
      </button>
    </div>
  )
}

export default PhotoGallery
