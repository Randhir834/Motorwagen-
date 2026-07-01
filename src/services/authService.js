import apiClient from './apiClient';

/**
 * authService – thin wrapper around auth-related API calls.
 * Swap the implementations here if the backend changes — no component code needs updating.
 */
const authService = {
  /**
   * Log in with email + password.
   * @returns {Promise<{ token: string, user: object }>}
   */
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }).then((res) => res.data),

  /**
   * Register a new account.
   * @returns {Promise<{ token: string, user: object }>}
   */
  register: (name, email, password) =>
    apiClient.post('/auth/register', { name, email, password }).then((res) => res.data),

  /**
   * Fetch the currently authenticated user profile.
   * @returns {Promise<object>}
   */
  getProfile: () => apiClient.get('/auth/me').then((res) => res.data),

  /** Invalidate the token server-side */
  logout: () => apiClient.post('/auth/logout'),
};

export default authService;
