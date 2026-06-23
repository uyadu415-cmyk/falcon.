# How to Add Products with User Ratings

## Overview
Products are managed through the `/lib/products.ts` file. Each product includes details like name, price, image, and user ratings.

## Product Data Structure

Each product in the `PRODUCTS` array has the following fields:

```typescript
{
  id: "unique-product-id",           // Unique identifier (kebab-case)
  name: "Product Name",               // Display name
  price: 699,                         // Current selling price (₹)
  originalPrice: 999,                 // Original/strikethrough price (₹)
  image: "/products/product-name.png", // Image path in /public/products/
  badge?: "NEW" | "SALE" | "BESTSELLER" | "LIMITED", // Optional badge
  rating?: 4.8,                       // Star rating (1-5, decimal allowed)
  reviewCount?: 234,                  // Number of user reviews
}
```

## Adding a New Product

### Step 1: Prepare the Product Image
1. Create a PNG/JPG image for your product (square format recommended: 500x500px)
2. Place it in `/public/products/` folder
3. Name it descriptively, e.g., `black-hoodie.png`

### Step 2: Add to Products Array
Open `/lib/products.ts` and add your product to the `PRODUCTS` array:

```typescript
{
  id: "black-hoodie",
  name: "Black Luxury Hoodie",
  price: 1299,
  originalPrice: 1799,
  image: "/products/black-hoodie.png",
  badge: "NEW",
  rating: 4.7,
  reviewCount: 87,
}
```

### Step 3: Import Product Image (Optional but Recommended)
If the image file doesn't exist yet, generate it:
- Use the design tool to create the product image
- Save to `/public/products/`
- Reference it in the product data

## Rating Guidelines

### Star Ratings (1-5 scale)
- **4.9-5.0**: Bestseller/Highly Popular (NEW items, BESTSELLER badge)
- **4.6-4.8**: Very Popular (SALE, LIMITED items)
- **4.3-4.5**: Good/Average (Regular items)
- **4.0-4.2**: Getting started (New variants)

### Review Count Guidelines
- **NEW items**: 50-200 reviews (newer products)
- **Popular items**: 200-500+ reviews (bestsellers)
- **Regular items**: 100-250 reviews
- **Limited items**: 50-150 reviews (exclusive products)

## Example: Adding 3 New Products

```typescript
export const PRODUCTS: Product[] = [
  // ... existing products ...
  
  {
    id: "navy-cargo-pants",
    name: "Navy Cargo Pants",
    price: 1099,
    originalPrice: 1499,
    image: "/products/navy-cargo-pants.png",
    badge: "NEW",
    rating: 4.6,
    reviewCount: 145,
  },
  {
    id: "red-bomber-jacket",
    name: "Red Bomber Jacket",
    price: 1599,
    originalPrice: 2199,
    image: "/products/red-bomber-jacket.png",
    badge: "LIMITED",
    rating: 4.8,
    reviewCount: 276,
  },
  {
    id: "white-sneaker-socks",
    name: "White Sneaker Socks Pack",
    price: 299,
    originalPrice: 399,
    image: "/products/white-sneaker-socks.png",
    rating: 4.4,
    reviewCount: 89,
  },
]
```

## Product Display on Website

### Where Products Appear
1. **Home Page** - "Trending Now" section shows all products in a grid
2. **Shop Page** - Full product listing with filters
3. **Quick Buy Modal** - When user clicks "BUY" on any product

### How Ratings Display
- **Star icons**: Yellow/gold stars showing rating (rounded to nearest whole number)
- **Review count**: Shown in parentheses next to stars, e.g., "(234)"
- **Price**: Current price in gold, original price struck through
- **Badge**: "NEW", "SALE", "BESTSELLER", or "LIMITED" tag

## Best Practices

✅ **DO:**
- Use consistent naming conventions (kebab-case for IDs)
- Keep product names concise (under 40 characters)
- Price reasonably related to originalPrice (20-50% discount typical)
- Use realistic rating/review numbers
- Provide square format images (1:1 aspect ratio)

❌ **DON'T:**
- Use duplicate product IDs
- Leave image paths invalid
- Use ratings outside 1-5 range
- Use negative review counts
- Make all products bestsellers (dilutes value)

## Testing Your Changes

After adding products:
1. Run `pnpm dev` to start the dev server
2. Visit the home page to see products in "Trending Now"
3. Verify images load correctly
4. Check star ratings and review counts display properly
5. Test "BUY" and "ADD TO CART" buttons

## File Locations

- **Products Data**: `/lib/products.ts`
- **Product Images**: `/public/products/`
- **Product Component**: `/components/product-card.tsx`
- **Product Grid**: `/components/product-grid.tsx`

## Future Enhancements

Future versions might include:
- Admin dashboard for product management
- Database integration for dynamic products
- Verified user reviews system
- Product search and filtering
- Inventory management

