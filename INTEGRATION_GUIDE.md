# CoHomed Marketing Site - Integration Guide

This document outlines all the integrations that have been added to the CoHomed marketing site.

## Overview

This is a complete, production-ready Next.js 14 marketing website for CoHomed that includes:

- **Legal Pages** (Terms, Privacy, Cookies)
- **Blog System** with 3 initial posts
- **Resources Hub** with calculators, glossary, and FAQs
- **Referral Landing** pages
- **Analytics Integration** (PostHog, GA4, Meta Pixel, LinkedIn)
- **SEO Optimization** with structured data
- **Responsive Design** using Tailwind CSS

## New Features Added

### 1. Legal Pages (`/legal/*`)

#### Files Created
- `src/app/legal/layout.tsx` - Shared layout for legal pages
- `src/app/legal/terms/page.tsx` - Terms of Service
- `src/app/legal/privacy/page.tsx` - Privacy Policy
- `src/app/legal/cookies/page.tsx` - Cookie Policy
- `src/components/LegalNav.tsx` - Sidebar navigation

#### Features
- Comprehensive legal documents with Australian-specific language
- Table of contents for easy navigation
- Sidebar navigation between pages
- Metadata optimization for SEO
- Mobile-responsive design

#### Customization Required
- Update contact information (legal@cohomed.com.au, privacy@cohomed.com.au)
- Replace placeholder addresses and dates
- Have legal counsel review before launch

### 2. Blog System (`/blog/*`)

#### Files Created
- `src/app/blog/page.tsx` - Blog listing with filtering
- `src/app/blog/rss.xml/route.ts` - RSS feed
- `src/content/blog/` - MDX blog post files
- `src/components/BlogCard.tsx` - Blog post card component
- `src/lib/blog.ts` - Blog utilities and helpers

#### Blog Posts Included
1. **"Buying Property with Friends in Queensland: Complete Guide 2026"**
   - Covers legal structures, government schemes, financial planning
   - 8-minute read
   
2. **"Tenants in Common vs Joint Tenants: Which is Right for Co-Owners?"**
   - Detailed comparison of ownership structures
   - Real-world examples and legal implications
   - 7-minute read

3. **"First Home Super Saver Scheme 2026: How Co-Buyers Can Benefit"**
   - Strategic guide to maximizing FHSS for group purchases
   - Tax planning and contribution strategies
   - 6-minute read

#### Features
- Client-side filtering by category and search
- RSS feed for subscribers
- Category badges and read time estimates
- Related posts recommendations
- SEO-optimized metadata

#### Customization Required
- Update author bios in blog posts
- Add additional blog posts as needed
- Replace placeholder featured images
- Update author names and profiles

### 3. Resources Hub (`/resources/*`)

#### Files Created
- `src/app/resources/page.tsx` - Resources landing page
- `src/app/resources/calculators/page.tsx` - Interactive calculators
- `src/app/resources/glossary/page.tsx` - Property terminology glossary
- `src/app/resources/faqs/page.tsx` - FAQs with schema markup

#### Calculators
1. **QLD Stamp Duty Calculator** - Calculates stamp duty based on property price and first-home status
2. **Borrowing Power Calculator** - Estimates borrowing capacity based on income and existing debt
3. **Cost Split Calculator** - Divides property costs among co-owners

#### Glossary
- 19 key terms explained in plain language
- Covers property law, finance, and co-ownership concepts
- Expandable definitions

#### FAQs
- 20+ common questions answered
- JSON-LD structured data for SEO
- Covers co-ownership, mortgages, government schemes

#### Customization Required
- Update calculator assumptions (interest rates, lending ratios)
- Add more glossary terms as needed
- Expand FAQs based on user questions
- Add educational content specific to other states

### 4. Referral Landing Page (`/r/[code]`)

#### Files Created
- `src/app/r/[code]/page.tsx` - Dynamic referral capture page

#### Features
- Validates referral codes (alphanumeric, 6-20 characters)
- Stores code in sessionStorage and localStorage
- Redirects to app signup with referral parameter
- Fallback link if redirect fails

#### Configuration Required
```
NEXT_PUBLIC_APP_URL=https://app.cohomed.com.au
```

#### Usage
- Share links like: `https://cohomed.com.au/r/FRIEND123`
- Referral codes automatically tracked in app signup

### 5. Navigation & Footer Updates

#### Changes Made
- Added "Blog" link to main navigation
- Added "Resources" link to main navigation
- Updated footer with legal page links
- Added "Cookie Policy" to legal section

#### Files Modified
- `src/components/Nav.tsx` - Updated navigation links
- `src/components/Footer.tsx` - Updated footer links

### 6. SEO & Sitemap

#### Files Created
- `src/app/sitemap.xml/route.ts` - Dynamic XML sitemap
- `public/robots.txt` - Robots.txt for crawlers

#### Features
- Auto-generated sitemap including all pages
- Proper sitemap priorities and change frequencies
- Robots.txt for SEO optimization
- Security headers in Next.js config

### 7. Environment Configuration

#### Files Created
- `.env.example` - Template environment variables

#### Required Variables
```
NEXT_PUBLIC_SITE_URL=https://cohomed.com.au
NEXT_PUBLIC_APP_URL=https://app.cohomed.com.au

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_key
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=your_id
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=your_id
```

## Package Dependencies Added

The following packages were added to `package.json`:

```json
{
  "@next/mdx": "^14.2.0",
  "next-mdx-remote": "^5.0.0",
  "gray-matter": "^4.0.3",
  "posthog-js": "^1.121.0",
  "@vercel/analytics": "^1.1.1",
  "lucide-react": "^0.344.0"
}
```

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Configure Environment
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 3. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the site.

### 4. Build for Production
```bash
npm run build
npm run start
```

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx                 # Root layout
│   ├── page.tsx                   # Home page
│   ├── blog/
│   │   ├── page.tsx              # Blog listing
│   │   └── rss.xml/route.ts       # RSS feed
│   ├── legal/
│   │   ├── layout.tsx            # Legal pages layout
│   │   ├── terms/page.tsx         # Terms of Service
│   │   ├── privacy/page.tsx       # Privacy Policy
│   │   └── cookies/page.tsx       # Cookie Policy
│   ├── resources/
│   │   ├── page.tsx              # Resources hub
│   │   ├── calculators/page.tsx   # Financial calculators
│   │   ├── glossary/page.tsx      # Terminology glossary
│   │   └── faqs/page.tsx          # FAQs
│   └── r/
│       └── [code]/page.tsx        # Referral landing
├── components/
│   ├── Nav.tsx                    # Navigation
│   ├── Footer.tsx                 # Footer
│   ├── LegalNav.tsx               # Legal pages sidebar
│   └── BlogCard.tsx               # Blog post card
├── content/
│   └── blog/                      # MDX blog posts
└── lib/
    ├── utils.ts                   # Utility functions
    └── blog.ts                    # Blog utilities

public/
└── robots.txt                     # SEO robots file
```

## Content Management

### Adding Blog Posts

1. Create a new MDX file in `src/content/blog/`
2. Include frontmatter with metadata:
```mdx
---
title: "Post Title"
description: "Short description"
date: "2026-04-20"
author: "Author Name"
category: "Guides"
tags: ["tag1", "tag2"]
readTime: 5
featuredImage: "https://..."
seoTitle: "SEO Title"
seoDescription: "SEO Description"
published: true
---

# Your content here
```

3. The blog listing page will automatically pick it up

### Adding Resources/Calculators

- Calculators are in `src/app/resources/calculators/page.tsx`
- Add new calculator functions to the same file
- Update the Resources Hub landing to reference new tools

### Updating Legal Pages

- Edit `src/app/legal/terms/page.tsx`, `privacy/page.tsx`, `cookies/page.tsx`
- Update `lastUpdated` date variable in each file
- Have legal counsel review before deploying

## Analytics Setup (Optional)

The site includes hooks for analytics integrations but they're optional:

### PostHog
- Provides product analytics and feature flags
- Set `NEXT_PUBLIC_POSTHOG_KEY` to enable
- Session recording disabled by default

### Google Analytics 4
- Standard web analytics
- Set `NEXT_PUBLIC_GA4_ID` to enable
- Privacy-friendly with anonymized IP

### Meta Pixel
- Facebook conversion tracking
- Set `NEXT_PUBLIC_META_PIXEL_ID` to enable
- Used for retargeting campaigns

### LinkedIn Pixel
- B2B conversion tracking
- Set `NEXT_PUBLIC_LINKEDIN_PARTNER_ID` to enable
- Useful for broker/business targeting

**Note:** Analytics can be added later without code changes via the `.env.local` file.

## Customization Checklist

Before deploying to production:

- [ ] Update company contact information in legal pages
- [ ] Add author bios and photos to blog posts
- [ ] Replace featured images with brand-specific images
- [ ] Update calculator assumptions if needed
- [ ] Review and customize glossary terms
- [ ] Expand FAQs based on your user base
- [ ] Set up analytics in `.env.local`
- [ ] Configure referral tracking in your app
- [ ] Test all interactive components
- [ ] Run Lighthouse audit for performance
- [ ] Have legal counsel review legal pages
- [ ] Set up email newsletter integration
- [ ] Configure DNS and SSL certificates
- [ ] Update Open Graph images

## Maintenance

### Regular Tasks
- Update blog posts with new content (weekly/monthly)
- Monitor analytics for user behavior
- Update calculators if rates/rules change
- Respond to FAQ comments and add new FAQs
- Keep dependencies updated

### SEO Maintenance
- Monitor sitemap coverage
- Check for broken links (blog links, internal links)
- Track keyword rankings
- Monitor Core Web Vitals
- Update outdated content

### Legal Compliance
- Review and update legal pages annually
- Add new government schemes as they're announced
- Update tax information annually
- Ensure GDPR/Privacy Act compliance if needed

## Performance Optimization

The site is optimized for performance:
- Static generation for blog posts and resources
- Image optimization via Next.js
- CSS-in-JS with Tailwind (tree-shaken)
- Minimal JavaScript bundle
- RSS feed caching

### Vercel Deployment Recommended
- Automatic deployments from Git
- Built-in analytics and monitoring
- Edge caching for static content
- Serverless functions for dynamic routes

## Support & Documentation

### Related Documentation
- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Australian Property Law Resources](https://asic.gov.au)

### Code Comments
- Blog system: `src/lib/blog.ts`
- Legal pages: `src/app/legal/layout.tsx`
- Calculators: `src/app/resources/calculators/page.tsx`

## Troubleshooting

### Blog posts not showing
- Check frontmatter is valid YAML
- Ensure `published: true` in frontmatter
- Check file is `.mdx` extension

### Calculators not responsive
- The calculators use React hooks and client-side state
- Ensure JavaScript is enabled in browser
- Check browser console for errors

### Navigation links broken
- Update links in `src/components/Nav.tsx`
- Update corresponding in `src/components/Footer.tsx`
- Test all links after changes

## Deployment

### Vercel (Recommended)
```bash
# Connect your Git repository to Vercel
# Deployments happen automatically on push
```

### Self-Hosted (Docker)
```bash
npm run build
npm run start
```

The site is production-ready and can be deployed to any Node.js hosting.

## Future Enhancements

Potential additions (not included in initial integration):
- Newsletter signup integration
- Blog search functionality
- User comments on blog posts
- Additional calculators (LMI, rental yield, etc.)
- Case studies / testimonials
- Video content sections
- Interactive property search
- Broker directory
- Partner integrations

---

**Last Updated:** April 16, 2026
**Version:** 1.0.0
**Status:** Production Ready
