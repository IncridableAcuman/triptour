import apiClient from './api';
import type { ApiResponse, Destination } from '../types';

export interface DestinationFilterParams {
  category?: string;
  search?: string;
  maxPrice?: number;
}

export const fetchDestinations = async (
  params?: DestinationFilterParams
): Promise<Destination[]> => {
  const response = await apiClient.get<ApiResponse<Destination[]>>('/destinations', {
    params,
  });
  return response.data.data;
};

export const fetchDestinationById = async (id: string): Promise<Destination> => {
  const response = await apiClient.get<ApiResponse<Destination>>(`/destinations/${id}`);
  return response.data.data;
};

export const fetchDestinationCategories = async (): Promise<string[]> => {
  const response = await apiClient.get<ApiResponse<string[]>>('/destinations/categories');
  return response.data.data;
};
