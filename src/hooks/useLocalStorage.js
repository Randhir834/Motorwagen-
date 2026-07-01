import { useState } from 'react';

/**
 * useLocalStorage – useState wrapper that persists value in localStorage.
 *
 * @param {string} key          – localStorage key
 * @param {*}      initialValue – fallback when key is absent
 *
 * @example
 * const [theme, setTheme] = useLocalStorage('theme', 'light');
 */
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Allow value to be a function (same API as useState)
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(`useLocalStorage: error writing key "${key}"`, error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
