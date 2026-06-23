# Reviews & Ratings Management System

## Overview
A complete customer reviews and ratings management system for FalconGenZ, with customer review submission, admin approval workflow, and public rating display.

## Features Implemented

### 1. Customer Review Submission (`components/review-submission.tsx`)
- **Product-Only Reviews**: Customers can only submit reviews if the product is in their cart
- **Review Form**: Collects name, email, rating (1-5 stars), title, and detailed comment
- **Status**: Reviews submit with "pending" status for admin approval
- **Toast Notifications**: Clear feedback on submission status

### 2. Reviews Data Management (`lib/reviews-context.tsx`)
- **Context API**: Global state management for all reviews
- **LocalStorage Persistence**: Reviews automatically saved and loaded from browser storage
- **Review Operations**:
  - Add new reviews (with auto-generated ID and timestamps)
  - Update review status (pending/approved/rejected)
  - Delete reviews
  - Get product-specific reviews
  - Calculate review statistics (total count, average rating, star breakdown)

### 3. Admin Reviews Dashboard (`components/admin-reviews-manager.tsx`)
- **Located in**: Admin Panel → Reviews & Ratings tab
- **Statistics Dashboard**: Shows total, approved, pending, and rejected review counts
- **Filtering**:
  - Filter by status: All, Pending, Approved, Rejected
  - Filter by product
- **Review Management**:
  - Approve reviews (move to approved status)
  - Reject reviews (move to rejected status)
  - Delete reviews permanently
  - View full review details with customer info

### 4. Product Reviews Display (`components/product-reviews-display.tsx`)
- **Rating Statistics**:
  - Average rating display
  - Star visualization
  - Total review count
  - Rating breakdown (1★, 2★, 3★, 4★, 5★)
  - Visual progress bars for each rating level
- **Customer Reviews List**:
  - Shows only approved reviews
  - Displays review title, comment, rating, and customer name
  - Includes review date

## How to Use

### For Customers
1. **Add Product to Cart**: Go to any product page and add it to your cart
2. **Submit Review**: Click "Write a Review" button (only visible if product is in cart)
3. **Fill Review Form**: 
   - Enter your name and email
   - Set a rating (1-5 stars)
   - Write a title and detailed comment
4. **Submit**: Review is sent for admin approval

### For Admin
1. **Access Admin Panel**: 
   - Navigate to admin page
   - Login with credentials: ID: `y5mhASsx`, Pass: `369874125`
2. **View Reviews Tab**: Click "Reviews & Ratings" tab in admin dashboard
3. **Manage Reviews**:
   - Use filters to find specific reviews
   - Click "Approve" to make review public
   - Click "Reject" to deny review
   - Click "Delete" to remove permanently
4. **View Statistics**: See overview of all reviews and their statuses

## Data Structure

Each review contains:
```typescript
{
  id: string                    // Auto-generated timestamp ID
  productId: string             // Product identifier
  productName: string           // Display name
  customerName: string          // Reviewer name
  customerEmail: string         // Reviewer email
  rating: number               // 1-5 stars
  title: string                // Review headline
  comment: string              // Full review text
  status: 'pending' | 'approved' | 'rejected'
  createdAt: string            // ISO timestamp
  updatedAt: string            // ISO timestamp
}
```

## Storage
- All reviews are stored in localStorage under key: `falcongenz_reviews`
- Reviews persist across browser sessions
- Data is synced automatically on add/update/delete

## Integration Points
- **Cart Context**: Reviews context is wrapped inside CartProvider in app layout
- **Product Pages**: Can display `<ProductReviewsDisplay />` on product detail pages
- **Product Cards**: Can include `<ReviewSubmission />` component
- **Admin Panel**: Reviews tab added to existing admin dashboard

## Best Practices
- Admin regularly approves reviews to keep content fresh
- Encourage customers to review by promoting the feature
- Monitor pending reviews to maintain quick approval times
- Use review data to improve products based on customer feedback
