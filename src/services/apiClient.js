import axios from 'axios';

/**
 * apiClient – pre-configured Axios instance.
 *
 * All API calls in the app should use this instance so that:
 *  - The base URL is read from the environment variable once.
 *  - Auth tokens can be injected globally via the request interceptor.
 *  - Error normalisation is centralised in the response interceptor.
 */
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15_000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/* ── Request interceptor ─────────────────────────────────────────────── */
apiClient.interceptors.request.use(
  (config) => {
    // Attach bearer token if present (e.g. stored in localStorage/zustand)
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

/* ── Response interceptor ────────────────────────────────────────────── */
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired – clear local auth state and redirect to login
      localStorage.removeItem('auth_token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
