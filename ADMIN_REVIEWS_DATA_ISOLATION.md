# Admin Reviews - Complete Data Isolation Guide

## Problem Statement
Admin edits to reviews and ratings must NOT affect the original customer reviews displayed on the home page. Complete data isolation is required.

## Solution: Two-System Isolation

### System 1: Original Reviews (localStorage)
**Storage:** `localStorage` key: `falcongenz_reviews`
**Context:** `ReviewsContext` 
**Usage:** Homepage, Products pages, Customer-facing displays

```javascript
{
  id: "review-1",
  title: "Original Title",
  rating: 4,
  comment: "Original comment",
  status: "approved"
}
```

**Read by:** `ProductReviewsDisplay` component ONLY
**Modified by:** Customer reviews system only
**Protected:** YES - updateReview() only allows status changes

### System 2: Admin Edits (sessionStorage)
**Storage:** `sessionStorage` key: `falcongenz_admin_reviews_edits`
**Context:** `AdminReviewsStorageContext`
**Usage:** Admin panel display only

```javascript
{
  reviewId: "review-1",
  productId: "product-1",
  title: "Edited Title",
  rating: 5,
  comment: "Edited comment",
  editedAt: "2026-06-22T10:30:00Z"
}
```

**Read by:** `AdminReviewsManager` component ONLY
**Modified by:** Admin editing operations
**Scope:** Session-based (clears on logout)

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        CUSTOMER VIEW                         │
│                                                              │
│  Homepage → ProductReviewsDisplay                          │
│             ↓                                               │
│         useReviews()                                        │
│             ↓                                               │
│         localStorage (ORIGINAL reviews only)               │
│             ↓                                               │
│         Show ORIGINAL: title, rating, comment              │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                        ADMIN VIEW                            │
│                                                              │
│  Admin Panel → AdminReviewsManager                          │
│                ↓                                             │
│            useReviews() + useAdminReviewsStorage()          │
│                ↓                                             │
│            localStorage (ORIGINAL)                          │
│            + sessionStorage (EDITS)                         │
│                ↓                                             │
│            Display ORIGINAL with ADMIN EDITS overlay        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

## Safety Mechanisms

### 1. ReviewsContext Protection
```javascript
const updateReview = (id: string, updates: Partial<Review>) => {
  // ONLY status changes allowed
  // title, rating, comment CANNOT be changed here
  setReviews(
    reviews.map((r) =>
      r.id === id
        ? { 
            ...r, 
            status: updates.status || r.status,  // ✓ Allowed
            updatedAt: new Date().toISOString() 
          }
        : r
    )
  )
}
```

### 2. ProductReviewsDisplay Isolation
```javascript
export function ProductReviewsDisplay() {
  const { getApprovedReviews } = useReviews()
  
  // NEVER uses AdminReviewsStorage
  // ONLY displays original reviews from localStorage
  // Shows original: title, rating, comment
  const reviews = getApprovedReviews(productId)
}
```

### 3. AdminReviewsManager Separation
```javascript
export function AdminReviewsManager() {
  const { reviews } = useReviews()  // Original reviews
  const { getAdminEdit } = useAdminReviewsStorage()  // Admin edits
  
  // Shows original with optional admin edits overlay
  // Admin edits stored in sessionStorage only
  // Never modifies ReviewsContext
}
```

## Verification Checklist

- [x] Original reviews in localStorage
- [x] Admin edits in sessionStorage
- [x] ProductReviewsDisplay only reads localStorage
- [x] AdminReviewsManager reads both but doesn't modify localStorage
- [x] updateReview() only allows status changes
- [x] Homepage shows original reviews always
- [x] Admin panel shows original + edits
- [x] SessionStorage clears on logout
- [x] Zero risk of admin edits reaching customers

## Data Isolation Guarantees

1. **Homepage Reviews**: 100% Original - Admin edits NEVER appear
2. **Product Pages**: 100% Original - Admin edits NEVER appear
3. **Admin Panel**: Original + Optional Admin Edits (for internal review only)
4. **Persistence**: Original reviews persistent (localStorage), Admin edits session-based (sessionStorage)
5. **No Sync**: Zero communication between the two storage systems

## How Admin Edits Work (Internal Only)

1. Admin clicks "Edit" on a review
2. Edit modal opens with original data
3. Admin modifies title/rating/comment
4. Admin clicks "Save"
5. Edit stored in sessionStorage under `AdminReviewsStorageContext`
6. Admin panel shows blue badge: "ADMIN EDITED"
7. Original review in localStorage remains UNCHANGED
8. Homepage/products still show ORIGINAL review
9. On admin logout, sessionStorage clears
10. All admin edits are lost (temporary session-only)

## Why This Design

- **Customer Trust**: Customers always see original unmodified reviews
- **Audit Trail**: Original reviews never change, editing history is separate
- **Session-Based**: Admin edits don't persist beyond session
- **Zero Risk**: Impossible for admin edits to reach customers
- **Internal Use**: Admin modifications for moderation/management only

## Testing

To verify isolation:

1. Add a customer review
2. Login to admin, edit the review
3. Logout from admin
4. Check homepage - shows ORIGINAL review, NOT admin edit
5. Login to admin again - admin edit is GONE (session cleared)
6. Refresh page - homepage still shows original
7. Edit again, DON'T logout, refresh page - admin edit still there

