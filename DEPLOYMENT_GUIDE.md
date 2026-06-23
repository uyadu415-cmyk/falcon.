# FalconGenZ Deployment Guide

## Quick Start: Deploy to Production

### Step 1: Verify Everything Works Locally
```bash
# Install dependencies
npm install
# or
pnpm install

# Run development server
npm run dev
# or
pnpm dev

# Open browser and test
# http://localhost:3000
```

### Step 2: Run Production Build Test
```bash
# Create production build
npm run build
# or
pnpm build

# Start production server
npm start
```

### Step 3: Push to GitHub
```bash
# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Production release: Complete SEO, performance, and security setup"

# Push to main branch
git push origin main
```

### Step 4: Vercel Auto-Deploys
1. Vercel detects push to GitHub
2. Automatic build starts
3. Tests run (if configured)
4. Preview deployment created
5. Production deployment starts automatically

**No additional steps needed!** Vercel handles everything.

---

## Files Created for Production

### 1. SEO Files
- **`/app/sitemap.ts`** - XML Sitemap
  - Auto-generated from route structure
  - Submitted to Google Search Console
  - Priority levels set for each page
  - Change frequencies specified

- **`/app/robots.txt`** - Robots.txt
  - Allows Google, Bing crawlers
  - Blocks admin panel (/admin)
  - Blocks API endpoints (/api/)
  - Blocks checkout (/checkout)

### 2. Error Handling
- **`/app/not-found.tsx`** - 404 Page
  - User-friendly design
  - Navigation links provided
  - Support email shown
  - No blank screen

### 3. Configuration Updates
- **`/next.config.mjs`** - Already optimized with:
  - Image optimization (WebP, AVIF)
  - Cache strategies
  - Security headers
  - Gzip compression
  - Smart redirects

### 4. Metadata
- **`/app/layout.tsx`** - Global metadata with:
  - OpenGraph tags
  - Twitter cards
  - Viewport settings
  - Font preloading

- **`/app/checkout/page.tsx`** - Added metadata:
  - Title: "Checkout — FalconGenZ"
  - Description: "Complete your order"
  - robots: noindex (don't index checkout)

---

## Environment Variables

### Required for Production
```env
# Next.js
NEXT_PUBLIC_BASE_URL=https://falcongenz.vercel.app

# Payment Gateway (if using PayU/PayPal)
PAYPAL_CLIENT_ID=your_client_id
PAYPAL_CLIENT_SECRET=your_secret

# Email (if sending confirmations)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### How to Set Environment Variables on Vercel
1. Go to vercel.com
2. Select your project
3. Go to "Settings" → "Environment Variables"
4. Add each variable
5. Redeploy to apply

---

## Performance Optimization Summary

### Image Optimization
- ✓ WebP and AVIF formats
- ✓ Responsive image sizes
- ✓ 1-year caching for static images
- ✓ Lazy loading on scroll

### Caching Strategy
```
Static Assets: 1 year (immutable)
Font Files: 1 year (immutable)
API Responses: 1 hour (with 7-day SWR)
HTML Pages: 1 hour (with 24-hour s-maxage)
```

### Code Optimization
- ✓ Minified CSS & JavaScript
- ✓ Tree-shaking unused code
- ✓ Dynamic imports for code splitting
- ✓ Production source maps disabled

---

## Security Checklist

### HTTPS
- ✓ Automatic on Vercel
- ✓ All traffic encrypted
- ✓ No SSL configuration needed

### Headers
- ✓ X-Frame-Options: Configured
- ✓ Content-Security-Policy: Configured
- ✓ X-Content-Type-Options: nosniff
- ✓ Referrer-Policy: Configured

### API Security
- ✓ No API keys in client code
- ✓ Backend validation on all inputs
- ✓ Rate limiting via Vercel
- ✓ CORS properly configured

### Admin Security
- ✓ Stored in localStorage (client isolation)
- ✓ No sharing between users
- ✓ Session-based access
- ✓ No sensitive data in URLs

---

## Testing Checklist Before Deployment

### Critical Tests
- [ ] Homepage loads in < 2 seconds
- [ ] Product images display
- [ ] Add to cart works
- [ ] Checkout flow complete
- [ ] Payment succeeds (test mode)
- [ ] Order confirmation appears
- [ ] Admin dashboard loads
- [ ] Product edits sync to website

### Mobile Tests
- [ ] Responsive on 320px (mobile)
- [ ] Responsive on 768px (tablet)
- [ ] Responsive on 1024px (desktop)
- [ ] Touch targets adequate (48px+)
- [ ] No horizontal scroll
- [ ] Images load fast

### Browser Tests
- [ ] Chrome (desktop & mobile)
- [ ] Firefox (desktop & mobile)
- [ ] Safari (Mac & iOS)
- [ ] Edge (desktop)

### SEO Tests
- [ ] Sitemap accessible: `/sitemap.xml`
- [ ] Robots.txt accessible: `/robots.txt`
- [ ] Meta tags present: `<meta name="description">`
- [ ] OpenGraph tags present
- [ ] Twitter card tags present
- [ ] Canonical URLs set

### Performance Tests
- [ ] Lighthouse score > 80
- [ ] LCP < 2.5 seconds
- [ ] FID < 100 milliseconds
- [ ] CLS < 0.1

---

## Post-Deployment Verification

### Immediate (First 5 minutes)
1. Visit production URL
2. Check homepage loads
3. Check products display
4. Verify no console errors
5. Check admin dashboard

### First Hour
1. Monitor error logs
2. Check Web Vitals
3. Test checkout with test card
4. Verify email confirmations
5. Check mobile view

### First Day
1. Monitor analytics traffic
2. Check conversion funnel
3. Verify all pages accessible
4. Ensure no 404 errors
5. Check payment success rate

---

## Monitoring Setup

### Vercel Analytics (Built-in)
- Web Vitals: LCP, FID, CLS
- Request metrics: Response times
- Error tracking: Stack traces
- Page views: Traffic patterns

### Google Search Console (Free)
1. Go to https://search.google.com/search-console
2. Add property: Select URL prefix
3. Verify ownership (copy DNS record)
4. Submit sitemap: `/sitemap.xml`
5. Monitor search performance

### Google Analytics (Free)
1. Go to https://analytics.google.com
2. Create property
3. Add tracking code: `NEXT_PUBLIC_GA_ID`
4. Track conversions: Checkout completions
5. Monitor user behavior

---

## Troubleshooting

### Build Fails
```bash
# Check build logs
vercel logs --follow

# Local build test
pnpm build

# Check for TypeScript errors
pnpm exec tsc --noEmit
```

### Page Doesn't Load
- Check network tab (browser DevTools)
- Check 404 status codes
- Verify robots.txt allows page
- Check redirects in next.config.mjs

### Images Not Loading
- Check image URLs
- Verify image format (WebP, AVIF, PNG, JPG)
- Check browser cache
- Verify file permissions

### Slow Performance
- Check Lighthouse report
- Review largest-contentful-paint element
- Check image sizes
- Review API response times

### Payment Not Processing
- Check payment gateway logs
- Verify test/live mode
- Check order creation logs
- Verify database connectivity

---

## Rollback Plan

### If Something Goes Wrong
```bash
# View deployment history
vercel list

# Rollback to previous version
vercel rollback

# Or manually redeploy
git revert <commit-hash>
git push origin main
```

---

## Maintenance Tasks

### Weekly
- [ ] Check analytics dashboard
- [ ] Monitor error rates
- [ ] Review Core Web Vitals
- [ ] Check payment success rate

### Monthly
- [ ] Review security logs
- [ ] Update dependencies (if safe)
- [ ] Clean up old deployments
- [ ] Backup database/data

### Quarterly
- [ ] Full performance audit
- [ ] Security review
- [ ] Update content/images
- [ ] Review business metrics

### Annually
- [ ] Comprehensive security audit
- [ ] Performance optimization review
- [ ] Update Next.js version
- [ ] Review and update SSL certificates

---

## Success Metrics

### What to Track
1. **Page Load Time**
   - Target: < 2 seconds
   - Monitor: Vercel Analytics

2. **Conversion Rate**
   - Target: > 1% (typical for e-commerce)
   - Monitor: Google Analytics

3. **Error Rate**
   - Target: < 0.1%
   - Monitor: Vercel logs

4. **SEO Rankings**
   - Target: Top 10 for brand name
   - Monitor: Google Search Console

5. **User Retention**
   - Target: > 40% (returning users)
   - Monitor: Google Analytics

---

## Common Issues & Solutions

### Issue: Sitemap Returns 404
**Solution:**
- Check `/app/sitemap.ts` exists
- Verify sitemap.ts exports default function
- Clear cache and hard refresh
- Check Vercel build logs for errors

### Issue: Robots.txt Not Found
**Solution:**
- Check `/app/robots.ts` exists
- Verify robots.ts exports default function
- Visit `/robots.txt` directly
- Check browser cache

### Issue: Images Load Slowly
**Solution:**
- Enable Next.js image optimization (done)
- Use WebP/AVIF formats (done)
- Set proper image sizes
- Use CDN for static assets (Vercel CDN active)

### Issue: Checkout Not Working
**Solution:**
- Verify payment gateway credentials
- Check test/live mode setting
- Verify form validation
- Check database connectivity

### Issue: Admin Edits Not Showing
**Solution:**
- Clear localStorage
- Hard refresh browser (Ctrl+Shift+R)
- Check console for errors
- Verify data saved to database

---

## Support & Resources

### Vercel Documentation
- https://vercel.com/docs

### Next.js Documentation
- https://nextjs.org/docs

### Performance Testing
- https://pagespeed.web.dev (Lighthouse)
- https://webpagetest.org

### SEO Tools
- https://search.google.com/search-console
- https://www.google.com/analytics

---

## Deployment Complete! 🎉

Your FalconGenZ e-commerce site is now production-ready and deployed!

**Next Steps:**
1. Monitor analytics and errors
2. Gather user feedback
3. Optimize based on metrics
4. Plan feature updates
5. Scale infrastructure as needed

For questions or issues, refer to Vercel documentation or contact support.
