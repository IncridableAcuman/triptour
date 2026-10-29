export interface Destination {
  id: string;
  title: string;
  country: string;
  location?: string;
  image: string;
  rating: number;
  price: number;
  category: string;
  duration: string;
  reviews: number;
  featured?: boolean;
  description?: string;
}

export interface TourPackage {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  duration: string;
  image: string;
  location: string;
  country?: string;
  description?: string;
  groupSize?: string;
  included?: string[];
}

export interface StatItem {
  value: number | string;
  suffix?: string;
  label: string;
}

export interface StatsData {
  happyTravelers: StatItem;
  destinations: StatItem;
  topReviews: StatItem;
  experience: StatItem;
  avgRating: StatItem;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  location: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface BookingPayload {
  fullName: string;
  email: string;
  phone: string;
  itemTitle?: string;
  itemType?: 'destination' | 'tour';
  date?: string;
  guests?: number;
  notes?: string;
}

export interface BookingResult {
  id: string;
  bookingReference: string;
  fullName: string;
  email: string;
  phone: string;
  itemTitle: string;
  itemType: string;
  date: string;
  guests: number;
  status: string;
  createdAt: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  count?: number;
}
