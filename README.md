# Pulse Labs — Full-Stack Node.js SaaS Landing Page

A modern full-stack Node.js application with a premium SaaS landing page and live API health status.

## Project Structure

```
nodejs/
├── app.js
├── package.json
├── routes/
│   └── health.js
├── public/
│   ├── app.js
│   ├── index.html
│   └── styles.css
└── README.md
```

## Backend

- `app.js` — main Express app
- `routes/health.js` — `/api/health` route returning JSON

## Frontend

- `public/index.html` — SaaS landing page
- `public/styles.css` — modern responsive design
- `public/app.js` — API status fetch and dynamic UI update

## Run the Project

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   node app.js
   ```
3. Open in browser:
   ```
   http://localhost:3000
   ```

## API Endpoints

- `GET /` — serves the main landing page
- `GET /api/health` — returns `{ status: "ok", message: "server running" }`
