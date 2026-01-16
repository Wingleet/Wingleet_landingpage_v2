# Wingleet Landing Website

A **premium aviation-tech** landing website for Wingleet - a Paris-based AI & software company revolutionizing aircraft traceability through AI and blockchain technology.

## Features

- **Multi-page responsive design** with React Router
- **Premium aerospace aesthetic** with refined typography and sophisticated color palette
- **Advanced motion design** with Framer Motion animations
- **Glass morphism UI** with backdrop blur effects and subtle shadows
- **Smooth micro-interactions** including hover effects, page transitions, and scroll animations
- **5 Complete pages:**
  - Home - Company overview with hero, value propositions, partners, and contact form
  - Aero-Chain - Detailed AI & Protocol platform information
  - Custom Development - Use cases and custom solutions showcase
  - Team - Leadership and extended team profiles
  - Client Stories - Testimonials with AMC Aviation case study

## Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and builds
- **React Router** for multi-page navigation
- **Framer Motion** for fluid animations and transitions
- **Tailwind CSS** with custom utilities for styling
- **shadcn/ui** component library
- **Lucide React** for thin-line icons
- **Inter** font family for geometric sans-serif typography

## Design Principles

- **Premium aviation-tech aesthetic** - Modern, clean, professional design language
- **Color palette**: Soft white backgrounds (#F8FAFC), light slate panels, sky blue accents (#0EA5E9), deep navy (#0F172A)
- **Typography**: Inter font with refined scale ratios, tight letter-spacing (-0.02em), precise line heights
- **Layout**: Generous spacing (section-padding utility), balanced grids, centered content blocks, max-width containers (7xl)
- **Cards**: Subtle borders (slate-200/60), premium shadows (multi-layered), rounded corners (2xl), hover elevation changes
- **Gradients**: Aviation-inspired (sky-400 to sky-700), subtle backgrounds (F8FAFC to F1F5F9)
- **Buttons**: Pill-shaped (rounded-full), minimal borders, subtle hover scale effects, shadow depth
- **Icons**: Lucide React thin-line icons with uniform stroke width (1.5-2px)
- **Glass morphism**: Navbar with backdrop-blur-xl, bg-white/80 opacity, border transitions on scroll
- **Advanced motion design** with Framer Motion
- **Smooth page transitions** and scroll-triggered animations
- **Micro-interactions** on all interactive elements (buttons, cards, navigation, partners)
- **Animated hero backgrounds** with rotating geometric circles
- **Staggered fade-in animations** for content sections (0.12s delay)
- **Scroll-to-top button** with smooth fade and scale animations
- **Fully responsive** mobile-first layout with smooth collapsible navigation
- **Consistent spacing rhythm** across all breakpoints (py-16 md:py-24 lg:py-32)

## Project Structure

```
src/
├── pages/
│   ├── Home.tsx              # Landing page
│   ├── AeroChain.tsx         # Aero-Chain platform details
│   ├── CustomDev.tsx         # Custom development solutions
│   ├── Team.tsx              # Team profiles
│   └── Testimonials.tsx      # Client success stories
├── components/
│   ├── Navbar.tsx            # Navigation header
│   ├── Footer.tsx            # Site footer
│   └── ui/                   # shadcn/ui components
├── layouts/
│   └── MainLayout.tsx        # Main page layout wrapper
└── App.tsx                   # Main app with routing
```

## Motion Design Features

### Navbar Animations
- Smooth slide-down entrance on page load
- Active page indicator with spring physics
- Backdrop blur effect activates on scroll
- Hover scale effects on logo and buttons
- Mobile menu with staggered item animations

### Hero Section
- Animated rotating geometric circles in background
- Staggered fade-up animations for title and subtitle
- Button scale effects on hover and tap
- Smooth entrance animations

### Content Sections
- Scroll-triggered fade-in animations
- Staggered children animations for cards and items
- Hover effects with scale and lift transformations
- Icon rotation animations on hover

### Cards & Interactive Elements
- Shadow elevation changes on hover
- Scale transformations with spring physics
- Color transitions on hover
- Smooth border and background animations

### Scroll Interactions
- Scroll-to-top button with fade and scale animations
- Automatic smooth scroll to top on route change
- Parallax-style geometric background animations

## Getting Started

### Development

```bash
npm install
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This site is ready for deployment on any static hosting platform:

- **Netlify**: Connect your Git repository and deploy automatically
- **Vercel**: Import project and deploy with zero configuration
- **AWS S3 + CloudFront**: Upload build files to S3 bucket
- **GitHub Pages**: Use GitHub Actions for automatic deployment

## Key Pages

### Home (`/`)
- Hero section with CTAs to Aero-Chain and booking meetings
- Value proposition cards (Automation, Traceability, Interoperability)
- Company introduction
- Partners and supporters showcase
- Contact form with meeting scheduler integration

### Aero-Chain (`/aerochain`)
- Aero-Chain AI features and capabilities
- Aero-Chain Protocol blockchain infrastructure
- Impact metrics and benefits
- Call-to-action for pilot projects

### Custom Development (`/custom-dev`)
- Custom ERP, MRO, and airline solutions
- Case studies: AMC Aviation iDismantling and Take Off Solutions AI tool
- Service offerings and integration capabilities

### Team (`/team`)
- Leadership profiles: Vincent (CEO), Antoine (CTO), Sébastien (Lead Dev)
- Extended team breakdown (developers, blockchain engineers, AI specialists)
- Accelerator and partner acknowledgments

### Client Stories (`/testimonials`)
- Featured testimonial from AMC Aviation CEO
- Key implementation results and metrics
- Detailed benefits and success indicators

## Partners & Supporters

- AMC Aviation
- Take Off Solutions
- SkyThread
- Stellar Fund
- 21st by CentraleSupélec
- BPI France
- SKYZEN
- AIRNXT
- Station F
- GIFAS
- ESSEC

## Contact

For inquiries, use the contact form on the homepage or schedule a meeting through the provided calendar links.

## License

All rights reserved. © 2025 Wingleet
