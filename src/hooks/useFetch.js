import { useState, useEffect, useCallback } from 'react';

import apiClient from '@/services/apiClient';

/**
 * useFetch – generic data-fetching hook backed by the shared axios instance.
 *
 * @param {string}  url      – API endpoint, relative to VITE_API_BASE_URL
 * @param {object}  [config] – axios request config
 *
 * @returns {{ data, isLoading, error, refetch }}
 *
 * @example
 * const { data, isLoading, error } = useFetch('/interviews');
 */
function useFetch(url, config = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    if (!url) { return; }

    setIsLoading(true);
    setError(null);

    try {
      const response = await apiClient.get(url, config);
      setData(response.data);
    } catch (err) {
      setError(err?.response?.data?.message ?? err.message ?? 'Unknown error');
    } finally {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch: fetchData };
}

export default useFetch;
