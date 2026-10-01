# Neeraj Prajapati Portfolio

A modern personal portfolio built with React, Vite, Express, and MongoDB for contact form submissions. The project is designed to stay lightweight, production-ready, and easy to deploy on Vercel for the frontend while keeping the API and database in a separate Node runtime.

## Project overview

This portfolio showcases:

- A responsive landing page and project portfolio
- About, skills, and contact sections
- Social and profile links
- Downloadable CV link
- Contact form that submits to a backend API and stores entries in MongoDB

## Features

- Responsive portfolio layout
- Fast Vite-based frontend build
- Express API for contact submissions
- MongoDB persistence for form entries
- Optional email notifications via Nodemailer
- Production-friendly configuration with environment variables

## Tech stack

- Frontend: React + Vite
- Styling: Custom CSS
- Backend: Node.js + Express
- Database: MongoDB + Mongoose
- Email: Nodemailer
- Deployment: Vercel (frontend), Node host for API (recommended)

## Project structure

```text
.
├── public/
│   └── resume/
├── server/
│   ├── index.js
│   └── models/
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Prerequisites

- Node.js 18+
- npm
- MongoDB Atlas account or another MongoDB deployment
- Optional SMTP provider if you want email notifications

## Installation

```bash
npm install
```

## Environment variables

Copy the example file and adjust values for your environment:

```bash
cp .env.example .env
```

Required variables:

```env
VITE_API_URL=
PORT=5000
MONGODB_URI=
CLIENT_ORIGIN=http://localhost:5173
MAIL_HOST=
MAIL_PORT=587
MAIL_SECURE=false
MAIL_USER=
MAIL_PASS=
MAIL_FROM=
NOTIFICATION_EMAIL=
```

Notes:

- Keep `VITE_API_URL` empty during local development when using the Vite proxy.
- Set `VITE_API_URL` only when the API is hosted elsewhere.
- Do not commit actual secrets or credentials.

## Development

Run the frontend and API in separate terminals:

```bash
npm run server:dev
npm run dev
```

## Production build

```bash
npm run build
```

## Deployment guide

### Frontend on Vercel

- Import this repository into Vercel.
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Add environment variables in Vercel under Project Settings > Environment Variables.
- Set `VITE_API_URL` to the deployed backend URL, such as `https://your-api.example.com`.

### Backend on a separate Node host

This project includes a separate Express API for form submissions and MongoDB storage. Because Vercel is optimized for static frontend hosting, the backend should usually be deployed separately on services such as Render, Railway, Fly.io, or another Node-compatible host.

The frontend should connect to the production API with `VITE_API_URL` and the backend should allow the frontend origin in `CLIENT_ORIGIN`.

## Git

```bash
git init
git add .
git commit -m "Prepare portfolio for production deployment"
```

## Notes

- The frontend is a Vite React app and does not require extra Vercel rewrites beyond the default static settings.
- The API is not a static site and should not be deployed as if it were the frontend.
- Keep `.env` out of version control and only commit `.env.example` with placeholder values.
