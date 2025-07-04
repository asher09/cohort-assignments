A full-stack blog platform built with:
- **Frontend:** React + Vite + TailwindCSS
- **Backend:** Cloudflare Workers (Hono, Prisma, PostgreSQL)
- **Common:** Shared types and validation with Zod

---

## Project Structure

```
blog-app/
│
├── backend/   # Cloudflare Worker API (Hono, Prisma)
├── frontend/  # React + Vite client
├── common/    # Shared types and validation (Zod)
```

---

## Setup

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd blog-app
```

### 2. Install dependencies

Install dependencies for all packages:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../common && npm install
```

---

## Development

### Backend (Cloudflare Worker)

- Configure your database in `backend/.env`
- Start the backend locally:

```bash
cd backend
npm install
npm run dev
```

- Deploy to Cloudflare:

```bash
npm run deploy
```

### Frontend (React + Vite)

- Start the frontend dev server:

```bash
cd frontend
npm install
npm run dev
```

- The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

### Common

- Contains shared Zod schemas and types.
- If you update types, re-publish or re-link the package for backend/frontend to pick up changes.

---

## Environment Variables

- **Backend:**  
  - `DATABASE_URL` – PostgreSQL connection string  
  - `JWT_SECRET` – Secret for JWT signing

- **Frontend:**  
  - Edit `src/config.ts` to point to your deployed backend URL.

---

## Scripts

### Backend

- `npm run dev` – Start Cloudflare Worker locally
- `npm run deploy` – Deploy to Cloudflare
- `npm run cf-typegen` – Generate Cloudflare types

### Frontend

- `npm run dev` – Start Vite dev server
- `npm run build` – Build for production
- `npm run preview` – Preview production build

---

