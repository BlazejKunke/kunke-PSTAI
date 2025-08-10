# PSTAI Website

A bright, optimistic one-page website for the Polish Association of AI Trainers (PSTAI), built with Astro and TypeScript.

## Features

- 🚀 Fast, minimal JavaScript, great mobile experience
- ♿ Fully accessible with ARIA support and keyboard navigation
- 📱 Responsive design with mobile-first approach
- 🎨 Clean design with lots of white space
- 📝 Contact and join forms with validation
- 🔍 SEO optimized with meta tags and sitemap
- 🌐 Smooth scrolling with reduced motion support

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and add your Formspree form action URLs.

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file with:

```
FORM_ACTION_JOIN=https://formspree.io/f/your-join-form-id
FORM_ACTION_CONTACT=https://formspree.io/f/your-contact-form-id
```

## Sections

1. **Header** - Sticky navigation with logo and menu
2. **Hero** - Main headline with CTAs
3. **About** - Short description with three key points
4. **Benefits** - Two cards for trainers and organizations
5. **Join** - Membership application form
6. **Contact** - Contact information and form
7. **Footer** - Simple footer with links

## Technology Stack

- **Framework**: Astro 4.x
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Forms**: Formspree integration
- **Font**: Inter from Google Fonts

## Color Palette

- Primary: `#146A5C` (deep green)
- Light mint: `#EEF8F4` (background accent)
- Accent: `#F4B740` (warm yellow)
- Text: `#0E0F10` (near black)

## Analytics Hook

The site is ready for Plausible analytics. Add the script tag to `src/layouts/Layout.astro` when needed.