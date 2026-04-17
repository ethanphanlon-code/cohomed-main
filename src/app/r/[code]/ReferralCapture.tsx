'use client';

import { useEffect } from 'react';

export default function ReferralCapture({ code }: { code: string }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store referral code
      sessionStorage.setItem('referral_code', code);
      localStorage.setItem('referral_code', code);

      // Redirect to app store or signup page
      const appUrl =
        process.env.NEXT_PUBLIC_APP_URL || 'https://app.cohomed.com.au';
      const signupUrl = `${appUrl}?ref=${encodeURIComponent(code)}`;
      window.location.href = signupUrl;
    }
  }, [code]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="text-4xl mb-4">🚀</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Redirecting you to CoHomed...
        </h1>
        <p className="text-gray-600">
          If you're not redirected automatically, please{' '}
          <a
            href={`${process.env.NEXT_PUBLIC_APP_URL || 'https://app.cohomed.com.au'}?ref=${encodeURIComponent(code)}`}
            className="text-teal-600 hover:underline font-medium"
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}
