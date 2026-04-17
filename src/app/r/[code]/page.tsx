import { redirect } from 'next/navigation';
import ReferralCapture from './ReferralCapture';

interface ReferralPageProps {
  params: {
    code: string;
  };
}

export default function ReferralPage({ params }: ReferralPageProps) {
  const { code } = params;

  // Validate referral code format (alphanumeric, 6-20 chars)
  const isValidCode = /^[a-zA-Z0-9]{6,20}$/.test(code);

  if (!isValidCode) {
    redirect('/');
  }

  return <ReferralCapture code={code} />;
}
