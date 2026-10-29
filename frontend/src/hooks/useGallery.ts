import { useQuery } from '@tanstack/react-query';
import { fetchGallery } from '../services/galleryService';

export const useGallery = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: fetchGallery,
  });
};
