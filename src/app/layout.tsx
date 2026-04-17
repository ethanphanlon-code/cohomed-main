import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CoHomed — Stop renting someone else\'s dream.',
  description: 'CoHomed helps housemates buy a home together. Pool your resources, split ownership fairly, and turn the rent you\'re already paying into a home you actually own.',
  keywords: ['co-ownership', 'co-buying', 'tenants in common', 'shared home ownership', 'buy with friends', 'Australia', 'Queensland', 'first home buyer'],
  openGraph: {
    title: 'CoHomed — Stop renting someone else\'s dream.',
    description: 'Buy a home with your housemates. CoHomed makes co-ownership simple, transparent, and fair.',
    url: 'https://cohomed.com',
    siteName: 'CoHomed',
    locale: 'en_AU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CoHomed — Stop renting someone else\'s dream.',
    description: 'Buy a home with your housemates. CoHomed makes co-ownership simple, transparent, and fair.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="grain">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
