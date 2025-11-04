import { useState } from 'react';

interface UploadResponse {
  success: boolean;
  message: string;
  imageUrl?: string;
}

interface UploadState {
  isLoading: boolean;
  error: string | null;
  imageUrl: string | null;
}

export const useImageUpload = () => {
  const [uploadState, setUploadState] = useState<UploadState>({
    isLoading: false,
    error: null,
    imageUrl: null
  });

  const uploadImage = async (file: File): Promise<void> => {
    if (!file) {
      setUploadState(prev => ({
        ...prev,
        error: 'No se ha seleccionado ningún archivo'
      }));
      return;
    }

    try {
      setUploadState(prev => ({
        ...prev,
        isLoading: true,
        error: null
      }));

      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('TU_URL_API/upload', {
        method: 'POST',
        body: formData,
      });

      const data: UploadResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error al cargar la imagen');
      }

      setUploadState({
        isLoading: false,
        error: null,
        imageUrl: data.imageUrl || null
      });
    } catch (error) {
      setUploadState({
        isLoading: false,
        error: error instanceof Error ? error.message : 'Error desconocido',
        imageUrl: null
      });
    }
  };

  const resetUploadState = () => {
    setUploadState({
      isLoading: false,
      error: null,
      imageUrl: null
    });
  };

  return {
    ...uploadState,
    uploadImage,
    resetUploadState
  };
};
