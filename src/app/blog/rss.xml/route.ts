import { generateRSSFeed } from '@/lib/blog';
import { BlogPost } from '@/lib/blog';

// Sample blog posts - in production these would be loaded from MDX files
const SAMPLE_POSTS: BlogPost[] = [
  {
    slug: 'buying-property-with-friends-queensland-2026',
    title: 'Buying Property with Friends in Queensland: Complete Guide 2026',
    description: 'Everything you need to know about co-ownership with friends in Queensland, from legal structures to managing finances and government schemes.',
    date: '2026-04-15',
    author: 'Sarah Mitchell',
    category: 'Guides',
    tags: ['co-ownership', 'friends', 'Queensland', 'legal'],
    readTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop',
    seoTitle: 'Buying Property with Friends in Queensland 2026 | CoHomed',
    seoDescription: 'Complete guide to co-ownership in Queensland.',
    published: true,
    content: 'When purchasing property with friends in Queensland...',
  },
  {
    slug: 'tenants-in-common-vs-joint-tenants',
    title: 'Tenants in Common vs Joint Tenants: Which is Right for Co-Owners?',
    description: 'Understand the key differences between tenants in common and joint tenancy.',
    date: '2026-04-10',
    author: 'James Thompson',
    category: 'Legal',
    tags: ['property law', 'co-ownership', 'legal structures'],
    readTime: 7,
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=630&fit=crop',
    seoTitle: 'Tenants in Common vs Joint Tenants | Complete Comparison',
    seoDescription: 'Compare tenants in common and joint tenancy ownership structures.',
    published: true,
    content: 'When multiple people own a property together in Australia...',
  },
  {
    slug: 'first-home-super-saver-scheme-2026',
    title: 'First Home Super Saver Scheme 2026: How Co-Buyers Can Benefit',
    description: 'Learn how the First Home Super Saver Scheme works in 2026 and how co-buying groups can use it to boost their deposit savings.',
    date: '2026-04-05',
    author: 'Emma Jones',
    category: 'Finance',
    tags: ['first home buyer', 'super', 'savings scheme', 'deposits'],
    readTime: 6,
    featuredImage: 'https://images.unsplash.com/photo-1521018221115-6ba36dd0f376?w=1200&h=630&fit=crop',
    seoTitle: 'First Home Super Saver Scheme 2026 | Co-Buyer Guide',
    seoDescription: 'How the FHSS works for co-buyers in 2026.',
    published: true,
    content: 'The First Home Super Saver Scheme (FHSS) is a government program...',
  },
];

export async function GET() {
  const feed = generateRSSFeed(SAMPLE_POSTS);
  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
