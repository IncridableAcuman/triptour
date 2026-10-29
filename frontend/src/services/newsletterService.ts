import apiClient from './api';
import type { ApiResponse } from '../types';

export const subscribeNewsletter = async (
  email: string
): Promise<ApiResponse<unknown>> => {
  const response = await apiClient.post<ApiResponse<unknown>>('/newsletter', { email });
  return response.data;
};
