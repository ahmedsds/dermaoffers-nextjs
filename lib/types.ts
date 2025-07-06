// types.ts

import { Star, MapPin } from 'lucide-react';

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
  content: string;
  tags?: string[];
  featured?: boolean;
  status: 'published' | 'draft';
}

export interface ClinicService {
  id: string;
  name: string;
  doctorName: string;
  speciality: string;
  description: string;
  about: string;
  services: string[];
  location: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  website?: string;
  facebook?: string;
  instagram?: string;
  workingHours: {
    [key: string]: { open: string; close: string; closed: boolean };
  };
  images: {
    hero: string;
    gallery: string[];
    beforeAfter: { before: string; after: string; title: string }[];
  };
  testimonials: {
    name: string;
    rating: number;
    comment: string;
    date: string;
    service: string;
  }[];
  specialOffer?: {
    title: string;
    description: string;
    originalPrice: string;
    discountPrice: string;
    discount: string;
    validUntil: string;
    enabled: boolean;
  };
  features: string[];
  googleMapsUrl?: string;
  rating: number;
  reviewsCount: number;
  yearsExperience: number;
  patientsCount: number;
  successRate: string;
}