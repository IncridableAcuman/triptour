import { useQuery } from '@tanstack/react-query';
import { fetchTours, fetchTourCategories, type TourFilterParams } from '../services/tourService';

export const useTours = (params?: TourFilterParams) => {
  return useQuery({
    queryKey: ['tours', params],
    queryFn: () => fetchTours(params),
  });
};

export const useTourCategories = () => {
  return useQuery({
    queryKey: ['tour-categories'],
    queryFn: fetchTourCategories,
  });
};
