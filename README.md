# Xyora Arc Website

A modern, responsive website for Xyora Arc, showcasing our innovative AI and technology solutions.

## Design System

### Color Palette

#### Primary Colors

- **Deep Blue (#002B5C)**
  - Represents trust, intelligence, and depth
  - Used for headers, footers, and main background areas
  - Tailwind: `bg-primary`

- **Vibrant Cyan (#00B8D9)**
  - Conveys innovation and technology
  - Used for accents and call-to-action elements
  - Tailwind: `bg-primary-cyan`

- **Clean White (#FFFFFF)**
  - Represents simplicity and clarity
  - Used for backgrounds and text areas
  - Tailwind: `bg-white`

#### Secondary Colors

- **Electric Violet (#8A2BE2)**
  - Adds a futuristic, creative touch
  - Used for highlights and interactive elements
  - Tailwind: `bg-secondary`

- **Soft Gray (#F4F5F7)**
  - Neutral and balanced
  - Used for secondary backgrounds and dividers
  - Tailwind: `bg-secondary-light`

#### Accent Colors

- **Energetic Orange (#FF5722)**
  - Evokes energy and innovation
  - Used for key highlights and notifications
  - Tailwind: `bg-accent-orange`

- **Fresh Mint Green (#00C853)**
  - Suggests growth and forward movement
  - Used for success messages and progress indicators
  - Tailwind: `bg-accent-green`

#### Text Colors

- **Dark Charcoal (#333333)**
  - Primary text color
  - Tailwind: `text-text-primary`

- **Medium Gray (#6B6B6B)**
  - Secondary text color
  - Tailwind: `text-text-secondary`

### Typography

#### Font Families

- **Headings: Montserrat**
  - Used for all headings (h1-h6)
  - Tailwind: `font-heading`

- **Body: Roboto**
  - Used for body text and general content
  - Tailwind: `font-sans`

### Gradients

- **Primary Gradient**
  - Blend of Deep Blue and Vibrant Cyan
  - Tailwind: `bg-gradient-primary`

- **Secondary Gradient**
  - Blend of Deep Blue and Electric Violet
  - Tailwind: `bg-gradient-secondary`

### Usage Examples

```jsx
// Heading Example
<h1 className="font-heading text-primary text-4xl">Welcome to Xyora Arc</h1>

// Body Text Example
<p className="font-sans text-text-primary">
  Your content here
</p>

// Button Examples
<button className="bg-primary-cyan text-white">
  Primary Action
</button>

<button className="bg-accent-orange text-white">
  Secondary Action
</button>

// Card Example
<div className="bg-secondary-light p-6 rounded-lg">
  <h2 className="font-heading text-text-primary">Card Title</h2>
  <p className="font-sans text-text-secondary">Card content</p>
</div>

// Gradient Example
<div className="bg-gradient-primary text-white p-8">
  Gradient content
</div>
```

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
