'use client';

import { BlogCard } from '@/components/BlogCard';
import { BlogPost } from '@/lib/blog';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
    seoDescription: 'Complete guide to co-ownership in Queensland. Learn about tenants in common, legal agreements, and available government schemes for group purchases.',
    published: true,
    content: 'When purchasing property with friends in Queensland...',
  },
  {
    slug: 'tenants-in-common-vs-joint-tenants',
    title: 'Tenants in Common vs Joint Tenants: Which is Right for Co-Owners?',
    description: 'Understand the key differences between tenants in common and joint tenancy. Learn which structure protects your interests when buying property with friends.',
    date: '2026-04-10',
    author: 'James Thompson',
    category: 'Legal',
    tags: ['property law', 'co-ownership', 'legal structures'],
    readTime: 7,
    featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=1200&h=630&fit=crop',
    seoTitle: 'Tenants in Common vs Joint Tenants | Complete Comparison',
    seoDescription: 'Compare tenants in common and joint tenancy ownership structures. Discover which is best for co-owners and friend groups buying property together.',
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
    seoDescription: 'How the FHSS works for co-buyers in 2026. Maximize your deposit and reach homeownership faster with this government scheme.',
    published: true,
    content: 'The First Home Super Saver Scheme (FHSS) is a government program...',
  },
];

interface CategoryFilter {
  [key: string]: boolean;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>(SAMPLE_POSTS);
  const [filtered, setFiltered] = useState<BlogPost[]>(SAMPLE_POSTS);
  const [activeFilters, setActiveFilters] = useState<CategoryFilter>({});
  const [searchQuery, setSearchQuery] = useState('');

  const categories = Array.from(new Set(posts.map((p) => p.category)));

  useEffect(() => {
    let result = posts;

    // Filter by category
    const activeCategories = Object.entries(activeFilters)
      .filter(([_, v]) => v)
      .map(([k, _]) => k);

    if (activeCategories.length > 0) {
      result = result.filter((p) => activeCategories.includes(p.category));
    }

    // Filter by search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }

    setFiltered(result);
  }, [activeFilters, searchQuery, posts]);

  const toggleFilter = (category: string) => {
    setActiveFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            CoHomed Blog
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Guides, legal insights, and property tips for co-owners. Learn everything you need to know about buying property with friends.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-100"
          />
        </div>

        {/* Category Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => toggleFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilters[category]
                  ? 'bg-teal-600 text-white'
                  : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found matching your search.</p>
          </div>
        )}

        {/* RSS Feed */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Subscribe to our blog</p>
          <Link
            href="/blog/rss.xml"
            className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="6" cy="18" r="2" />
              <path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16" />
            </svg>
            RSS Feed
          </Link>
        </div>
      </div>
    </div>
  );
}
