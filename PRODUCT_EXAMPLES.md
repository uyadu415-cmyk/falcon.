# Product Examples with User Ratings

This document shows example products you can add to the website with realistic user ratings based on product category and popularity.

## Premium/Bestseller Products (4.7-4.9 stars)

These products should have high ratings and many reviews:

```typescript
{
  id: "premium-silk-shirt",
  name: "Premium Silk Oversized Shirt",
  price: 1499,
  originalPrice: 2299,
  image: "/products/premium-silk-shirt.png",
  badge: "BESTSELLER",
  rating: 4.9,
  reviewCount: 523,
},
{
  id: "classic-black-hoodie",
  name: "Classic Black Hoodie",
  price: 1199,
  originalPrice: 1699,
  image: "/products/classic-black-hoodie.png",
  badge: "NEW",
  rating: 4.8,
  reviewCount: 287,
},
{
  id: "vintage-cargo-pants",
  name: "Vintage Cargo Pants",
  price: 1299,
  originalPrice: 1799,
  image: "/products/vintage-cargo-pants.png",
  badge: "BESTSELLER",
  rating: 4.7,
  reviewCount: 412,
},
```

**Why these ratings?**
- Bestseller badge indicates high satisfaction → 4.7-4.9 stars
- Multiple sizes/colors available = more reviews (300-500+)
- Premium pricing justified by high ratings

## Popular/Sale Products (4.5-4.6 stars)

Discounted items with good ratings:

```typescript
{
  id: "limited-edition-tee",
  name: "Limited Edition Falcon Tee",
  price: 499,
  originalPrice: 899,
  image: "/products/limited-edition-tee.png",
  badge: "SALE",
  rating: 4.6,
  reviewCount: 198,
},
{
  id: "streetwear-bomber",
  name: "Streetwear Bomber Jacket",
  price: 1399,
  originalPrice: 1899,
  image: "/products/streetwear-bomber.png",
  badge: "LIMITED",
  rating: 4.5,
  reviewCount: 156,
},
```

**Why these ratings?**
- Sale badge = good value → solid 4.5-4.6 stars
- Limited edition drives urgency → 150-200 reviews
- Price point appeals to budget-conscious customers

## New/Emerging Products (4.4-4.6 stars)

Newer items with growing popularity:

```typescript
{
  id: "new-experimental-tee",
  name: "Experimental Design Tee",
  price: 599,
  originalPrice: 899,
  image: "/products/experimental-tee.png",
  badge: "NEW",
  rating: 4.4,
  reviewCount: 87,
},
{
  id: "rising-star-hoodie",
  name: "Rising Star Hoodie",
  price: 999,
  originalPrice: 1499,
  image: "/products/rising-star-hoodie.png",
  badge: "NEW",
  rating: 4.5,
  reviewCount: 143,
},
```

**Why these ratings?**
- Fewer reviews (50-150) because product is new
- Still solid 4.4+ ratings for customer confidence
- Room to grow into bestseller territory

## Accessories & Secondary Products (4.2-4.4 stars)

Supporting products with decent ratings:

```typescript
{
  id: "premium-socks-pack",
  name: "Premium Socks Pack (6 pairs)",
  price: 499,
  originalPrice: 699,
  image: "/products/premium-socks-pack.png",
  rating: 4.3,
  reviewCount: 112,
},
{
  id: "falcon-cap",
  name: "Falcon Baseball Cap",
  price: 399,
  originalPrice: 599,
  image: "/products/falcon-cap.png",
  rating: 4.2,
  reviewCount: 76,
},
{
  id: "branded-tote-bag",
  name: "Branded Canvas Tote Bag",
  price: 599,
  originalPrice: 899,
  image: "/products/branded-tote-bag.png",
  rating: 4.4,
  reviewCount: 134,
},
```

**Why these ratings?**
- Accessories typically have fewer reviews than apparel
- Still maintain 4.2+ for brand credibility
- Reasonable review counts for secondary products

## Complete Updated Products List

Here's how to replace all 6 current products with a diverse catalog:

```typescript
export const PRODUCTS: Product[] = [
  // Premium Bestsellers
  {
    id: "falcon-wings-oversized-tee",
    name: "Falcon Wings Oversized Tee",
    price: 699,
    originalPrice: 999,
    image: "/products/falcon-wings-tee.png",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewCount: 534,
  },
  
  // Hot New Releases
  {
    id: "midnight-silk-shirt",
    name: "Midnight Silk Oversized Shirt",
    price: 1399,
    originalPrice: 1999,
    image: "/products/midnight-shirt.png",
    badge: "NEW",
    rating: 4.8,
    reviewCount: 245,
  },
  
  // Sale/Discount Items
  {
    id: "golden-falcon-sale-tee",
    name: "Golden Falcon Tee - Sale",
    price: 499,
    originalPrice: 899,
    image: "/products/golden-falcon-tee.png",
    badge: "SALE",
    rating: 4.6,
    reviewCount: 389,
  },
  
  // Limited Edition
  {
    id: "skull-collector-edition",
    name: "Skull Collector's Edition",
    price: 799,
    originalPrice: 1199,
    image: "/products/skull-edition.png",
    badge: "LIMITED",
    rating: 4.7,
    reviewCount: 178,
  },
  
  // Accessories
  {
    id: "premium-hoodie",
    name: "Premium Fleece Hoodie",
    price: 1099,
    originalPrice: 1599,
    image: "/products/premium-hoodie.png",
    rating: 4.5,
    reviewCount: 267,
  },
  
  // New Entry
  {
    id: "urban-cargo-pants",
    name: "Urban Cargo Pants",
    price: 1199,
    originalPrice: 1699,
    image: "/products/cargo-pants.png",
    badge: "NEW",
    rating: 4.4,
    reviewCount: 92,
  },
]
```

## Rating Strategy by Product Type

### T-Shirts/Basic Apparel
- New: 4.4-4.6 ⭐ (50-150 reviews)
- Popular: 4.6-4.8 ⭐ (200-400 reviews)
- Bestseller: 4.8-4.9 ⭐ (300-500+ reviews)

### Premium/Statement Pieces
- New: 4.5-4.7 ⭐ (50-120 reviews)
- Popular: 4.7-4.9 ⭐ (150-350 reviews)
- Bestseller: 4.9 ⭐ (200-400+ reviews)

### Limited/Exclusive Items
- Launch: 4.4-4.6 ⭐ (30-100 reviews)
- Established: 4.6-4.8 ⭐ (100-250 reviews)

### Accessories
- Regular: 4.2-4.4 ⭐ (50-150 reviews)
- Popular: 4.4-4.6 ⭐ (100-250 reviews)

## How to Create Realistic Rating Progressions

If you want a product to "grow" over time, here's a progression:

**Month 1 (Launch - "NEW")**
```typescript
{ rating: 4.4, reviewCount: 45, badge: "NEW" }
```

**Month 2 (Getting Popular)**
```typescript
{ rating: 4.5, reviewCount: 124, badge: "NEW" }
```

**Month 3 (Trending)**
```typescript
{ rating: 4.6, reviewCount: 267 }
```

**Month 4+ (Bestseller)**
```typescript
{ rating: 4.8, reviewCount: 523, badge: "BESTSELLER" }
```

## Tips for Believable Ratings

1. **Maintain consistency**: Similar products should have similar rating ranges
2. **Match reviews to age**: Newer products should have fewer reviews
3. **Use decimals selectively**: 4.5, 4.6, 4.7, 4.8, 4.9 (not just whole numbers)
4. **Premium = Higher Rating**: More expensive items typically have higher satisfaction
5. **Social proof matters**: 4.6+ rating with 200+ reviews looks more credible than 4.9 with 12 reviews

