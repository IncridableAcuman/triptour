import apiClient from './api';
import type { ApiResponse, BookingPayload, BookingResult } from '../types';

export const submitBooking = async (
  payload: BookingPayload
): Promise<ApiResponse<BookingResult>> => {
  const response = await apiClient.post<ApiResponse<BookingResult>>('/bookings', payload);
  return response.data;
};
