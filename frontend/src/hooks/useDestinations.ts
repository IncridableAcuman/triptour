import { useQuery } from '@tanstack/react-query';
import {
  fetchDestinations,
  fetchDestinationCategories,
  type DestinationFilterParams,
} from '../services/destinationService';

export const useDestinations = (params?: DestinationFilterParams) => {
  return useQuery({
    queryKey: ['destinations', params],
    queryFn: () => fetchDestinations(params),
  });
};

export const useDestinationCategories = () => {
  return useQuery({
    queryKey: ['destination-categories'],
    queryFn: fetchDestinationCategories,
  });
};
