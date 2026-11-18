
# 🏡 Résidence Lydia — Apartment Rental Website

A modern, elegant, and fully responsive apartment rental website developed for **Résidence Lydia**, a private residence offering three apartments in **Tlemcen, Algeria**.

Built with React, the website provides a premium browsing experience with interactive apartment galleries, bilingual content, Airbnb integration, and a refined visual identity.

## 🌐 Live Website

[Visit Résidence Lydia](https://residence-lydia.wb23.workers.dev)

## ✨ Features

### 🏠 Apartment Listings
- Three apartments with dedicated information
- Interactive image galleries and fullscreen photo viewer
- Capacity, bedrooms, beds, and bathroom details
- Amenities and house rules
- Direct Airbnb booking links
- WhatsApp contact integration

### ⭐ Airbnb Reviews
- Individual apartment ratings
- Review counts from Airbnb listings
- Direct links to Airbnb guest reviews
- Special handling for newly listed properties

*Airbnb ratings are manually maintained and may change over time.*

### 🌍 Bilingual Experience
- French and English support
- Instant language switching without reloading
- Language preference saved locally
- Translated navigation, apartment details, and content

### 📱 Responsive Design
- Mobile-first adaptations
- Animated hamburger navigation
- Responsive apartment cards
- Touch-friendly interactions
- Smooth scrolling and reveal animations

### ⚡ Performance
- Optimized WebP images
- Lazy-loaded apartment photographs
- SEO metadata and structured data
- Social sharing metadata
- Production build powered by Vite

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| React | User interface |
| JavaScript (ES6+) | Application logic |
| Vite | Build tool and development server |
| CSS3 | Styling, responsive layouts, animations |
| Lucide React | Icons |
| React Context API | Language management |
| Git & GitHub | Version control |
| Cloudflare Workers | Hosting and deployment |

## 📁 Project Structure

```text
residence-lydia/
├── public/
│   ├── images/
│   │   ├── apartments/
│   │   ├── tlemcen/
│   │   ├── hero.webp
│   │   └── logo.svg
│   └── robots.txt
├── scripts/
│   └── optimize-images.mjs
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Apartments.jsx
│   │   ├── ApartmentModal.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── About.jsx
│   │   ├── Reviews.jsx
│   │   ├── Tlemcen.jsx
│   │   ├── Contact.jsx
│   │   └── Reveal.jsx
│   ├── data/
│   │   ├── apartments.js
│   │   └── amenities.js
│   ├── i18n/
│   │   ├── LanguageContext.jsx
│   │   └── translations.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/walidbenyelles/residence-lydia.git
cd residence-lydia
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

### Image Optimization

The project includes an image optimization script using Sharp:

```bash
node scripts/optimize-images.mjs
```

It generates optimized WebP versions of supported images.

## 🎨 Design Philosophy

Résidence Lydia follows a minimalist, luxury-inspired design approach.

The interface combines:

- Charcoal black — `#171717`
- Champagne gold — `#C5A46D`
- Warm cream — `#F8F6F2`
- Elegant serif typography
- Generous whitespace
- Subtle animations and transitions

The objective is to create a welcoming digital experience that reflects the residence's identity while keeping navigation intuitive and accessible.

## 🔗 Integrations

**Airbnb**

Each apartment links to its corresponding Airbnb listing, allowing guests to view availability, current pricing, and booking conditions.

**WhatsApp**

Guests can contact the residence directly through WhatsApp with a prefilled message in their selected language.

**Google Maps**

Visitors can explore the residence's neighborhood and discover attractions around Tlemcen.

## 📈 Future Improvements

- Further accessibility enhancements
- Improved image loading and caching
- Advanced multilingual SEO
- Automated availability integration, subject to platform access
- Additional guest feedback features

## 👨‍💻 Development

Developed as a real-world freelance web development project, covering frontend architecture, component design, responsive styling, multilingual interfaces, third-party integrations, and deployment.

**Developer:** [Walid Ben-Yelles](https://github.com/walidbenyelles)

## 📄 Project Notice

This website was developed for Résidence Lydia.

Property information, branding, photographs, and accommodation details belong to their respective owners.

The repository is provided for project demonstration and portfolio purposes. No license for third-party assets is granted.

---

Made with React, creativity, and attention to detail.
