# Admin Reviews Management System - Isolated Storage

## Overview
The admin can edit product reviews and ratings, but these edits are **completely isolated** and do NOT affect the reviews/ratings displayed on the home page or customer-facing product pages.

## How It Works

### Two Separate Storage Systems

1. **Customer Reviews Storage** (localStorage)
   - Original customer reviews and ratings
   - Used on home page, product pages, and checkout
   - Customer data NEVER modified by admin edits

2. **Admin Reviews Storage** (sessionStorage)
   - Contains only ADMIN EDITS to reviews
   - Separate from customer data
   - Only visible in admin panel
   - Persists during admin session only

### System Architecture

```
┌─────────────────────────────────────────────────────────┐
│         Customer Facing (Home Page & Products)          │
├─────────────────────────────────────────────────────────┤
│  Uses: Original Reviews from localStorage               │
│  Data: Original ratings, comments from customers        │
│  Shows: Real customer feedback without modifications    │
│  Update: Only when new reviews added by customers       │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         Admin Panel (Reviews Management Tab)            │
├─────────────────────────────────────────────────────────┤
│  Uses: Original Reviews + Admin Edits                   │
│  Data: Original + Any changes made by admin             │
│  Shows: Can approve/reject/edit reviews                 │
│  Storage: Edits saved in sessionStorage                 │
│  Note: Changes visible only to admin, not customers     │
└─────────────────────────────────────────────────────────┘
```

## Admin Features

### Edit Reviews
1. Click "Edit" button on any review
2. Modify:
   - Title
   - Rating (1-5 stars)
   - Comment
3. Click "Save" to save changes
4. Changes are stored in admin session only

### Manage Reviews
- **Approve**: Mark review as approved (visible to customers)
- **Reject**: Mark review as rejected (hidden from customers)
- **Delete**: Remove review from customer view
- **Edit**: Modify review content without affecting original

### Filter & Search
- Filter by status: All, Pending, Approved, Rejected
- Filter by product
- View review statistics

## Key Features

✅ **Data Isolation**: Admin edits never sync to customer reviews
✅ **Non-Destructive**: Original customer data remains intact
✅ **Session-Based**: Admin edits clear when admin logs out
✅ **Status Management**: Approve/reject reviews independently
✅ **Analytics**: View total, approved, pending, rejected counts
✅ **Transparent**: Note in UI indicates edits are admin-only

## File Structure

```
lib/
├── reviews-context.tsx              # Customer reviews data
└── admin-reviews-storage.tsx        # Admin edits (NEW)

components/
├── admin-reviews-manager.tsx        # Admin UI (Updated)
├── product-reviews-display.tsx      # Customer view (unchanged)
└── review-submission.tsx            # Customer submissions (unchanged)
```

## Usage Flow

### Customer View (Home Page)
```
Customer sees original reviews/ratings
from localStorage only
```

### Admin View (Admin Panel)
```
Admin logs in
→ Reviews & Ratings tab
→ Can edit reviews (stored separately)
→ Changes visible only in admin panel
→ Log out → edits cleared
→ Home page reviews unchanged
```

## Technical Details

### Admin Reviews Storage Context
```typescript
interface AdminReviewEdit {
  reviewId: string
  productId: string
  title?: string
  comment?: string
  rating?: number
  status?: 'pending' | 'approved' | 'rejected'
  editedAt: string
}
```

### Storage Locations
- **Customer Reviews**: `localStorage['falcongenz_reviews']` (persistent)
- **Admin Edits**: `sessionStorage['falcongenz_admin_reviews_edits']` (session-only)

## Benefits

1. **Data Integrity**: Original customer reviews never modified
2. **Admin Control**: Can manage/edit reviews without affecting display
3. **Non-Invasive**: Changes don't propagate to customer-facing pages
4. **Transparency**: Clear indication that edits are admin-only
5. **Session Safety**: Edits don't persist across admin logouts

## Future Enhancements

- Backend storage for admin edits (persistence across sessions)
- Audit trail of admin changes
- Bulk operations on reviews
- Export functionality
- Advanced filtering and sorting
