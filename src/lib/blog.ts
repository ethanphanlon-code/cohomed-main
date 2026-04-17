/**
 * Blog content management utilities
 */

export interface BlogPostFrontmatter {
  title: string;
  description: string;
  date: string;
  author: string;
  category: 'Guides' | 'News' | 'Legal' | 'Finance' | 'Property';
  tags: string[];
  readTime: number;
  featuredImage: string;
  seoTitle: string;
  seoDescription: string;
  published: boolean;
}

export interface BlogPost extends BlogPostFrontmatter {
  slug: string;
  content: string;
}

export interface ResourceGuide {
  id: string;
  title: string;
  description: string;
  slug: string;
  content: string;
  icon: string;
}

/**
 * Generate RSS feed XML for blog posts
 */
export function generateRSSFeed(posts: BlogPost[]): string {
  const baseUrl = 'https://cohomed.com.au';
  const rssItems = posts
    .map(
      (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid>${baseUrl}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>${escapeXml(post.author)}</author>
      <category>${post.category}</category>
    </item>
  `
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
  <channel>
    <title>CoHomed Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Co-ownership guides, legal insights, and property tips</description>
    <language>en-au</language>
    ${rssItems}
  </channel>
</rss>`;
}

function escapeXml(str: string): string {
  return str.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case "'":
        return '&apos;';
      case '"':
        return '&quot;';
      default:
        return c;
    }
  });
}

/**
 * Generate Article schema for SEO
 */
export function generateArticleSchema(post: BlogPost): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle,
    description: post.seoDescription,
    image: post.featuredImage,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'CoHomed',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cohomed.com.au/logo.png',
      },
    },
  };
}

/**
 * Generate FAQ schema for SEO
 */
export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Breadcrumb schema for SEO
 */
export function generateBreadcrumbSchema(
  path: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: path.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
