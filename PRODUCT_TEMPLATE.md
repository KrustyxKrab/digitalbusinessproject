# Product Page Template

This template shows you how to create a new product detail page using the reusable `ProductDetailLayout` component.

## Step 1: Create a new product page

Create a new file in `/src/pages/produkte/` with the format `[product-slug].astro`

Example: `/src/pages/produkte/sensitive-zahnpasta.astro`

## Step 2: Copy this template

```astro
---
import Layout from "@/layouts/Layout.astro";
import ProductDetailLayout from "@/components/ProductDetailLayout.astro";
import { ShieldCheck } from '@lucide/astro'; // Choose an appropriate icon
import type { ProductDetail } from '@/types/models';

const product: ProductDetail = {
  // Basic Product Info
  id: "product-id",                    // Unique identifier
  slug: "product-slug",                // URL slug (same as filename without .astro)
  sku: "EL-XXX-XXX",                  // Product SKU code
  name: "elmex PRODUCT NAME",          // Full product name
  subtitle: "Zahnpasta",               // Category subtitle (Zahnpasta, Mundspülung, Zahnbürste)
  category: "toothpaste",              // toothpaste | mouthwash | toothbrush | floss
  productLine: "kariesschutz",         // kariesschutz | sensitive | zahnfleisch | junior

  // Descriptions
  description: "Short product description for SEO and meta tags",
  heroTitle: "Compelling Hero Title Goes Here",
  heroDescription: "Detailed description for the hero section that explains the main benefits",

  // Badge (appears at top of hero)
  badge: {
    text: "#1 Von Zahnärzten empfohlen"  // or other trust signal
  },

  // Features (floating cards)
  features: [
    {
      icon: "zap",                       // Icon identifier
      text: "99.9% Kariesschutz"        // Short feature text
    },
    {
      icon: "shield",
      text: "Aminfluorid-Formel"
    }
  ],

  // Benefits & Ingredients
  benefits: [
    "First key benefit",
    "Second key benefit",
    "Third key benefit",
    "Fourth key benefit"
  ],

  ingredients: [
    "Main ingredient 1400 ppm",
    "Ingredient 2",
    "Ingredient 3",
    "Ingredient 4"
  ],

  // How It Works Section
  howItWorks: {
    title: "Wie funktioniert der Schutzschild?",
    description: "Scrolle und erlebe die Wirkung auf mikroskopischer Ebene",
    steps: [
      {
        number: 1,
        title: "Step 1 title",
        description: "Step 1 description"
      },
      {
        number: 2,
        title: "Step 2 title",
        description: "Step 2 description"
      },
      {
        number: 3,                     // Optional third step
        title: "Step 3 title",
        description: "Step 3 description"
      }
    ]
  },

  // Usage Instructions Section
  usage: {
    title: "Perfekte Anwendung in 10 Sekunden",
    expert: {
      name: "Dr. Sarah Schmidt",
      title: "Dentalhygienikerin",
      description: "Expert description that adds credibility"
    },
    instructions: [
      "First instruction",
      "Second instruction",
      "Third instruction"
    ]
  },

  // AI Matching Score (optional - remove if not needed)
  matchingScore: {
    percentage: 85,
    profile: "Basierend auf Ihrem Profil (specific criteria): Match description.",
    note: "Hinweis: Additional note text",
    alternativeProduct: {
      name: "elmex ALTERNATIVE",
      url: "/produkte/alternative-product"
    }
  },

  // Rating & Availability
  rating: {
    value: 4.8,                        // Out of 5
    count: 2847                        // Number of reviews
  },

  price: 3.99,                         // Price in EUR
  availability: "https://schema.org/InStock",  // or OutOfStock, PreOrder, etc.
  imageUrl: "/images/products/product-image.jpg",

  // Where to Buy Links
  buyLinks: [
    {
      retailer: "dm-drogerie markt",
      url: "/wo-kaufen?product=product-slug&retailer=dm"
    },
    {
      retailer: "Rossmann",
      url: "/wo-kaufen?product=product-slug&retailer=rossmann"
    },
    {
      retailer: "REWE",
      url: "/wo-kaufen?product=product-slug&retailer=rewe"
    }
  ]
};
---

<Layout
  title={`${product.name} | ${product.subtitle}`}
  description={product.description}
>
  <ProductDetailLayout product={product} iconComponent={ShieldCheck} />
</Layout>
```

## Step 3: Choose an Icon

Available Lucide icons you can import:
- `ShieldCheck` - for protection/cavity protection
- `Heart` - for gum care
- `Sparkles` - for whitening
- `Baby` - for junior products
- `Droplet` - for mouthwash
- `Zap` - for intensive/fast action
- And many more from `@lucide/astro`

## Step 4: Customize the Product Data

Fill in all the fields with your product's specific information:

1. **Basic Info**: Update IDs, names, and categories
2. **Hero Section**: Write compelling title and description
3. **Features**: List 2-3 key features
4. **Benefits**: List main benefits (4-5 items)
5. **How It Works**: Explain the mechanism (2-3 steps)
6. **Usage**: Add expert info and instructions
7. **Matching Score**: Optional - remove if not using AI matching
8. **Buy Links**: Update retailer links

## Step 5: Webcrawler Optimization

The `ProductDetailLayout` component automatically handles:
- ✅ Schema.org structured data for SEO
- ✅ Crawler-focused view with performance metrics
- ✅ HTML hierarchy for search engines
- ✅ Benefits and features structured data
- ✅ "Wo kaufen" link integration

The crawler mode shows:
- Structured JSON-LD data
- HTML hierarchy
- Key features and benefits
- Performance metrics

This ensures search engines and AI crawlers can properly index and understand your product pages.

## Complete Example Files

Look at these files for reference:
- `/src/pages/produkte/kariesschutz-zahnpasta.astro` - Complete working example
- `/src/components/ProductDetailLayout.astro` - The layout component
- `/src/types/models.ts` - ProductDetail type definition

## Quick Checklist

- [ ] Created new file in `/src/pages/produkte/`
- [ ] Imported necessary components and types
- [ ] Filled in all product data fields
- [ ] Chose appropriate icon component
- [ ] Updated buy links with correct product slug
- [ ] Tested the page by visiting `/produkte/your-product-slug`
- [ ] Verified crawler mode works (toggle at top of page)
