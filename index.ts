// Product Types
export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  category: string;
  price?: number;
  image?: string;
  availability: 'available' | 'limited' | 'unavailable';
  tags?: string[];
  specifications?: Record<string, string>;
}

// Crop Types
export interface Crop {
  id: number;
  name: string;
  icon: string;
  concerns: string[];
  solutions: string[];
  products: string[];
  season?: string;
  soilType?: string;
  waterRequirement?: string;
}

// Contact Form Data
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Crop Doctor Form Data
export interface CropDoctorFormData {
  crop: string;
  problem: string;
  description: string;
  image?: File;
  imageUrl?: string;
}

// Newsletter Subscription
export interface NewsletterSubscription {
  email: string;
  name?: string;
  crop?: string;
  marketingConsent: boolean;
}

// User Preferences
export interface UserPreferences {
  theme: 'light' | 'dark' | 'auto';
  language: 'en' | 'hi';
  notifications: boolean;
  emailUpdates: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Product Availability
export interface ProductAvailability {
  productId: number;
  productName: string;
  status: 'available' | 'limited' | 'unavailable';
  lastUpdated: Date;
  quantity?: number;
}

// Farm Information
export interface FarmInfo {
  name: string;
  location: string;
  size: number; // in acres
  soilType: string;
  crops: string[];
  irrigationType: string;
}

// Weather Data (if integrating weather API)
export interface WeatherData {
  temperature: number;
  humidity: number;
  rainfall: number;
  windSpeed: number;
  condition: string;
  forecastDays?: number;
}

// Crop Disease
export interface CropDisease {
  id: string;
  name: string;
  symptoms: string[];
  cause: string;
  prevention: string[];
  treatment: string[];
  affectedCrops: string[];
}

// Crop Pest
export interface CropPest {
  id: string;
  name: string;
  description: string;
  damage: string[];
  managementStrategies: string[];
  affectedCrops: string[];
  season: string;
}

// Article/Blog Post
export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishedAt: Date;
  updatedAt: Date;
  image?: string;
  tags: string[];
}

// Testimonial
export interface Testimonial {
  id: string;
  farmerName: string;
  location: string;
  cropType: string;
  rating: number;
  message: string;
  image?: string;
  date: Date;
}

// Order (if implementing e-commerce)
export interface Order {
  id: string;
  customerId: string;
  customerName: string;
  items: OrderItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  deliveryAddress: string;
}

export interface OrderItem {
  productId: number;
  productName: string;
  quantity: number;
  price: number;
  subtotal: number;
}

// Gallery Item
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  thumbnail?: string;
  category: string;
  date: Date;
}

// FAQ Item
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  views: number;
}

// Search Result
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'product' | 'article' | 'crop' | 'page';
  url: string;
  image?: string;
}

// Notification
export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

// Analytics Event
export interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: Date;
}

// Navigation Item
export interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: NavigationItem[];
}

// Feature/Testimonial Card
export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
}

// Statistics
export interface StatItem {
  id: string;
  label: string;
  value: number | string;
  suffix?: string;
  description?: string;
}

// Social Media Post
export interface SocialPost {
  id: string;
  content: string;
  platform: 'facebook' | 'instagram' | 'twitter' | 'whatsapp';
  image?: string;
  link?: string;
  scheduledAt?: Date;
  published: boolean;
}

// Service/Support Option
export interface SupportOption {
  icon: string;
  title: string;
  description: string;
  link?: string;
  action?: () => void;
}

// Filter Options
export interface FilterOptions {
  category?: string;
  crop?: string;
  price?: { min: number; max: number };
  availability?: 'available' | 'limited' | 'unavailable';
  tags?: string[];
}

// Pagination
export interface Pagination {
  page: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// Paginated Response
export interface PaginatedResponse<T> {
  data: T[];
  pagination: Pagination;
}

// Error
export interface AppError {
  code: string;
  message: string;
  statusCode: number;
  details?: Record<string, any>;
}

// Success
export interface AppSuccess<T> {
  success: true;
  data: T;
  message?: string;
}

// Result Type (Either Success or Error)
export type Result<T> = AppSuccess<T> | AppError;

// Global Window Types
declare global {
  interface Window {
    gtag?: any;
    dataLayer?: any;
  }
}

export default {
  Product,
  Crop,
  ContactFormData,
  CropDoctorFormData,
  NewsletterSubscription,
  UserPreferences,
  ApiResponse,
  ProductAvailability,
  FarmInfo,
  WeatherData,
  CropDisease,
  CropPest,
  Article,
  Testimonial,
  Order,
  OrderItem,
  GalleryItem,
  FAQItem,
  SearchResult,
  Notification,
  AnalyticsEvent,
  NavigationItem,
  FeatureCard,
  StatItem,
  SocialPost,
  SupportOption,
  FilterOptions,
  Pagination,
  PaginatedResponse,
  AppError,
  AppSuccess,
  Result,
};
