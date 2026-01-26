## Project Summary
A professional medical website for Dr. Willmer Obregón, specializing in Internal Medicine and 24-hour Holter monitoring in Medellín. The site aims to provide information about cardiovascular studies and facilitate appointment scheduling via WhatsApp.

## Tech Stack
- Framework: Next.js 15 (App Router)
- Styling: Tailwind CSS
- Icons: Lucide React
- Fonts: Inter

## Architecture
- `src/app/`: Contains the main application routes and global styles.
- `src/components/sections/`: Modularized UI components for each section of the website (Hero, Benefits, Services, FAQ, etc.).
- `src/lib/`: Utility functions and shared logic.

## User Preferences
- Preferred medical-tech aesthetic with teal and blue tones.
- Clean, professional layout with high-quality medical imagery.
- Main Logo URL: `https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/97a64b44-91da-4112-9daf-4ae102c188a2/Wilmer-Obregon-Logo-1769391260059.png?width=8000&height=8000&resize=contain`

## Project Guidelines
- Use "use client" for components with event handlers or hooks.
- Follow the established color palette (Teal: #1080A0, Blue Light: #E1F1F6).
- Maintain responsive design for mobile and desktop.
- **SEO Hierarchy**: H1 unique per page: `<h1>{{primary_keyword}} en {{city}} - {{brand}}</h1>`. 
- **Heading Structure**: H2 for main sections, H3 for sub-sections. No skipped levels.
- **Meta Tags**: 
  - Title: 50-60 chars, keyword at start.
  - Description: ~150 chars with CTA and local keywords.
  - Robots: `index, follow`.
- **Images**: Mandatory `alt` with descriptive keywords and local context. Width/height defined.
- **Responsive**: Mobile-first approach, minimal empty space (>20% viewport avoided).

## Common Patterns
- Section-based architecture for the landing page.
- Direct CTA buttons linking to WhatsApp for lead conversion.
- Production-ready SEO on-page checks before UI finalizing.
