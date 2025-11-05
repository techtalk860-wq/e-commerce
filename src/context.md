## Overview
A reusable product price-comparison card that displays a product image, name, optional description and category, along with a list of platform prices. Use this when you need to present multiple pricing options for a product across platforms and allow users to select a price to proceed.

## Available Imports
**Components:**
- `ProductComparisonCard` - (named export) Main component that renders a product with price comparisons

**Types:**
- `ProductComparisonCardProps` - (named export) Props interface for ProductComparisonCard
- `PlatformPrice` - (named export) Platform price entry type describing each platform's price details

**Hooks/Utils:**
- None

IMPORT SYNTAX GUIDANCE:
- Named exports: import { ProductComparisonCard, ProductComparisonCardProps, PlatformPrice } from './ProductComparisonCard'
- Types (separate): import type { ProductComparisonCardProps, PlatformPrice } from './ProductComparisonCard'
- Mixed: import { ProductComparisonCard } from './ProductComparisonCard'
  import type { ProductComparisonCardProps, PlatformPrice } from './ProductComparisonCard'

## Component Props & Types
```typescript
export interface PlatformPrice {
  platform: string
  price: number
  availability: boolean
  productUrl: string
  logo?: string
}
```

```typescript
export interface ProductComparisonCardProps {
  productName: string
  productImage: string
  description?: string
  category?: string
  prices: PlatformPrice[]
  onSelectPrice?: (platform: string, price: number) => void
  'data-id'?: string
}
```

- PlatformPrice
  - Required: platform (string), price (number), availability (boolean), productUrl (string)
  - Optional: logo (string)
  - Represents a single platform’s pricing entry for the product

- ProductComparisonCardProps
  - Required: productName (string), productImage (string), prices (PlatformPrice[])
  - Optional: description (string), category (string), 'data-id' (string)
  - onSelectPrice
    - Type: (platform: string, price: number) => void
    - Optional callback invoked when a price is selected
  - 'data-id'
    - Optional data attribute to attach an identifier to the card for testing or analytics

## Import Patterns
// Basic import (component and types)
import { ProductComparisonCard, ProductComparisonCardProps, PlatformPrice } from './ProductComparisonCard'

// Import types separately (no runtime import)
import type { ProductComparisonCardProps, PlatformPrice } from './ProductComparisonCard'

// Mixed import (runtime + types)
import { ProductComparisonCard } from './ProductComparisonCard'
import type { ProductComparisonCardProps, PlatformPrice } from './ProductComparisonCard'

## Usage Requirements
- No special React context providers are required
- No external state management integration is required; you can manage prices and selections via props and callbacks
- If provided, onSelectPrice will be called with the selected platform and price when a user selects a price
- The component does not expose a ref; it is a standard functional component
- No error boundaries or required wrappers are necessary
- The component relies on standard React rendering; ensure your app includes a CSS baseline (Tailwind classes are used internally for styling)

## How It Works
From a user perspective:
- The card presents the product image, name, and optional description and category
- A list of platform price options is shown, each indicating availability and price
- The best deal is visually highlighted and a “Select” action enables the user to choose a price
- Selecting a price triggers onSelectPrice if provided; otherwise, the action is inert
- The component handles available/unavailable states by adjusting styling and disable state of the action

## Layout & Appearance
- The card uses a responsive layout with a header region showing product image and details, followed by a list of price options
- Each price item shows platform branding (logo when provided), availability status, and price
- Best deal is highlighted with distinct styling
- Overall styling relies on internal Tailwind CSS utility classes; the component does not expose a className prop

## Styling & Theming
- Internal styling is based on Tailwind CSS classes
- There is no public className prop to customize styling directly; to adjust visuals, apply global Tailwind overrides or modify the component source
- The component does not support explicit color/theme props; customization is done via external CSS if needed

## Code Examples

### Example 1: Basic Usage
```typescript
import { ProductComparisonCard } from './ProductComparisonCard'
import type { PlatformPrice } from './ProductComparisonCard'

function App() {
  const prices: PlatformPrice[] = [
    {
      platform: 'Amazon',
      price: 999,
      availability: true,
      productUrl: 'https://amazon.in/product',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=100&fit=crop',
    },
  ]

  return (
    <ProductComparisonCard
      productName="Sample Running Tee"
      productImage="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop"
      description="A lightweight, breathable tee for workouts."
      category="Fashion"
      prices={prices}
    />
  )
}
```

### Example 2: Common Use Case
```typescript
import { ProductComparisonCard } from './ProductComparisonCard'
import type { PlatformPrice } from './ProductComparisonCard'

function App() {
  const prices: PlatformPrice[] = [
    { platform: 'Amazon', price: 1299, availability: true, productUrl: '#', logo: '' },
    { platform: 'Flipkart', price: 1199, availability: true, productUrl: '#', logo: '' },
  ]

  return (
    <ProductComparisonCard
      productName="Wireless Headphones"
      productImage="https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&h=400&fit=crop"
      category="Electronics"
      description="Over-ear headphones with active noise cancellation."
      prices={prices}
    />
  )
}
```

### Example 3: With Event Handlers
```typescript
import { ProductComparisonCard } from './ProductComparisonCard'
import type { PlatformPrice } from './ProductComparisonCard'
import { useState } from 'react'

function App() {
  const [selected, setSelected] = useState<{ platform: string; price: number } | null>(null)

  const prices: PlatformPrice[] = [
    { platform: 'Amazon', price: 2999, availability: true, productUrl: '#', logo: '' },
    { platform: 'Flipkart', price: 2899, availability: true, productUrl: '#', logo: '' },
  ]

  return (
    <ProductComparisonCard
      productName="Smart Speaker"
      productImage="https://images.unsplash.com/photo-1517218792989-7a2a6a9d2b10?w=400&h=400&fit=crop"
      prices={prices}
      onSelectPrice={(platform, price) => {
        setSelected({ platform, price })
        console.log(`Selected ${platform} at ₹${price}`)
      }}
    />
  )
}
```

### Example 4: With All Props
```typescript
import { ProductComparisonCard } from './ProductComparisonCard'
import type { PlatformPrice } from './ProductComparisonCard'

function App() {
  const prices: PlatformPrice[] = [
    {
      platform: 'Amazon',
      price: 1999,
      availability: true,
      productUrl: '#',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2',
    },
    {
      platform: 'Croma',
      price: 2099,
      availability: false,
      productUrl: '#',
      logo: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2',
    },
  ]

  return (
    <ProductComparisonCard
      productName="4K Action Camera"
      productImage="https://images.unsplash.com/photo-1519183071298-a2962e3e77a0?w=400&h=400&fit=crop"
      description="Waterproof action camera with 4K recording."
      category="Electronics"
      prices={prices}
      data-id="prod-123"
    />
  )
}
```