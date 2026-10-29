import apiClient from './api';
import type { ApiResponse, StatsData } from '../types';

export const fetchStats = async (): Promise<StatsData> => {
  const response = await apiClient.get<ApiResponse<StatsData>>('/stats');
  return response.data.data;
};
