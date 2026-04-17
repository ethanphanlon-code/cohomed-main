'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function LegalNav() {
  const pathname = usePathname();

  const links = [
    { href: '/legal/terms', label: 'Terms of Service' },
    { href: '/legal/privacy', label: 'Privacy Policy' },
    { href: '/legal/cookies', label: 'Cookie Policy' },
  ];

  return (
    <nav className="space-y-1">
      <h3 className="text-sm font-semibold text-gray-900 mb-4">Legal Pages</h3>
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
              isActive
                ? 'bg-teal-50 text-teal-600 font-medium border-l-4 border-teal-600'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
