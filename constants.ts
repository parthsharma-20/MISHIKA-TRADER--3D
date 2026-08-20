// Business Information
export const BUSINESS = {
  name: 'MISHIKA TRADER',
  tagline: 'Better Inputs. Better Guidance. Better Farming.',
  positioning: 'Your Digital Agriculture Partner in Hapur',
  foundedYear: 2024,
} as const;

// Contact Information
export const CONTACT = {
  phone: '+91-8958083590',
  phoneLink: 'tel:+918958083590',
  whatsapp: '+91-8958083590',
  whatsappLink: 'https://wa.me/918958083590',
  email: 'info@mishikatrader.com',
  emailLink: 'mailto:info@mishikatrader.com',
} as const;

// Location Information
export const LOCATION = {
  address: 'Hapur Shri Nagar Colony',
  city: 'Hapur',
  state: 'Uttar Pradesh',
  country: 'India',
  zipCode: '',
  coordinates: {
    lat: 28.7041,
    lng: 77.1025, // Approximate for Hapur, UP
  },
} as const;

// Colors
export const COLORS = {
  primary: '#2d5016',        // Deep agricultural green
  secondary: '#4a7c3a',      // Fresh natural green
  accent: '#d4af37',         // Subtle gold
  earth: '#8b7355',          // Earthy brown
  white: '#ffffff',
  black: '#000000',
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
} as const;

// Product Categories
export const PRODUCTS = {
  categories: [
    {
      id: 1,
      name: 'Premium Fertilizers',
      slug: 'fertilizers',
      description: 'NPK, DAP, Urea & specialized formulations',
    },
    {
      id: 2,
      name: 'Seeds & Varieties',
      slug: 'seeds',
      description: 'Certified hybrid & high-yield varieties',
    },
    {
      id: 3,
      name: 'Agro Chemicals',
      slug: 'agro-chemicals',
      description: 'Pesticides, insecticides & crop protection',
    },
    {
      id: 4,
      name: 'Herbicides',
      slug: 'herbicides',
      description: 'Selective & non-selective weed control',
    },
    {
      id: 5,
      name: 'Micronutrients',
      slug: 'micronutrients',
      description: 'Zinc, Iron, Boron & trace elements',
    },
    {
      id: 6,
      name: 'Bio-Fertilizers',
      slug: 'bio-fertilizers',
      description: 'Natural & organic crop inputs',
    },
  ],
} as const;

// Crop Types
export const CROPS = {
  types: [
    { id: 1, name: 'Wheat', icon: '🌾' },
    { id: 2, name: 'Rice', icon: '🍚' },
    { id: 3, name: 'Potato', icon: '🥔' },
    { id: 4, name: 'Sugarcane', icon: '🌱' },
    { id: 5, name: 'Mustard', icon: '🌻' },
    { id: 6, name: 'Vegetables', icon: '🥕' },
  ],
} as const;

// Navigation Links
export const NAVIGATION = [
  { name: 'Home', href: '/#home' },
  { name: 'Products', href: '/#products' },
  { name: 'Crops', href: '/#crops' },
  { name: 'Farmer Support', href: '/#support' },
  { name: 'Knowledge', href: '/#knowledge' },
  { name: 'About', href: '/#about' },
  { name: 'Contact', href: '/#contact' },
] as const;

// Social Media
export const SOCIAL_MEDIA = {
  whatsapp: 'https://wa.me/918958083590',
  instagram: '#', // Update with actual Instagram handle
  facebook: '#', // Update with actual Facebook page
  youtube: '#', // Update with actual YouTube channel
} as const;

// WhatsApp Message Templates
export const WHATSAPP_TEMPLATES = {
  productAvailability: 'Hello MISHIKA TRADER, I want to check the availability of [PRODUCT].',
  cropGuidance: 'Hello MISHIKA TRADER, I need guidance regarding my [CROP] crop.',
  photoSharing: 'Hello MISHIKA TRADER, I want to send a photo of my crop problem.',
  generalInquiry: 'Hello MISHIKA TRADER, I want to know more about your products and services.',
  general: 'Hello MISHIKA TRADER!',
} as const;

// Site Metadata
export const SITE_META = {
  title: 'MISHIKA TRADER | Premium Agricultural Solutions in Hapur',
  description: 'MISHIKA TRADER - Premium agricultural solutions, fertilizers, seeds, agro chemicals & expert crop guidance for farmers in Hapur, Uttar Pradesh.',
  keywords: [
    'fertilizers',
    'agricultural solutions',
    'seeds',
    'agro chemicals',
    'crop protection',
    'Hapur',
    'farmer support',
    'micronutrients',
    'farming guidance',
  ],
  author: 'MISHIKA TRADER',
  url: 'https://mishikatrader.com',
  image: '/og-image.jpg',
  locale: 'en_IN',
} as const;

// Feature Flags
export const FEATURES = {
  enableCropDoctor: true,
  enable3D: true,
  enableWhatsApp: true,
  enableAnalytics: true,
  enableBlog: false,
  enableShop: false,
  enablePayments: false,
} as const;

// Animations
export const ANIMATIONS = {
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
  },
  delay: {
    micro: 0.05,
    small: 0.1,
    medium: 0.2,
    large: 0.3,
  },
  easing: {
    default: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    ease: 'ease-in-out',
  },
} as const;

// Breakpoints (Tailwind default)
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// API Endpoints (if using backend)
export const API_ENDPOINTS = {
  base: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  products: '/api/products',
  crops: '/api/crops',
  contact: '/api/contact',
  newsletter: '/api/newsletter',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  networkError: 'Network error. Please check your connection and try again.',
  validationError: 'Please fill in all required fields.',
  submitError: 'Something went wrong. Please try again later.',
  fileError: 'File size should be less than 5MB.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  submitted: 'Your message has been sent successfully!',
  subscribed: 'Thank you for subscribing!',
  uploaded: 'File uploaded successfully!',
} as const;

// Storage Keys (for localStorage)
export const STORAGE_KEYS = {
  userPreferences: 'mishika_user_preferences',
  theme: 'mishika_theme',
  language: 'mishika_language',
} as const;

// Google Analytics
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

// Trust Badges
export const TRUST_BADGES = [
  '✓ Genuine Products',
  '✓ Farmer-Focused Support',
  '✓ Easy Availability Check',
  '✓ Local Agricultural Service',
] as const;

// Support Options
export const SUPPORT_OPTIONS = [
  {
    icon: '👨‍🌾',
    title: 'Agriculture Expert',
    description: 'Talk to our crop specialists',
  },
  {
    icon: '📱',
    title: 'WhatsApp Support',
    description: 'Quick chat on WhatsApp',
  },
  {
    icon: '📦',
    title: 'Product Availability',
    description: 'Check real-time stock',
  },
  {
    icon: '🚚',
    title: 'Local Service',
    description: 'Fast delivery in Hapur',
  },
  {
    icon: '🌱',
    title: 'Crop Guidance',
    description: 'Expert farming advice',
  },
  {
    icon: '📍',
    title: 'Hapur Store',
    description: 'Visit us in person',
  },
] as const;

// Availability Status
export const AVAILABILITY_STATUS = {
  available: { label: '🟢 Available', color: 'green' },
  limited: { label: '🟡 Limited', color: 'yellow' },
  unavailable: { label: '🔴 Unavailable', color: 'red' },
} as const;

// Disclaimer Text
export const DISCLAIMERS = {
  cropDoctor: 'Photo-based information is for preliminary guidance only. Final diagnosis and product recommendation should be verified by a qualified agriculture professional.',
  products: 'MISHIKA TRADER provides agricultural products and guidance for informational purposes. Always consult qualified agriculture professionals before applying any pesticides or agrochemicals.',
} as const;

export default {
  BUSINESS,
  CONTACT,
  LOCATION,
  COLORS,
  PRODUCTS,
  CROPS,
  NAVIGATION,
  SOCIAL_MEDIA,
  WHATSAPP_TEMPLATES,
  SITE_META,
  FEATURES,
  ANIMATIONS,
  BREAKPOINTS,
  API_ENDPOINTS,
  ERROR_MESSAGES,
  SUCCESS_MESSAGES,
  STORAGE_KEYS,
  GA_ID,
  TRUST_BADGES,
  SUPPORT_OPTIONS,
  AVAILABILITY_STATUS,
  DISCLAIMERS,
};
