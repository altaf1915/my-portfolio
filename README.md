# Portfolio Pro — Full-Stack Personal Portfolio

A polished, responsive, production-oriented portfolio website built with:

- React + Vite
- React Router
- Modern CSS (no UI framework required)
- Express.js REST API
- JSON-based persistence for contact messages
- SEO fundamentals
- Responsive/mobile-first design
- Theme switching
- Project filtering
- Contact form with backend validation
- Accessible navigation, forms, focus states, loading/error/empty states

## Project structure

```text
portfolio-pro/
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── robots.txt
│   │   ├── sitemap.xml
│   │   └── og-image.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── data/
│   │   ├── projects.json
│   │   └── messages.json
│   ├── src/
│   │   ├── server.js
│   │   └── store.js
│   ├── .env.example
│   └── package.json
├── .gitignore
└── README.md
```

## Run locally

Open two terminals.

### Terminal 1 — backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`.

### Terminal 2 — frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on the URL Vite prints, typically `http://localhost:5173`.

## Production build

```bash
cd frontend
npm install
npm run build

cd ../backend
npm install
npm start
```

When `frontend/dist` exists, the Express server serves it automatically.

## Environment variables

### backend/.env

```env
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

The frontend can also use:

```env
VITE_API_URL=http://localhost:5000/api
```

If not supplied, the frontend defaults to `/api` in production and `http://localhost:5000/api` during local development.

## API

### Health

`GET /api/health`

### Projects

`GET /api/projects`

### Contact

`POST /api/contact`

Example:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Portfolio inquiry",
  "message": "I would like to discuss a project."
}
```

The backend validates the request and stores messages in `backend/data/messages.json`.

## Customization

1. Replace the demo name and copy in `frontend/src/components/Hero.jsx` and `About.jsx`.
2. Replace project records in `backend/data/projects.json`.
3. Update email/social links in `Contact.jsx` and `Footer.jsx`.
4. Replace the canonical URL in `frontend/index.html`, `robots.txt`, and `sitemap.xml` before publishing.
5. Add a real domain and real social preview image for deployment.

## Verification checklist

- Frontend production build: `npm run build`
- Backend startup: `npm start`
- Project API: `GET /api/projects`
- Contact form: `POST /api/contact`
- Mobile navigation
- Theme toggle
- Project filters
- Empty/error/loading states
- Form validation
- SEO metadata
- robots.txt
- sitemap.xml
