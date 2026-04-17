import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resources & Guides | CoHomed',
  description: 'Free tools, calculators, guides, and resources for co-owners. Learn about property law, government schemes, and financial planning.',
};

const resources = [
  {
    icon: '📋',
    title: 'Guides',
    description: 'In-depth guides covering co-ownership, legal structures, and government schemes.',
    href: '/blog',
    color: 'bg-blue-50 border-blue-200',
    badge: '3 guides',
  },
  {
    icon: '🧮',
    title: 'Calculators',
    description: 'Interactive tools to calculate stamp duty, borrowing power, and cost splits.',
    href: '/resources/calculators',
    color: 'bg-teal-50 border-teal-200',
    badge: '3 tools',
  },
  {
    icon: '📚',
    title: 'Glossary',
    description: 'Property and finance terminology explained in plain language.',
    href: '/resources/glossary',
    color: 'bg-purple-50 border-purple-200',
    badge: '50+ terms',
  },
  {
    icon: '❓',
    title: 'FAQs',
    description: 'Common questions about co-ownership, mortgages, and the buying process.',
    href: '/resources/faqs',
    color: 'bg-amber-50 border-amber-200',
    badge: '30+ Q&As',
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Resources & Tools
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to make informed decisions about co-ownership. Free calculators, guides, and reference materials.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {resources.map((resource) => (
            <Link
              key={resource.href}
              href={resource.href}
              className={`p-8 rounded-2xl border-2 transition-all hover:shadow-lg ${resource.color}`}
            >
              <div className="mb-4 text-4xl">{resource.icon}</div>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-gray-900">{resource.title}</h3>
                <span className="text-xs font-semibold text-teal-600 bg-white px-3 py-1 rounded-full">
                  {resource.badge}
                </span>
              </div>
              <p className="text-gray-600">{resource.description}</p>
              <div className="mt-4 flex items-center text-teal-600 font-medium">
                Explore
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-teal-50 rounded-2xl p-8 md:p-12 border border-teal-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Getting Started with Co-ownership
          </h2>
          <p className="text-gray-700 mb-6">
            Whether you're exploring co-ownership for the first time or preparing to buy, our resources guide you through every step:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">1.</span>
              <span>
                <strong>Learn the basics</strong> - Understand different ownership structures and how they work
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">2.</span>
              <span>
                <strong>Calculate your numbers</strong> - Use our tools to see what you can afford and save
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">3.</span>
              <span>
                <strong>Explore government schemes</strong> - Discover grants, stamp duty concessions, and other benefits
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-teal-600 font-bold mt-1">4.</span>
              <span>
                <strong>Get legal advice</strong> - Understand your rights and obligations before buying
              </span>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">Ready to take the next step?</p>
          <Link
            href="/"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Download CoHomed App
          </Link>
        </div>
      </div>
    </div>
  );
}
