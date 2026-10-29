import apiClient from './api';
import type { ApiResponse, ContactPayload } from '../types';

export const submitContact = async (
  payload: ContactPayload
): Promise<ApiResponse<unknown>> => {
  const response = await apiClient.post<ApiResponse<unknown>>('/contact', payload);
  return response.data;
};
