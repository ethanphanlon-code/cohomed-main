import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculators | CoHomed',
  description: 'Free calculators for stamp duty, borrowing power, and cost splitting.',
};

export default function CalculatorsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
