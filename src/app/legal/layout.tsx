import Link from 'next/link';
import { LegalNav } from '@/components/LegalNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Legal | CoHomed',
  description: 'Terms of Service, Privacy Policy, and Cookie Policy for CoHomed',
};

export default function LegalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-2xl font-bold text-teal-600">
            CoHomed
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="md:col-span-1">
            <div className="sticky top-24">
              <LegalNav />
            </div>
          </aside>

          {/* Main Content */}
          <main className="md:col-span-3">
            <article className="prose prose-sm max-w-none prose-headings:text-gray-900 prose-a:text-teal-600 hover:prose-a:text-teal-700 prose-p:text-gray-700 prose-li:text-gray-700">
              {children}
            </article>
          </main>
        </div>
      </div>
    </div>
  );
}
