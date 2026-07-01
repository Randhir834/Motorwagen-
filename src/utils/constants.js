/**
 * App-wide constants.
 * Import individual exports where needed — avoid importing the whole module to keep bundles lean.
 */

export const APP_NAME = import.meta.env.VITE_APP_NAME ?? 'Moterview';

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

/** Contact Information */
export const CONTACT_INFO = {
  PHONE: '+917899741100',
  PHONE_DISPLAY: '+91 78997 41100',
  WHATSAPP: '917899741100', // without + for wa.me links
  EMAIL: 'info@motorwagenevolution.in',
  EMAIL_SUPPORT: 'support@motorwagenevolution.in',
  ADDRESS: 'K Narayanapura Main Rd, near K Narayanpura, Opp. De Grand Restaurant, Signal, Narayanapura, Bengaluru, Karnataka 560077',
};

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
