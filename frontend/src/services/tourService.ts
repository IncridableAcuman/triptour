import apiClient from './api';
import type { ApiResponse, TourPackage } from '../types';

export interface TourFilterParams {
  category?: string;
  search?: string;
  maxPrice?: number;
}

export const fetchTours = async (params?: TourFilterParams): Promise<TourPackage[]> => {
  const response = await apiClient.get<ApiResponse<TourPackage[]>>('/tours', {
    params,
  });
  return response.data.data;
};

export const fetchTourById = async (id: string): Promise<TourPackage> => {
  const response = await apiClient.get<ApiResponse<TourPackage>>(`/tours/${id}`);
  return response.data.data;
};

export const fetchTourCategories = async (): Promise<string[]> => {
  const response = await apiClient.get<ApiResponse<string[]>>('/tours/categories');
  return response.data.data;
};
