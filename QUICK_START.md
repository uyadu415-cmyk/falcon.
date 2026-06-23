# FalconGenZ - Quick Start Guide

Ready to go live? Here's what you need in 5 steps.

## Step 1: Verify Everything Works Locally

```bash
cd /path/to/project
pnpm install
pnpm dev
```

Visit `http://localhost:3000` and verify:
- ✅ Homepage loads
- ✅ Products display
- ✅ Admin login works (/admin)
- ✅ WhatsApp button visible
- ✅ No console errors

## Step 2: Set Up Vercel Account

1. Go to https://vercel.com/signup
2. Sign up with GitHub (easiest)
3. Create new account if needed

## Step 3: Push to GitHub

```bash
git add .
git commit -m "Production deployment"
git push origin main
```

## Step 4: Deploy to Vercel

### Option A: Automatic (Recommended)
1. Go to Vercel Dashboard
2. Click "New Project"
3. Import your GitHub repo
4. Vercel auto-deploys on every push

### Option B: Manual
```bash
npm install -g vercel
vercel --prod
```

## Step 5: Configure Environment Variables

In Vercel Dashboard → Project Settings → Environment Variables:

```
ADMIN_PASSWORD = your-secure-password
OWNER_EMAIL = your-email@gmail.com
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
NEXT_PUBLIC_STORE_NAME = FalconGenZ
```

**That's it!** Your store is live.

---

## What You Get

- ✅ Live product catalog
- ✅ Admin panel (/admin)
- ✅ WhatsApp ordering
- ✅ Shopping cart
- ✅ Discount system
- ✅ Reviews & ratings
- ✅ Mobile optimized
- ✅ Auto-scaling

---

## First Time Using It

### Add Products
1. Go to `/admin`
2. Enter password from env vars
3. Click "Add Product"
4. Fill details
5. Click Save
6. Product appears in shop instantly

### Test WhatsApp
1. Visit any product
2. Click "Order on WhatsApp"
3. Message opens in WhatsApp
4. Customer can complete order

### Use Admin Dashboard
1. Go to `/admin`
2. See "Product Management" tab
3. See "Reviews & Ratings" tab
4. Manage products and reviews
5. View analytics

---

## Common Tasks

### Change Admin Password
```env
ADMIN_PASSWORD = new-password
```
Then redeploy or changes take effect on next deploy.

### Add a Custom Domain
In Vercel Dashboard:
1. Project Settings → Domains
2. Add your domain (e.g., `falcongenz.com`)
3. Update DNS records
4. Wait for verification

### Enable Email Notifications
1. Sign up at https://resend.com
2. Get API key
3. Add to env vars:
```env
RESEND_API_KEY = re_xxxxx
```

### View Analytics
1. In Vercel Dashboard → Analytics
2. Track visitors, performance, errors

---

## Troubleshooting

### Admin Password Not Working
- Clear browser cache
- Verify env var is set correctly
- Try incognito mode

### Products Not Saving
- Check internet connection
- Verify Blob storage is set up
- Try again in a moment

### WhatsApp Links Not Working
- Test with known number (+91XXXXXXXXXX)
- Works best on mobile with WhatsApp app
- Desktop needs WhatsApp Web

### Deployment Failed
- Check Git history
- Fix any TypeScript errors locally
- Push working code

---

## Critical Files

- **`PRODUCTION_DEPLOYMENT.md`** - Detailed deployment guide
- **`DEPLOY_TO_PRODUCTION.md`** - Step-by-step instructions
- **`DEPLOYMENT_TEST_CHECKLIST.md`** - Testing checklist
- **`PRODUCTION_STATUS.md`** - Full status report

---

## Admin Access

**URL**: `https://yourdomain.com/admin`  
**Password**: Value of `ADMIN_PASSWORD` env var (default: `y5mhASsx`)

Change password in environment variables for security.

---

## Support

### Vercel Docs
- https://vercel.com/docs
- https://nextjs.org/docs

### Common Issues
See **PRODUCTION_DEPLOYMENT.md** → Troubleshooting section

---

## Ready?

```bash
# Push to production
git push origin main

# Watch deployment at: https://vercel.com/dashboard
# Visit live site
# Login to admin
# Add products
# Start selling!
```

**That's it! You're live.** 🚀

---

**Next**: Read `PRODUCTION_DEPLOYMENT.md` for detailed setup

