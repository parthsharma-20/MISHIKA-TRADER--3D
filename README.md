# MISHIKA TRADER - Premium 3D Agricultural Website

![MISHIKA TRADER Logo](./public/og-image.jpg)

**"Better Inputs. Better Guidance. Better Farming."**

A modern, production-ready 3D agricultural website for MISHIKA TRADER, built with Next.js 14, React, Three.js, and Tailwind CSS.

---

## 🌾 Overview

MISHIKA TRADER is a digital agriculture partner serving farmers in Hapur, Uttar Pradesh, India. This website provides:

✅ **3D Product Showcase** - Interactive 3D product visualization  
✅ **Crop Solutions** - Crop-specific guidance and products  
✅ **Crop Doctor** - Photo-based crop problem analysis  
✅ **Real-time Availability** - Live product stock status  
✅ **Farmer Support** - Multiple support channels  
✅ **Knowledge Center** - Agricultural articles and tips  
✅ **WhatsApp Integration** - Direct farmer communication  

---

## 🚀 Quick Start

### Prerequisites
- Node.js v18 or later
- npm v9 or later

### Installation

```bash
# 1. Clone or extract the project
cd mishika-trader-3d

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Edit .env.local and add your business information

# 4. Start development server
npm run dev

# 5. Open in browser
# Visit: http://localhost:3000
```

---

## 📁 Project Structure

```
mishika-trader-3d/
├── pages/                 # Next.js pages
│   ├── index.tsx         # Main homepage
│   └── _app.tsx          # App wrapper with GA4
│
├── components/           # React components
│   ├── Hero3D.tsx        # 3D hero section
│   ├── Products3D.tsx    # 3D product showcase
│   ├── CropSolutions.tsx # Crop solutions cards
│   ├── CropDoctor.tsx    # Photo upload tool
│   ├── FromSoilToHarvest.tsx  # Journey timeline
│   ├── Navbar.tsx        # Header navigation
│   ├── MobileBottomNav.tsx    # Mobile menu
│   ├── FarmerSupport.tsx # Support options
│   ├── TodayAvailability.tsx  # Stock status
│   ├── KnowledgeCenter.tsx    # Articles
│   ├── AboutSection.tsx  # About the business
│   └── Footer.tsx        # Footer section
│
├── styles/               # Global styles
│   └── globals.css      # CSS with Tailwind
│
├── lib/                 # Utility files
│   ├── constants.ts     # Business info & config
│   └── utils.ts         # 40+ utility functions
│
├── types/               # TypeScript definitions
│   └── index.ts        # 25+ type interfaces
│
├── public/              # Static assets
│   ├── robots.txt      # SEO
│   ├── sitemap.xml     # Sitemap
│   └── images/         # Product/crop images
│
├── .env.example         # Environment template
├── package.json         # Dependencies
├── next.config.js      # Next.js config
├── tailwind.config.js  # Tailwind config
├── tsconfig.json       # TypeScript config
└── README.md           # This file
```

---

## 🎯 Features

### Frontend
- ✅ **3D Graphics** - Three.js integration with WebGL fallback
- ✅ **Responsive Design** - Mobile, tablet, desktop optimized
- ✅ **Animations** - Framer Motion smooth animations
- ✅ **TypeScript** - Full type safety
- ✅ **SEO Optimized** - LocalBusiness schema, meta tags
- ✅ **Performance** - Lazy loading, image optimization, code splitting

### Business Features
- ✅ **Crop Solutions** - Wheat, Rice, Potato, Sugarcane, Mustard, Vegetables
- ✅ **Crop Doctor** - Photo-based problem diagnosis
- ✅ **Product Categories** - Seeds, Fertilizers, Pesticides, Tools, Equipment
- ✅ **Real-time Stock** - Live availability indicators
- ✅ **WhatsApp Integration** - Direct messaging for inquiries
- ✅ **Farmer Support** - Multiple contact options
- ✅ **Knowledge Center** - Agricultural articles and guides

### Technical Features
- ✅ **Next.js 14** - Latest React framework
- ✅ **TypeScript** - Type-safe code
- ✅ **Tailwind CSS** - Utility-first styling
- ✅ **Framer Motion** - Advanced animations
- ✅ **Three.js** - 3D graphics
- ✅ **GA4 Analytics** - Performance tracking

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Export static site
npm run export
```

### Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your values:

```env
# Business Information
NEXT_PUBLIC_BUSINESS_NAME=MISHIKA TRADER
NEXT_PUBLIC_BUSINESS_PHONE=+91-8958083590
NEXT_PUBLIC_BUSINESS_WHATSAPP=918958083590
NEXT_PUBLIC_BUSINESS_EMAIL=info@mishikatrader.com
NEXT_PUBLIC_BUSINESS_LOCATION=Hapur Shri Nagar Colony, Hapur, UP, India

# Analytics
NEXT_PUBLIC_GA_ID=G_XXXXXXXXXX  # Add your Google Analytics ID

# API Endpoints (if needed)
NEXT_PUBLIC_API_URL=https://api.mishikatrader.com
```

---

## 📦 Dependencies

### Core
- **next** (14.0+) - React framework
- **react** (18.0+) - UI library
- **typescript** - Type safety

### 3D & Graphics
- **three** (r158) - 3D graphics
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Three.js utilities

### Styling & Animation
- **tailwindcss** (3.3+) - Utility CSS framework
- **framer-motion** (10.16+) - Animation library
- **lucide-react** - Icon library

### Development
- **postcss** - CSS processing
- **autoprefixer** - CSS prefixes
- **eslint** - Code linting

---

## 🎨 Customization

### Business Information

Edit `lib/constants.ts`:

```typescript
export const BUSINESS = {
  name: 'MISHIKA TRADER',
  tagline: 'Better Inputs. Better Guidance. Better Farming.',
  description: 'Your Digital Agriculture Partner in Hapur',
  // ... more config
};
```

### Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  'mishika-green': {
    50: '#f0fdf4',
    500: '#2d5016',  // Primary
    600: '#1f3410',  // Dark
    // ...
  }
}
```

### Adding Crops

Edit `lib/constants.ts` and add to `CROPS` array, then update `CropSolutions.tsx`.

### Adding Products

Edit `lib/constants.ts` and add to `PRODUCTS` array, then update `Products3D.tsx`.

---

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# With environment variables
vercel env add NEXT_PUBLIC_BUSINESS_PHONE
vercel deploy
```

### Netlify

```bash
# Build
npm run build

# Deploy the .next folder to Netlify
# Or use Netlify CLI:
npm i -g netlify-cli
netlify deploy
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

---

## 📊 Performance

### Optimization Techniques
- ✅ Image optimization with Next.js Image component
- ✅ Dynamic imports for heavy components
- ✅ CSS-in-JS with Tailwind
- ✅ WebGL fallback for 3D graphics
- ✅ Lazy loading for sections
- ✅ Code splitting by route

### Metrics
- Core Web Vitals optimized
- Lighthouse score: 90+
- Mobile-first approach
- SEO-friendly structure

---

## 🔒 Security

- ✅ No hardcoded secrets
- ✅ Environment variables for sensitive data
- ✅ HTTPS recommended
- ✅ CORS configured
- ✅ Input validation
- ✅ XSS protection with React

---

## 📚 Documentation

For detailed guides, see:

- **Implementation Guide**: `README-MISHIKA-3D-WEBSITE.md`
- **Quick Start**: `QUICK-START-GUIDE.md`
- **Complete Manifest**: `COMPLETE-PROJECT-MANIFEST.md`
- **ZIP Package Guide**: `ZIP-PACKAGE-GUIDE.md`

---

## 🐛 Troubleshooting

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### 3D Graphics Not Showing

- Check browser console for WebGL errors
- Fallback images will display automatically
- Ensure WebGL is enabled in browser

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

### Environment Variables Not Working

```bash
# Ensure .env.local is created
cp .env.example .env.local

# Add your values
NEXT_PUBLIC_BUSINESS_PHONE=+91-8958083590

# Restart dev server
npm run dev
```

---

## 📞 Business Information

| Item | Details |
|------|---------|
| **Business Name** | MISHIKA TRADER |
| **Tagline** | Better Inputs. Better Guidance. Better Farming. |
| **Location** | Hapur Shri Nagar Colony, Hapur, UP, India |
| **Phone** | +91-8958083590 |
| **WhatsApp** | +91-8958083590 |
| **Email** | info@mishikatrader.com |

---

## 📄 License

© 2026 MISHIKA TRADER. All Rights Reserved.

---

## 🤝 Contributing

For customizations and enhancements:

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit for review

---

## 🎊 Getting Help

- Check the documentation files
- Review Next.js docs: https://nextjs.org
- Check Three.js docs: https://threejs.org
- Review Tailwind CSS: https://tailwindcss.com

---

## ✨ Version

**Project:** MISHIKA TRADER 3D Website  
**Version:** 1.0  
**Status:** Production Ready ✅  
**Created:** 2026  

---

**Ready to deploy your premium 3D agriculture website!** 🌾🚀

Extract → `npm install` → `npm run dev` → Launch!
