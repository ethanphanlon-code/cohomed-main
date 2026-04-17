import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CoHomed',
  description: 'CoHomed Privacy Policy',
};

const lastUpdated = '2026-04-16';

export default function PrivacyPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: {formatDate(lastUpdated)}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-100 rounded-lg p-6 mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Table of Contents
        </h2>
        <ol className="space-y-2 text-sm text-teal-600">
          <li>
            <a href="#1-introduction">1. Introduction</a>
          </li>
          <li>
            <a href="#2-information-we-collect">2. Information We Collect</a>
          </li>
          <li>
            <a href="#3-how-we-use-information">3. How We Use Information</a>
          </li>
          <li>
            <a href="#4-data-sharing">4. Data Sharing and Disclosure</a>
          </li>
          <li>
            <a href="#5-data-retention">5. Data Retention</a>
          </li>
          <li>
            <a href="#6-data-security">6. Data Security</a>
          </li>
          <li>
            <a href="#7-your-rights">7. Your Rights</a>
          </li>
          <li>
            <a href="#8-cookies">8. Cookies and Tracking</a>
          </li>
          <li>
            <a href="#9-children">9. Children's Privacy</a>
          </li>
          <li>
            <a href="#10-contact-us">10. Contact Us</a>
          </li>
        </ol>
      </div>

      <h2 id="1-introduction" className="text-2xl font-bold mt-8 mb-4">
        1. Introduction
      </h2>
      <p>
        CoHomed ("we," "us," "our," or "Company") operates the cohomed.com.au
        website and services (the "Service"). This Privacy Policy explains how
        we collect, use, disclose, and safeguard your information when you
        visit our website and use our services.
      </p>

      <h2 id="2-information-we-collect" className="text-2xl font-bold mt-8 mb-4">
        2. Information We Collect
      </h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        2.1 Information You Provide Directly
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Account Registration:</strong> Name, email address, phone
          number, and password
        </li>
        <li>
          <strong>Profile Information:</strong> Address, property details,
          preferences, and communication settings
        </li>
        <li>
          <strong>Payment Information:</strong> Processed securely by Stripe;
          we do not store full credit card details
        </li>
        <li>
          <strong>Communication:</strong> Messages, support requests, and
          feedback
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        2.2 Information Collected Automatically
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Usage Data:</strong> Pages visited, time spent, clicks, and
          interactions
        </li>
        <li>
          <strong>Device Information:</strong> IP address, browser type,
          operating system, device ID
        </li>
        <li>
          <strong>Cookies and Similar Technologies:</strong> First-party and
          third-party cookies for analytics and functionality
        </li>
        <li>
          <strong>Location Data:</strong> General location based on IP address
          (not GPS)
        </li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">
        2.3 Information from Third Parties
      </h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Service Providers:</strong> Payment processors, email services,
          and analytics platforms
        </li>
        <li>
          <strong>Public Records:</strong> Property data and compliance checks
        </li>
        <li>
          <strong>Social Media:</strong> If you link your social account
        </li>
      </ul>

      <h2 id="3-how-we-use-information" className="text-2xl font-bold mt-8 mb-4">
        3. How We Use Information
      </h2>
      <p>We use your information to:</p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Provide, maintain, and improve the Service</li>
        <li>Process transactions and send transactional emails</li>
        <li>Personalize your experience and send marketing communications</li>
        <li>Conduct research and analytics to improve our offerings</li>
        <li>Detect fraud, prevent abuse, and enforce our Terms of Service</li>
        <li>Comply with legal obligations and respond to legal requests</li>
        <li>Send promotional emails (with your consent; unsubscribe anytime)</li>
      </ul>

      <h2 id="4-data-sharing" className="text-2xl font-bold mt-8 mb-4">
        4. Data Sharing and Disclosure
      </h2>
      <p>
        We do not sell or rent your personal information. We may share data
        with:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Service Providers:</strong> Payment processors (Stripe),
          email services (Resend), analytics (PostHog)
        </li>
        <li>
          <strong>Legal Requirements:</strong> Law enforcement, government
          agencies, or court orders
        </li>
        <li>
          <strong>Business Transfers:</strong> In event of merger, acquisition,
          or bankruptcy
        </li>
        <li>
          <strong>User Consent:</strong> With your explicit permission for
          specific purposes
        </li>
      </ul>

      <p className="mt-4">
        All third-party service providers are bound by confidentiality agreements
        and use data only as needed to provide services.
      </p>

      <h2 id="5-data-retention" className="text-2xl font-bold mt-8 mb-4">
        5. Data Retention
      </h2>
      <p>
        We retain personal information for as long as necessary to provide the
        Service and comply with legal obligations:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Account Data:</strong> Retained for duration of account plus
          3 years for legal/tax compliance
        </li>
        <li>
          <strong>Transaction Records:</strong> 7 years (Australian tax law)
        </li>
        <li>
          <strong>Analytics/Cookies:</strong> Typically 12 months
        </li>
        <li>
          <strong>Marketing Communications:</strong> Until you unsubscribe
        </li>
      </ul>

      <p className="mt-4">
        You may request deletion of your data subject to legal retention
        requirements.
      </p>

      <h2 id="6-data-security" className="text-2xl font-bold mt-8 mb-4">
        6. Data Security
      </h2>
      <p>
        We implement industry-standard security measures to protect your
        information:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>SSL/TLS encryption for data in transit</li>
        <li>AES-256 encryption for data at rest</li>
        <li>Secure authentication with password hashing</li>
        <li>Regular security audits and penetration testing</li>
        <li>Restricted access to personal data (need-to-know basis)</li>
      </ul>

      <p className="mt-4">
        While we strive to protect your data, no method is 100% secure. You are
        responsible for maintaining the confidentiality of your account
        credentials.
      </p>

      <h2 id="7-your-rights" className="text-2xl font-bold mt-8 mb-4">
        7. Your Rights
      </h2>
      <p>
        Under Australian privacy law and GDPR (if applicable), you have the
        right to:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Access:</strong> Request a copy of your personal information
        </li>
        <li>
          <strong>Correction:</strong> Request corrections to inaccurate data
        </li>
        <li>
          <strong>Deletion:</strong> Request erasure of your data (subject to
          legal holds)
        </li>
        <li>
          <strong>Opt-Out:</strong> Unsubscribe from marketing communications
        </li>
        <li>
          <strong>Portability:</strong> Receive your data in a machine-readable
          format
        </li>
        <li>
          <strong>Withdraw Consent:</strong> Withdraw consent to data processing
        </li>
      </ul>

      <p className="mt-4">
        To exercise these rights, contact us at privacy@cohomed.com.au. We will
        respond within 30 days.
      </p>

      <h2 id="8-cookies" className="text-2xl font-bold mt-8 mb-4">
        8. Cookies and Tracking
      </h2>
      <p>
        We use cookies and similar tracking technologies. See our{' '}
        <Link href="/legal/cookies" className="text-teal-600 hover:underline">
          Cookie Policy
        </Link>{' '}
        for details on cookie usage, categories, and how to manage preferences.
      </p>

      <h2 id="9-children" className="text-2xl font-bold mt-8 mb-4">
        9. Children's Privacy
      </h2>
      <p>
        The Service is not intended for children under 13 (or applicable local
        age of digital consent). We do not knowingly collect personal
        information from children under 13. If we become aware of such
        collection, we will delete the information and notify you.
      </p>

      <h2 id="10-contact-us" className="text-2xl font-bold mt-8 mb-4">
        10. Contact Us
      </h2>
      <p>
        For privacy questions, data access requests, or to exercise your rights:
      </p>
      <div className="bg-gray-100 rounded-lg p-4 mt-4">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@cohomed.com.au">privacy@cohomed.com.au</a>
        </p>
        <p className="mt-2">
          <strong>Mailing Address:</strong> CoHomed, PO Box [ADDRESS], Australia
        </p>
        <p className="mt-2">
          <strong>Data Protection Officer:</strong> Contact through above email
        </p>
      </div>
    </>
  );
}
