import { useQuery } from '@tanstack/react-query';

export interface TourPackage {
  id: string;
  title: string;
  country: string;
  rating: number;
  price: number;
  image: string;
}

const fetchTourPackages = async (): Promise<TourPackage[]> => {
  // Симулируем задержку сети в 1.5 секунды
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return [
    { id: '1', title: 'Paris Eternal', country: 'France', rating: 4.9, price: 1290, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80' },
    { id: '2', title: 'Futuristic Dubai', country: 'UAE', rating: 4.8, price: 1850, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
    { id: '3', title: 'Mystical Bali', country: 'Indonesia', rating: 4.9, price: 850, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=600&q=80' },
  ];
};

export const useTours = () => {
  return useQuery({
    queryKey: ['tours'],
    queryFn: fetchTourPackages,
  });
};