import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import authService from '@/services/authService';

/**
 * useAuthStore – global authentication state managed by Zustand.
 *
 * The `persist` middleware serialises the store to localStorage automatically,
 * so the user stays logged in across page refreshes.
 *
 * Usage:
 *   const { user, login, logout } = useAuthStore();
 */
const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,

      /** Authenticate and persist the token */
      login: async (email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { token, user } = await authService.login(email, password);
          localStorage.setItem('auth_token', token);
          set({ user, token, isLoading: false });
        } catch (err) {
          set({ error: err?.response?.data?.message ?? 'Login failed', isLoading: false });
        }
      },

      /** Register then auto-login */
      register: async (name, email, password) => {
        set({ isLoading: true, error: null });
        try {
          const { token, user } = await authService.register(name, email, password);
          localStorage.setItem('auth_token', token);
          set({ user, token, isLoading: false });
        } catch (err) {
          set({ error: err?.response?.data?.message ?? 'Registration failed', isLoading: false });
        }
      },

      /** Clear auth state */
      logout: () => {
        authService.logout().catch(() => {}); // fire-and-forget
        localStorage.removeItem('auth_token');
        set({ user: null, token: null });
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage', // localStorage key
      partialize: (state) => ({ user: state.user, token: state.token }), // only persist these fields
    }
  )
);

export default useAuthStore;
