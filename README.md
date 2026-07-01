# Moterview

Interview preparation platform built with **React 18 + Vite 5**.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template and fill in values
cp .env.example .env

# 3. Start the dev server (opens http://localhost:3000)
npm run dev
```

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across all JS/JSX files |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format all files with Prettier |

---

## Project Structure

```
src/
├── assets/          Static assets (images, fonts) imported by components
├── components/      Reusable UI components (each in its own folder)
│   ├── Button/
│   ├── Card/
│   ├── Footer/
│   └── Navbar/
├── hooks/           Custom React hooks
│   ├── useDebounce.js
│   ├── useFetch.js
│   └── useLocalStorage.js
├── layouts/         Page shell components (Navbar + Outlet + Footer)
│   └── MainLayout/
├── pages/           Route-level page components
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   └── NotFoundPage.jsx
├── services/        API layer (Axios client + service modules)
│   ├── apiClient.js
│   └── authService.js
├── store/           Zustand global state stores
│   └── useAuthStore.js
├── styles/          Global CSS (design tokens, resets, utilities)
│   └── global.css
├── utils/           Pure helper functions
│   ├── constants.js
│   ├── formatDate.js
│   └── validators.js
├── App.jsx          Route table
└── main.jsx         ReactDOM entry point
```

---

## Tech Stack

| Layer | Library |
|---|---|
| UI | React 18 |
| Bundler | Vite 5 |
| Routing | React Router v6 |
| Global state | Zustand 4 |
| HTTP client | Axios |
| Styling | CSS Modules + CSS custom properties |
| Linting | ESLint 8 |
| Formatting | Prettier 3 |

---

## Environment Variables

All variables must be prefixed with `VITE_` to be exposed to the client bundle.

| Variable | Description |
|---|---|
| `VITE_API_BASE_URL` | Backend REST API base URL |
| `VITE_APP_NAME` | Application display name |

Copy `.env.example` → `.env` and fill in real values. Never commit `.env`.

---

## Adding a New Page

1. Create `src/pages/MyPage.jsx` (and `MyPage.module.css`).
2. Add the route in `src/App.jsx`:
   ```jsx
   <Route path="/my-page" element={<MyPage />} />
   ```
3. Add a nav link in `src/components/Navbar/Navbar.jsx` if needed.

## Adding a New API Service

1. Create `src/services/myService.js`.
2. Use the shared `apiClient` instance — it handles auth headers and 401 redirects automatically.

---

## Code Style

- **CSS Modules** for component styles — no global class name collisions.
- **CSS custom properties** (`var(--color-primary)`) for design tokens — single source of truth in `global.css`.
- **Absolute imports** via the `@/` alias (maps to `src/`) — no `../../..` path hell.
