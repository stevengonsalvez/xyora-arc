# Xyora Arc Website

A modern, responsive website for Xyora Arc, showcasing our innovative AI and technology solutions.

## Design System Foundations

### Color Palette

#### Primary Colors

- **Deep Blue (#002B5C)**
  - Represents trust, intelligence, and depth
  - Used for primary branding elements
  - Tailwind: `text-primary`

- **Vibrant Cyan (#00B8D9)**
  - Conveys innovation and technology
  - Used for accents and call-to-action elements
  - Tailwind: `text-primary-cyan`

- **Clean White (#FFFFFF)**
  - Represents simplicity and clarity
  - Used for primary text on dark backgrounds
  - Tailwind: `text-text-primary`

#### Secondary Colors

- **Electric Violet (#8A2BE2)**
  - Adds a futuristic, creative touch
  - Used for highlights and interactive elements
  - Tailwind: `text-secondary`

#### Dark Theme Colors

- **Main Background (#0A0A0F)**
  - Primary dark background
  - Tailwind: `bg-dark`

- **Navigation Dark (#070709)**
  - Darker shade for navigation
  - Tailwind: `bg-dark-nav`

- **Footer Dark (#050507)**
  - Darkest shade for footer
  - Tailwind: `bg-dark-footer`

- **Card Background (#16161F)**
  - Slightly lighter for cards and sections
  - Tailwind: `bg-dark-card`

- **Border Color (#1E1E2A)**
  - Subtle borders in dark theme
  - Tailwind: `border-dark-border`

#### Text Colors

- **Primary Text (#FFFFFF)**
  - Main text on dark backgrounds
  - Tailwind: `text-text-primary`

- **Secondary Text (#94A3B8)**
  - Secondary text and subtle elements
  - Tailwind: `text-text-secondary`

### Typography

#### Font Families

- **Headings: Montserrat**
  - Used for all headings (h1-h6)
  - Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
  - Tailwind: `font-heading`

- **Body: Roboto**
  - Used for body text and general content
  - Weights: 300 (Light), 400 (Regular), 500 (Medium), 700 (Bold)
  - Tailwind: `font-sans`

### Gradients

- **Primary Gradient**
  - Blend of Deep Blue and Vibrant Cyan
  - Used for brand elements and highlights
  - Tailwind: `bg-gradient-primary`

- **Secondary Gradient**
  - Blend of Deep Blue and Electric Violet
  - Used for accents and interactive elements
  - Tailwind: `bg-gradient-secondary`

- **Dark Gradient**
  - Subtle gradient for dark sections
  - Tailwind: `bg-gradient-dark`

- **Spotlight Effect**
  - Radial gradient for hero sections
  - Tailwind: `bg-spotlight`

### Component Examples

```jsx
// Navigation Link
<Link className="text-text-secondary hover:text-text-primary transition-colors">
  Menu Item
</Link>

// Gradient Text (Logo)
<span className="font-heading font-bold bg-gradient-primary bg-clip-text text-transparent">
  Xyora Arc
</span>

// Dark Card
<div className="bg-dark-card border border-dark-border rounded-lg p-6">
  <h3 className="font-heading text-text-primary">Card Title</h3>
  <p className="text-text-secondary">Card content</p>
</div>

// Button Primary
<button className="bg-primary-cyan text-white hover:bg-opacity-90 transition-colors">
  Action
</button>

// Section with Spotlight
<section className="bg-dark relative">
  <div className="absolute inset-0 bg-spotlight" />
  <div className="relative z-10">Content</div>
</section>
```

### Usage Guidelines

1. **Dark Theme Hierarchy**
   - Navigation: Use `bg-dark-nav` for top bar
   - Main Content: Use `bg-dark` as base
   - Cards/Sections: Use `bg-dark-card` for elevation
   - Footer: Use `bg-dark-footer` for grounding

2. **Text Hierarchy**
   - Primary: Use `text-text-primary` for headings and important text
   - Secondary: Use `text-text-secondary` for supporting text
   - Interactive: Use hover states with `hover:text-text-primary`

3. **Gradients**
   - Use `bg-gradient-primary` for brand elements
   - Use `bg-spotlight` for hero section effects
   - Apply `bg-clip-text text-transparent` for gradient text

4. **Typography**
   - Use Montserrat for headings with appropriate weights
   - Use Roboto for body text and UI elements
   - Maintain consistent line heights and spacing

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Key Technologies

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite
