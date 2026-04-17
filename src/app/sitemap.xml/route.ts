export async function GET() {
  const baseUrl = 'https://cohomed.com.au';

  const staticPages = [
    '',
    '/how-it-works',
    '/about',
    '/contact',
    '/faq',
    '/blog',
    '/resources',
    '/resources/calculators',
    '/resources/glossary',
    '/resources/faqs',
    '/legal/terms',
    '/legal/privacy',
    '/legal/cookies',
  ];

  const blogPosts = [
    '/blog/buying-property-with-friends-queensland-2026',
    '/blog/tenants-in-common-vs-joint-tenants',
    '/blog/first-home-super-saver-scheme-2026',
  ];

  const allPages = [...staticPages, ...blogPosts];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map((page) => {
      const url = `${baseUrl}${page}`;
      const lastMod = new Date().toISOString().split('T')[0];
      const priority = page === '' ? '1.0' : page.includes('/blog') ? '0.7' : '0.8';

      return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastMod}</lastmod>
    <priority>${priority}</priority>
    <changefreq>${page.includes('/blog') ? 'weekly' : 'monthly'}</changefreq>
  </url>`;
    })
    .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
