# Deployment Checklist for Dietrich Kaffee

## ✅ Completed

- [x] Next.js application structure with App Router
- [x] All components created and functional
- [x] Two interactive calculators (Kaffeemaschinen & Vollautomaten)
- [x] 9 placeholder product models with realistic specs
- [x] Lead form modal with validation
- [x] Blog teaser section
- [x] Legal page with Impressum & Datenschutz placeholders
- [x] Responsive design (mobile-first)
- [x] Accessibility features (ARIA labels, keyboard nav, focus rings)
- [x] SEO metadata and JSON-LD structured data
- [x] Analytics event hooks (GA4, Clarity)
- [x] Production build successful (89 KB First Load JS)
- [x] Clean, professional design (black/white/gray palette)
- [x] German language throughout

## 🔴 Required Before Launch

### Content & Assets
- [ ] Replace hero background images in `components/Hero.tsx`
  - Current: Pexels stock photos
  - Update: Add 4-6 professional coffee machine photos
  - Location: Reference in `HERO_IMAGES` array

- [ ] Replace product images
  - Current: Placeholder paths in `/data/models.json`
  - Update: Add real product photos to `/public/images/models/`
  - Update `image` field for each model in `models.json`

- [ ] Update product data
  - Current: 9 placeholder models
  - Review and update specs, prices, descriptions
  - Add more models if needed

### Legal & Compliance
- [ ] Complete Impressum (`/app/legal/page.tsx`)
  - Add full business address
  - Add VAT ID (Umsatzsteuer-ID)
  - Add commercial register info if applicable

- [ ] Complete Datenschutzerklärung
  - Add hosting provider details
  - Add cookie policy details
  - Add data processing agreements
  - Consider using e-recht24.de generator

### Analytics
- [ ] Add Google Analytics 4 Measurement ID
  - Location: `app/layout.tsx`
  - Add GA4 script tag with your ID
  - Test event tracking

- [ ] Add Microsoft Clarity Project ID (optional)
  - Location: `app/layout.tsx`
  - Add Clarity script tag

### Forms & Integration
- [ ] Wire lead form to email service
  - Current: Console.log only
  - Location: `components/LeadFormModal.tsx`
  - Options: Formspark, Netlify Forms, SendGrid, etc.
  - Update form submission handler

### Branding
- [ ] Add manufacturer logos
  - Current: Text links only
  - Add La Cimbali, Thermoplan, Reneka logos
  - Location: `components/LogosRow.tsx`

- [ ] Consider brand font (optional)
  - Current: Inter (Google Fonts)
  - Add custom brand font if available

## 🟡 Recommended Before Launch

### Content
- [ ] Add more product models to `data/models.json`
- [ ] Write and add real blog articles (currently placeholders)
- [ ] Add customer testimonials section
- [ ] Add FAQ section

### Features
- [ ] Implement model detail modals (currently placeholder)
- [ ] Add image galleries for products
- [ ] Add video content
- [ ] Consider live chat integration

### Performance
- [ ] Run Lighthouse audit
- [ ] Optimize images (use next/image properly)
- [ ] Test on multiple devices and browsers
- [ ] Check page load speed

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google My Business
- [ ] Add Open Graph images
- [ ] Add Twitter Card metadata

## 🟢 Post-Launch

- [ ] Monitor analytics and user behavior
- [ ] A/B test calculator inputs and messaging
- [ ] Collect and display real customer reviews
- [ ] Optimize conversion funnel
- [ ] Add schema markup for reviews
- [ ] Consider multi-language support (EN)

## Testing Commands

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## Environment Variables

None required for basic deployment. All placeholder data is in JSON files.

For production features, you may want to add:
```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=XXXXXXXXXX
FORMSPARK_FORM_ID=XXXXXXXXXX
```

## Deployment Platforms

This app works with:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **DigitalOcean App Platform**
- **Any Node.js hosting**

## Support

For questions or issues:
- Review `/README.md` for detailed documentation
- Check `/.bolt/IMPLEMENTATION_NOTES.md` for technical details
- Review `/public/images/README.md` for image requirements

---

**Last Updated**: November 2025
**Build Status**: ✅ Passing
**TypeScript**: ✅ No errors
