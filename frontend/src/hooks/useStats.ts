import { useQuery } from '@tanstack/react-query';
import { fetchStats } from '../services/statsService';

export const useStats = () => {
  return useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats,
  });
};
