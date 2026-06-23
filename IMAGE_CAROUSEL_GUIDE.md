# Image Carousel Feature Guide

## Overview
The image carousel allows customers to browse through multiple product images on product cards using swipe gestures (mobile) or click buttons (desktop).

## Features

### 1. **Multi-Image Display**
- Shows primary image by default
- Displays additional images when swiped or clicked
- Combines primary image with up to 10 additional images per product

### 2. **Navigation Methods**
- **Left/Right Arrow Buttons** - Desktop navigation with hover effects
- **Swipe Gestures** - Mobile touch swipe left/right to view next/previous images
- **Dot Indicators** - Click any dot to jump to specific image
- **Keyboard-Friendly** - Full aria labels for accessibility

### 3. **User Experience**
- **Image Counter** - Top-right displays "1/5" showing current position
- **Active Indicator** - Gold-colored dot shows current image
- **Smooth Transitions** - Opacity animation between image changes
- **Auto-Responsive** - Navigation hidden for single-image products

### 4. **Mobile Optimization**
- Full touch/swipe support with 50px minimum swipe distance
- Buttons appear on hover (desktop) or always visible on touch
- Responsive image sizing for all device types

## Technical Details

### Component Structure
```
ImageCarousel
├── Primary Image Display
├── Navigation Controls
│   ├── Left Arrow Button
│   ├── Right Arrow Button
│   ├── Image Indicators
│   └── Image Counter
└── Touch/Swipe Handler
```

### Component Props
- `primaryImage` - Main product image URL
- `additionalImages` - Array of additional image URLs (optional)
- `productName` - Product name for alt text
- `onImageChange` - Callback when image changes (optional)

### Product Interface Update
Product interface now includes:
```typescript
images?: string[]  // Additional product images
```

## For Admins
When adding/editing products:
1. Upload primary image (required)
2. Add additional images using "Add More Images" button
3. Up to 10 additional images supported
4. All images stored in Vercel Blob storage

## For Customers
When viewing products:
1. Primary image displays by default
2. Click left/right arrows to navigate (desktop)
3. Swipe left/right to navigate (mobile)
4. Click dots to jump to specific image
5. Image counter shows position (e.g., "2/5")

## Browser Support
- Modern browsers with ES6 support
- Touch events for mobile devices
- Fallback to buttons for non-touch devices

## Performance
- Lazy loading for additional images
- Priority loading for primary image
- Efficient re-renders using React hooks
- Optimized image quality (75%) for web
