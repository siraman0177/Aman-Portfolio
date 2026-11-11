# Aman Singh Patel — Portfolio

A React + Vite frontend and Express API, redesigned around the supplied dark blue/cyan reference direction.

## Requirements
- Node.js 20.6+ (Node 22 recommended)
- npm

## Run locally
Open two terminals.

**Terminal 1 — API**
```bash
cd server
npm install
npm run dev
```
API: http://localhost:5001

**Terminal 2 — frontend**
```bash
cd client
npm install
npm run dev
```
Frontend: http://localhost:5173

## Resume and profile assets
- The supplied profile image is at `client/public/profile.png`.
- The supplied resume PDF is at `server/assets/Aman-Singh-Patel-Resume.pdf`.
- View resume: `http://localhost:5001/api/resume/view`
- Download resume: `http://localhost:5001/api/resume/download`

## API
- `GET /api/health`
- `GET /api/profile`
- `GET /api/projects`
- `GET /api/skills`
- `GET /api/resume/view`
- `GET /api/resume/download`

## Content accuracy
The portfolio includes only the three projects in the supplied resume. No project repository/demo URLs, fabricated metrics, or unverified claims are displayed. Technology list follows the supplied resume; icons are official package brand icons where available and neutral category icons otherwise.
