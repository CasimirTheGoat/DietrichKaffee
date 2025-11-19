# Image Assets

## Directory Structure

- `/hero/` - Hero section background images
- `/models/` - Product images for coffee machines

## TODO: Replace Placeholder Images

### Hero Images
Add 4-6 high-quality images (1920x1080px minimum) showing:
- Professional coffee machines in action
- Coffee being brewed/poured
- Modern office/café environments
- Close-ups of espresso shots

Current hero uses Pexels stock photos as placeholders.

### Model Images
Replace placeholder paths in `/data/models.json` with actual product photos:
- edge-pro.jpg
- dualtemp.jpg
- cimbali-m100.jpg
- reneka-viva.jpg
- compact-20.jpg
- proauto-50.jpg
- thermoplan-bw4.jpg
- cimbali-s20.jpg
- mini-10.jpg

Recommended dimensions: 800x600px, aspect ratio 4:3 or 16:9

## Optimization
Use Next.js Image component (already implemented) which handles:
- Automatic optimization
- Responsive sizing
- Lazy loading
- WebP/AVIF conversion
