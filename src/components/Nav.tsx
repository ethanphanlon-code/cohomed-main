'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/resources', label: 'Resources' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 md:mx-8 mt-4">
        <nav className="bg-white/90 backdrop-blur-xl rounded-2xl border border-cream-200 shadow-sm px-6 py-3.5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-teal-500 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:shadow-teal-500/20 transition-shadow">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div>
            <span className="font-display text-xl font-semibold text-teal-900 tracking-tight">
              CoHomed
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  pathname === href
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-teal-800/60 hover:text-teal-800 hover:bg-cream-100'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a href="#download" className="btn-primary text-sm py-2.5 px-5">
              Get the App
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 -mr-2 text-teal-800"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>
              ) : (
                <><line x1="4" y1="8" x2="20" y2="8"/><line x1="4" y1="16" x2="20" y2="16"/></>
              )}
            </svg>
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mx-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl border border-cream-200 shadow-lg p-4 space-y-1">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                pathname === href
                  ? 'bg-teal-50 text-teal-700'
                  : 'text-teal-800/60 hover:bg-cream-100'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="pt-2">
            <a href="#download" onClick={() => setMobileOpen(false)} className="btn-primary w-full justify-center text-sm py-3">
              Get the App
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
