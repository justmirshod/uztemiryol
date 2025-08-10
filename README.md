# UZTemirYol - Railway Express Website

A responsive React-based website for Uzbekistan Railway Express company.

## 🚀 Responsive Design Features

### Mobile-First Approach

- **Header**: Mobile hamburger menu with collapsible navigation
- **Grid Layouts**: Responsive grid systems using Tailwind CSS breakpoints
- **Typography**: Scalable text sizes across all devices
- **Images**: Optimized image sizing and object-fit properties
- **Spacing**: Adaptive padding and margins for different screen sizes

### Breakpoints Used

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

### Key Components Made Responsive

#### Header Components

- ✅ **Main Header**: Mobile menu with hamburger button
- ✅ **SubHeader**: Collapsible navigation with mobile-friendly dropdowns
- ✅ **UpHeader**: Responsive text sizing
- ✅ **Language Switcher**: Mobile-optimized layout

#### Home Page Sections

- ✅ **AboutSection**: Responsive text and spacing
- ✅ **NewsPart**: Mobile grid (1 column) → Tablet (2 columns) → Desktop (3 columns)
- ✅ **Services**: Responsive grid and icon sizing
- ✅ **Achievements**: Mobile-friendly card layout
- ✅ **Partners**: Responsive Swiper carousel
- ✅ **VideTour**: Mobile-optimized video player section

#### Layout Components

- ✅ **Container**: Responsive padding (px-4 sm:px-6 lg:px-8)
- ✅ **Footer**: Mobile-first grid layout
- ✅ **Intro**: Responsive height and text sizing

### CSS Improvements

- Added responsive utilities in `src/index.css`
- Mobile menu animations
- Responsive text and spacing classes
- Better container padding for mobile devices

## 🛠️ Technologies Used

- React 18
- Tailwind CSS 3.4
- Vite
- React Router DOM
- Redux Toolkit
- i18next (Internationalization)
- Swiper (Carousel)
- Framer Motion (Animations)

## 📱 Responsive Features

### Mobile (< 640px)

- Single column layouts
- Hamburger menu navigation
- Smaller text sizes
- Compact spacing
- Touch-friendly buttons

### Tablet (640px - 1024px)

- Two-column grids where appropriate
- Medium text sizes
- Balanced spacing
- Optimized navigation

### Desktop (> 1024px)

- Multi-column layouts
- Large text sizes
- Generous spacing
- Full navigation menus

## 🎨 Design System

### Colors

- Primary: Blue gradient (#021b79, #0575e6)
- Secondary: Dark blue (#10223e)
- Accent: White and gray tones

### Typography

- Font: Montserrat (Variable weight)
- Mobile: 14px base
- Tablet: 16px base
- Desktop: 18px base

### Spacing

- Mobile: 1rem (16px)
- Tablet: 1.5rem (24px)
- Desktop: 2rem (32px)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📱 Testing Responsive Design

1. **Browser DevTools**: Use responsive mode to test different screen sizes
2. **Real Devices**: Test on actual mobile phones and tablets
3. **Breakpoints**: Test at 320px, 768px, 1024px, and 1440px
4. **Orientation**: Test both portrait and landscape modes

## 🔧 Customization

### Adding New Responsive Components

1. Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`)
2. Follow mobile-first approach
3. Test on multiple screen sizes
4. Use the existing responsive utilities from `src/index.css`

### Breakpoint Strategy

- **xs**: 0-640px (Mobile)
- **sm**: 640px+ (Large mobile/Small tablet)
- **md**: 768px+ (Tablet)
- **lg**: 1024px+ (Desktop)
- **xl**: 1280px+ (Large desktop)

## 📄 License

This project is for Uzbekistan Railway Express company.
