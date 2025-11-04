import { useState, useEffect } from 'react';

interface Image {
  id: string;
  url: string;
  title?: string;
  createdAt?: string;
}

interface FetchState {
  images: Image[];
  isLoading: boolean;
  error: string | null;
}

export const useGetImages = () => {
  const [fetchState, setFetchState] = useState<FetchState>({
    images: [],
    isLoading: false,
    error: null
  });

  const fetchImages = async (): Promise<void> => {
    try {
      setFetchState(prev => ({
        ...prev,
        isLoading: true,
        error: null
      }));

      const response = await fetch('TU_URL_API/images', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Si necesitas headers adicionales (como token), añádelos aquí
          // 'Authorization': `Bearer ${token}`,
        }
      });

      if (!response.ok) {
        throw new Error('Error al obtener las imágenes');
      }

      const data = await response.json();
      
      setFetchState({
        images: data,
        isLoading: false,
        error: null
      });
    } catch (error) {
      setFetchState({
        images: [],
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      });
    }
  };

  const refreshImages = () => {
    fetchImages();
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return {
    ...fetchState,
    refreshImages
  };
};
