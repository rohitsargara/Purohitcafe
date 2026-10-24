export type PageId = 'home' | 'about' | 'menu' | 'gallery' | 'contact';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface PlantInfo {
  id: string;
  name: string;
  scientificName?: string;
  description: string;
  iconName: string;
  benefits: string[];
}

export interface StrengthFeature {
  title: string;
  image: string;
  icon: string;
  delay: string;
}

export interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'ambience' | 'greenery' | 'food';
}

export interface MenuCard {
  id: string;
  title: string;
  category: 'drinks' | 'cafe';
  src: string;
}
