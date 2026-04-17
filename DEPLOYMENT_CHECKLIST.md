# CoHomed Marketing Site - Deployment Checklist

## Pre-Deployment (Before Going Live)

### Code & Configuration
- [ ] All environment variables configured in `.env.local`
- [ ] Analytics keys added (PostHog, GA4, Meta Pixel, LinkedIn)
- [ ] Referral tracking configured in app
- [ ] Database connections verified (if using backend)
- [ ] Email service configured (for contact forms)
- [ ] SSL certificate installed
- [ ] Domain DNS records configured
- [ ] Git repository initialized and committed

### Content Customization
- [ ] Legal pages reviewed by counsel
- [ ] Company contact information updated
- [ ] Social media links added
- [ ] Author bios updated on blog posts
- [ ] Featured images replaced with branded images
- [ ] Calculator assumptions verified
- [ ] Glossary terms relevant to target market
- [ ] FAQ questions match user inquiries

### Testing
- [ ] All pages load without errors
- [ ] Blog filtering and search working
- [ ] Calculators functional on all browsers
- [ ] Responsive design tested (mobile, tablet, desktop)
- [ ] Forms submission working
- [ ] Analytics events firing
- [ ] RSS feed valid (validate with validator.w3.org)
- [ ] Sitemap.xml accessible and valid
- [ ] All internal links working
- [ ] External links opening correctly

### SEO
- [ ] Sitemap submitted to Google Search Console
- [ ] Sitemap submitted to Bing Webmaster
- [ ] Robots.txt verified
- [ ] Meta tags present on all pages
- [ ] Open Graph images configured
- [ ] Canonical tags correct
- [ ] Schema markup validated
- [ ] Page titles unique and descriptive
- [ ] Meta descriptions present and compelling

### Performance
- [ ] Lighthouse score 90+ (Google)
- [ ] Core Web Vitals optimized
- [ ] Page load time < 3 seconds
- [ ] Images optimized (compressed, lazy-loaded)
- [ ] CSS/JS minified
- [ ] Caching headers configured
- [ ] CDN configured (if applicable)

### Security
- [ ] HTTPS enforced
- [ ] Security headers set
- [ ] X-Frame-Options configured
- [ ] X-Content-Type-Options set
- [ ] X-XSS-Protection enabled
- [ ] No console errors or warnings
- [ ] No sensitive data in code
- [ ] Dependencies up-to-date
- [ ] CORS properly configured

### Analytics & Monitoring
- [ ] Google Analytics 4 verified
- [ ] PostHog events confirmed
- [ ] Meta Pixel working
- [ ] LinkedIn tracking active
- [ ] Error tracking (Sentry, etc.) configured
- [ ] Uptime monitoring configured
- [ ] Backup system in place
- [ ] Log aggregation working (if applicable)

### Documentation
- [ ] README updated
- [ ] INTEGRATION_GUIDE.md complete
- [ ] Environment variables documented
- [ ] Deployment process documented
- [ ] Contact person identified for support
- [ ] Escalation procedures defined

---

## Post-Deployment (After Launch)

### Day 1
- [ ] Site is live and accessible
- [ ] Analytics showing traffic
- [ ] No error reports from users
- [ ] Contact forms receiving submissions
- [ ] Email notifications working
- [ ] All pages displaying correctly
- [ ] Navigation working smoothly

### Week 1
- [ ] Monitor analytics daily
- [ ] Check Google Search Console for crawl errors
- [ ] Monitor error logs
- [ ] Verify email delivery
- [ ] Check mobile usability
- [ ] Monitor Core Web Vitals
- [ ] Review error tracking reports
- [ ] Engage with early users

### Month 1
- [ ] Analyze traffic patterns
- [ ] Review user behavior in analytics
- [ ] Check ranking for target keywords
- [ ] Update FAQ based on inquiries
- [ ] Fix any reported issues
- [ ] Optimize underperforming pages
- [ ] Plan content calendar for blogs
- [ ] Review referral performance

### Ongoing
- [ ] Monitor analytics weekly
- [ ] Publish blog posts on schedule
- [ ] Update calculator rates as needed
- [ ] Respond to user inquiries
- [ ] Monitor SEO performance
- [ ] Update dependencies monthly
- [ ] Back up content regularly
- [ ] Review security logs
- [ ] A/B test high-traffic pages

---

## Deployment Platforms

### Vercel (Recommended)
```bash
# Installation
npm install -g vercel

# Deployment
vercel --prod

# Environment variables
vercel env add NEXT_PUBLIC_POSTHOG_KEY
vercel env add NEXT_PUBLIC_GA4_ID
# ... add all required variables
```

**Advantages:**
- Zero-config deployment
- Automatic HTTPS
- CDN included
- Analytics included
- Git integration
- Automatic previews
- Serverless functions

### AWS Amplify
```bash
# Installation
npm install -g @aws-amplify/cli

# Deployment
amplify add hosting
amplify publish

# Environment variables via AWS Console
```

**Advantages:**
- AWS ecosystem
- Auto scaling
- Multiple regions
- Custom domain
- Git integration

### Docker (Self-Hosted)
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t cohomed-site .
docker run -p 3000:3000 -e NEXT_PUBLIC_POSTHOG_KEY=xxx cohomed-site
```

**Advantages:**
- Full control
- Custom infrastructure
- Cost control
- Flexibility

---

## Rollback Plan

If issues occur after deployment:

### Immediate Actions (Minutes)
1. Check error logs
2. Verify environment variables
3. Check database connectivity
4. Monitor Core Web Vitals
5. Check analytics for anomalies

### Rollback (if needed)
```bash
# Vercel - automatic rollback
vercel rollback

# Git - revert to previous commit
git revert HEAD

# Manual - restore from backup
```

### Post-Rollback
1. Investigate root cause
2. Fix issue in development
3. Test thoroughly
4. Re-deploy with fixes
5. Notify stakeholders

---

## Monitoring Tools

### Recommended Services
- **Google Search Console** - SEO monitoring
- **Google Analytics 4** - Traffic analysis
- **Sentry** - Error tracking
- **UptimeRobot** - Uptime monitoring
- **Cloudflare** - DDoS protection & CDN
- **AWS CloudWatch** - Application monitoring
- **New Relic** - Performance monitoring

### Logs to Monitor
- Application errors
- 404 errors
- 5xx server errors
- API failures
- Analytics events
- Failed form submissions
- Security alerts

---

## Performance Targets

Aim for these metrics:

| Metric | Target | Tool |
|--------|--------|------|
| Largest Contentful Paint | < 2.5s | Core Web Vitals |
| First Input Delay | < 100ms | Core Web Vitals |
| Cumulative Layout Shift | < 0.1 | Core Web Vitals |
| Page Load Time | < 3s | Lighthouse |
| Lighthouse Score | > 90 | Google Lighthouse |
| Time to First Byte | < 600ms | WebPageTest |
| TTFB | < 200ms | Cloudflare Analytics |

---

## Support Contacts

Document these before launch:

- **Technical Support:** [your contact]
- **Security Issues:** [security contact]
- **Performance Issues:** [performance contact]
- **Content Updates:** [content contact]
- **Analytics/Reporting:** [analytics contact]
- **Escalation:** [manager contact]

---

## Disaster Recovery

### Data Backup
- [ ] Code backed up to GitHub
- [ ] Database backed up daily (if applicable)
- [ ] Content backed up weekly
- [ ] Environment variables documented
- [ ] Disaster recovery plan documented

### Disaster Response Plan
1. Assess situation
2. Notify stakeholders
3. Implement backup/restore
4. Verify restoration
5. Document incident
6. Implement preventive measures

---

## Go-Live Announcement

Once deployed, announce across channels:

- [ ] Email announcement to users
- [ ] Social media posts
- [ ] Blog post about launch
- [ ] Press release (if applicable)
- [ ] Update documentation
- [ ] Update support resources
- [ ] Team training on new features

---

**Last Updated:** April 16, 2026
**Site:** https://cohomed.com.au
**Deployment Platform:** [Add your choice]
