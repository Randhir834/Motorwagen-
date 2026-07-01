/**
 * App-wide constants.
 * Import individual exports where needed — avoid importing the whole module to keep bundles lean.
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'Moterview';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

/** Route path constants – use these instead of raw strings in <Link> / navigate() */
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
};

/** Pagination defaults */
export const PAGE_SIZE = 20;
