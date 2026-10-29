import apiClient from './api';
import type { ApiResponse, GalleryItem } from '../types';

export const fetchGallery = async (): Promise<GalleryItem[]> => {
  const response = await apiClient.get<ApiResponse<GalleryItem[]>>('/gallery');
  return response.data.data;
};
