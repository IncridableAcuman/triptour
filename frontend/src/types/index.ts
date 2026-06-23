export interface Destination {
  id: string;
  title: string;
  country: string;
  image: string;
  rating: number;
  price: number;
  category: 'Popular' | 'Beach' | 'Mountain' | 'Cultural' | 'Luxury';
  duration: string;
  reviews: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  comment: string;
  rating: number;
}