# Spin Wheel Email Tracking & 24-Hour Discount System

## Overview
Users enter their email ID when spinning the wheel. Discounts are valid for exactly 24 hours after spinning. When a new spin occurs, the previous discount expires and the new discount applies.

## How It Works

### 1. Email Collection
- When user clicks "SPIN NOW!" button, an email input appears
- User must enter valid email before spinning
- Email is stored in localStorage with key `fg_user_email`
- Email persists across sessions to track the same user

### 2. One Spin Per Day
- User can spin once per 24 hours
- After spinning, button shows "🔒 UNLOCK [DATE]" until next day
- Spin automatically unlocks after 24 hours (midnight next day)

### 3. Discount Validity (24 Hours)
- When user wins a discount:
  - Discount percentage saved to localStorage (`fg_discount`)
  - Expiry timestamp calculated: `Date.now() + 24 hours`
  - Stored in localStorage (`fg_discount_expiry`)
  - Toast shows: "X% OFF applied for 24 hours!"
  
- When checkout page loads:
  - System checks if discount timestamp has expired
  - If expired: discount is cleared from cart
  - If valid: discount applies to all products

### 4. New Spin Removes Old Discount
- When user spins again (after 24 hours):
  - Previous discount expires (timestamp is in the past)
  - New discount from spin replaces it
  - New 24-hour timer starts
  - Toast confirms: "X% OFF applied for 24 hours!"

### 5. Better Luck Segments
- If user spins and lands on "BETTER LUCK":
  - No discount applies that day
  - Previous discount is cleared
  - User can try again tomorrow

## LocalStorage Keys
```
fg_user_email          → User's email for tracking
fg_spin_date           → Last spin date (YYYY-MM-DD)
fg_discount            → Current discount percentage (0-50)
fg_discount_expiry     → Timestamp when discount expires
fg_visited             → First visit marker
fg_spin_ready          → Purchase-based spin token
```

## Discount Application Logic
- **Checkout Page**: Checks `fg_discount_expiry` timestamp
  - If `Date.now() < expiry_time`: Apply discount
  - If `Date.now() >= expiry_time`: Clear discount
  - Shows: "[Discount]% OFF active on all products!" (only if valid)

## User Flow
1. User taps SPIN button
2. System asks for email (if not provided)
3. User enters email and verifies
4. Wheel spins
5. If win: Discount applied for 24 hours with timestamp
6. If loss: Previous discount cleared
7. During checkout: Discount auto-expires after 24 hours
8. After 24 hours: User can spin again for new discount

## Example Timeline
```
Day 1, 10:00 AM
- User spins → Gets 20% OFF
- Expiry set to: Day 2, 10:00 AM
- All products show 20% discount

Day 1, 3:00 PM
- User shops → 20% discount applies
- Payment received with discount

Day 2, 10:30 AM
- Discount expires
- User tries to shop → No discount shown
- User can spin again

Day 2, 11:00 AM
- User spins → Gets 10% OFF
- Expiry set to: Day 3, 11:00 AM
- 20% discount completely removed
```

## Key Features
✓ Email tracked for user identification
✓ One spin per 24-hour period
✓ Discount valid for exactly 24 hours
✓ Previous discount cleared when new spin occurs
✓ Automatic expiry checking at checkout
✓ No manual discount management needed
✓ Clean toast notifications
✓ All state persisted across sessions

