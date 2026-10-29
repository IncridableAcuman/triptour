# 🌍 TripTour — Luxury Travel & Tour Booking Platform

A modern, responsive, and full-stack travel & tour booking web application built with **React, TypeScript, Vite, Tailwind CSS v4, Zustand, TanStack Query** on the frontend and **Node.js, Express** on the backend.

---

## ✨ Features

- 🏖️ **Modern Glassmorphic UI**: Ultra-clean, premium travel experience with dark/light mode toggle.
- 📱 **Fully Responsive**: Flawless experience across mobile, tablet, and desktop screens.
- ⚡ **Full-Stack Node.js & Express API**: Modular RESTful architecture with endpoints for destinations, tours, stats, gallery, bookings, contact inquiries, and newsletters.
- 🔍 **Interactive Filtering & Search**: Instant filter by category, destination search keyword, and dynamic price sliders.
- 📅 **VIP Reservation System**: Direct modal booking integration connected with backend API (`/api/bookings`).
- 📬 **Live Contact Inquiries & Newsletter**: Form validation via React Hook Form & Zod, integrated with real-time feedback via React-Toastify.
- 🎨 **Framer Motion & Smooth Cursor**: Smooth page micro-interactions, responsive mobile menu drawer, and custom animated cursor.
- 🌐 **Multi-Language Ready**: Internationalization support (English / Uzbek).

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Data Fetching / Caching**: TanStack React Query + Axios
- **Form Handling & Validation**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Toastify
- **Carousels**: Swiper

### Backend
- **Platform**: Node.js
- **Framework**: Express (v5)
- **Middleware**: CORS, Express JSON Parser, Centralized Error Handling, Logging
- **Validation**: Express Validator & Schema Checking
- **Data**: In-memory mock database & persistence structures

---

## 📂 Project Structure

```bash
triptour/
├── backend/
│   ├── src/
│   │   ├── controllers/      # Destination, Tour, Booking, Contact, Stats, Gallery, Newsletter
│   │   ├── data/             # Initial datasets & in-memory stores
│   │   ├── middlewares/      # Error handler & 404 middlewares
│   │   ├── routes/           # Express router endpoints
│   │   ├── app.js            # Express app configuration
│   │   └── server.js         # HTTP server listener
│   ├── index.js              # Entrypoint
│   ├── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/       # Navbar, Footer, BookingModal, AnimatedCursor
│   │   ├── hooks/            # useDestinations, useTours, useStats, useGallery
│   │   ├── pages/            # Home, Destinations, Tours, About, Contact
│   │   ├── services/         # Axios API client & services
│   │   ├── store/            # Zustand app state (theme, language, modal)
│   │   ├── types/            # TypeScript interfaces & types
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── vite.config.ts
│   └── Dockerfile
├── docker-compose.yaml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm or yarn

---

### 1. Run the Backend API

```bash
cd backend
npm install
npm run dev
```

The API will be available at: `http://localhost:5000`

#### Available API Endpoints:
- `GET /api/health` — API health check
- `GET /api/destinations` — Get all destinations (supports `?category=...&search=...&maxPrice=...`)
- `GET /api/destinations/:id` — Get destination details
- `GET /api/destinations/categories` — Get destination categories
- `GET /api/tours` — Get all tour packages (supports `?category=...&search=...&maxPrice=...`)
- `GET /api/tours/:id` — Get tour package details
- `GET /api/tours/categories` — Get tour categories
- `GET /api/stats` — Platform metrics & experience numbers
- `GET /api/gallery` — Shared visual journey moments
- `POST /api/contact` — Send contact/inquiry message
- `POST /api/bookings` — Create a travel booking reservation
- `POST /api/newsletter` — Subscribe to Secret Escape Club newsletter

---

### 2. Run the Frontend Application

Open a new terminal window:

```bash
cd frontend
npm install
npm run dev
```

Visit in your browser: `http://localhost:5173`

---

### 3. Run with Docker Compose

```bash
docker-compose up --build
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:5000`

---

## 👨‍💻 Author

**Izzat Abdusharipov**
- GitHub: [IncridableAcuman](https://github.com/IncridableAcuman)
