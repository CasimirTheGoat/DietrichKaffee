# Dietrich Kaffee Website

Professional website for coffee machine specialist Mirko Dietrich, featuring interactive calculators, product catalogs, and lead generation.

## Features

### 🎯 Interactive Calculators
- **Kaffeemaschinen Calculator**: Match customers to the right espresso machine based on daily cups, beverage type, comfort level, and budget
- **Vollautomaten Calculator**: Calculate total cost of ownership for businesses, including device cost, service levels, and consumables

### 🏢 Product Showcase
- 9 placeholder coffee machine models (both Kaffeemaschinen and Vollautomaten)
- Real specifications: capacity, throughput, boiler types, milk systems
- Intelligent recommendation system with scoring algorithm
- Lead capture forms integrated

### 📱 Modern UX
- Rotating hero background images with smooth crossfade
- Smooth scroll navigation to anchor sections
- Responsive design (mobile-first)
- Accessibility: AA contrast, keyboard navigation, proper ARIA labels

### 📊 Analytics Ready
- Google Analytics 4 event tracking hooks
- Microsoft Clarity integration (requires setup)
- Track hero clicks, calculator usage, and lead submissions

### 🔍 SEO Optimized
- Semantic HTML with proper heading hierarchy
- JSON-LD structured data (LocalBusiness, Product, BlogPosting)
- German language optimization
- Meta tags and Open Graph ready

## Tech Stack

- **Framework**: Next.js 13.5 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Project Structure

```
├── app/
│   ├── page.tsx              # Home page with all sections
│   ├── legal/page.tsx        # Impressum & Datenschutz
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── components/
│   ├── Hero.tsx              # Hero section with CTA buttons
│   ├── HeroRotator.tsx       # Background image rotator
│   ├── CupsCalculator.tsx    # Kaffeemaschinen calculator
│   ├── VollautomatCalculator.tsx  # Business calculator
│   ├── ModelsGrid.tsx        # Product card grid
│   ├── LeadFormModal.tsx     # Contact form modal
│   ├── BlogTeaser.tsx        # Blog post previews
│   ├── LogosRow.tsx          # Partner logos
│   └── SectionHeading.tsx    # Reusable heading component
├── lib/
│   ├── matching.ts           # Calculator logic & scoring
│   ├── structured-data.ts    # SEO JSON-LD helpers
│   └── utils.ts              # Utility functions
├── data/
│   └── models.json           # Product data (9 models)
└── public/
    └── images/               # Image assets (placeholders)
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

### Type Check

```bash
npm run typecheck
```

## Configuration Checklist

Before deploying to production, complete these tasks:

### Required
- [ ] Replace hero images in `/public/images/hero/`
- [ ] Replace product images (update paths in `/data/models.json`)
- [ ] Complete Impressum in `/app/legal/page.tsx` (address, VAT ID)
- [ ] Complete Datenschutzerklärung with hosting/data processing details
- [ ] Add Google Analytics 4 measurement ID in layout
- [ ] Wire lead form to email service (TODO in `LeadFormModal.tsx`)

### Optional
- [ ] Add Microsoft Clarity project ID
- [ ] Add real brand logos (La Cimbali, Thermoplan, Reneka)
- [ ] Replace system fonts with brand font
- [ ] Add more product models to data file
- [ ] Implement blog article pages
- [ ] Add customer testimonials

## Data Format

### Models JSON Schema

```typescript
// Kaffeemaschine
{
  "sku": "KM-MODEL-01",
  "name": "Model Name",
  "category": "kaffeemaschine",
  "recommended_daily_max": 80,
  "beverage_strength": ["espresso", "lungo"],
  "milk_ready": true,
  "comfort": "halbautomatik",
  "price_chf": 2890,
  "boiler": "Dualboiler 2x1.5L",
  "brewer": "E61 Brühgruppe",
  "milk_system": "Dampflanze",
  "water": "Festwasser",
  "power": "2.4kW",
  "service_interval_months": 6,
  "best_for": "Mittelgroßes Café",
  "image": "/images/models/model.jpg"
}

// Vollautomat
{
  "sku": "VA-MODEL-01",
  "name": "Model Name",
  "category": "vollautomat",
  "recommended_daily_max": 150,
  "throughput_per_hour": 60,
  "milk_system": "automatisch",
  "water": "Festwasser",
  "price_chf": 4900,
  "lease_chf_month": 149,
  "service": {
    "basis": 39,
    "plus": 69,
    "premium": 109
  },
  "consumables_chf_per_cup": 0.03,
  "cleaning": "Automatisch + Wochenreinigung",
  "beverage_options": ["Espresso", "Lungo", "Cappuccino"],
  "power": "2.2kW",
  "best_for": "Mittelständische Unternehmen",
  "image": "/images/models/model.jpg"
}
```

## Calculator Logic

### Kaffeemaschinen Calculator
- Adds 30% capacity buffer for peak times
- Scores models on: capacity match (50%), beverage/comfort fit (35%), budget proximity (15%)
- Results sorted by score, top recommendations shown
- Empty state redirects to Vollautomaten

### Vollautomaten Calculator
- Calculates daily volume: `headcount × cupsPerPerson`
- Peak hour demand: `(dailyVolume / openingHours) × 1.5`
- Monthly costs: device cost + service level + consumables (22 working days)
- Compares purchase vs. leasing options
- Filters by throughput and capacity requirements

## Analytics Events

Track these events in Google Analytics:

```javascript
// Hero CTA clicks
{ event: 'hero_click', button: 'kaffeemaschinen' | 'vollautomaten' }

// Calculator submissions
{ event: 'calc_submit', type: 'cups' | 'vollautomat', inputs: {...}, top_sku: '...' }

// Lead form submissions
{ event: 'lead_submit', source_section: 'A' | 'B' | 'blog', model_sku: '...' }
```

## Performance

- Static page generation for optimal speed
- Lazy loading of images (next/image)
- Debounced calculator updates (150ms)
- Code splitting and tree shaking
- First Load JS: ~89 KB

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Contact

**Mirko Dietrich**
Telefon: +49 1520 638 67 02
E-Mail: hallo@dietrichkaffee.de
Web: dietrichkaffee.de

## License

Private/Proprietary - All rights reserved
