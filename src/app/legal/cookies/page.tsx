import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy | CoHomed',
  description: 'CoHomed Cookie Policy',
};

const lastUpdated = '2026-04-16';

export default function CookiesPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-500">
          Last updated: {formatDate(lastUpdated)}
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">What Are Cookies?</h2>
      <p>
        Cookies are small text files stored on your device (computer, phone,
        tablet) when you visit a website. They help websites remember you and
        personalize your experience. Cookies can be either "session cookies"
        (deleted when you close your browser) or "persistent cookies" (stored
        for longer periods).
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Cookies We Use</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Essential Cookies</h3>
      <p>
        These cookies are necessary for the website to function. They enable
        basic functions like page navigation and access to secure areas. Without
        these cookies, the website cannot function properly.
      </p>
      <table className="w-full border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Cookie Name
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Purpose
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              supabase.auth.token
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Authentication session
            </td>
            <td className="border border-gray-300 px-4 py-2">Session/30 days</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              __Secure-next-auth.session-token
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Login session maintenance
            </td>
            <td className="border border-gray-300 px-4 py-2">30 days</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">
              csrf_token
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Security: prevent CSRF attacks
            </td>
            <td className="border border-gray-300 px-4 py-2">Session</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-3">Analytics Cookies</h3>
      <p>
        These cookies help us understand how you use our website. They collect
        information about pages visited, time spent, and interactions. This data
        helps us improve user experience.
      </p>
      <table className="w-full border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Service
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Cookies
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Purpose
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">PostHog</td>
            <td className="border border-gray-300 px-4 py-2">
              ph_session, ph_device_id
            </td>
            <td className="border border-gray-300 px-4 py-2">
              Product analytics, feature tracking
            </td>
            <td className="border border-gray-300 px-4 py-2">12 months</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-3">Marketing Cookies</h3>
      <p>
        These cookies track your activity to deliver personalized marketing
        content and measure campaign effectiveness. You can opt out of these
        cookies.
      </p>
      <table className="w-full border border-gray-300 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Service
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Purpose
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              Duration
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Google Ads</td>
            <td className="border border-gray-300 px-4 py-2">
              Conversion tracking and remarketing
            </td>
            <td className="border border-gray-300 px-4 py-2">6-24 months</td>
          </tr>
          <tr>
            <td className="border border-gray-300 px-4 py-2">Facebook Pixel</td>
            <td className="border border-gray-300 px-4 py-2">
              Conversion tracking and audience building
            </td>
            <td className="border border-gray-300 px-4 py-2">12 months</td>
          </tr>
        </tbody>
      </table>

      <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>

      <h3 className="text-xl font-semibold mt-6 mb-3">Browser Settings</h3>
      <p>
        You can control cookies through your browser settings. Most browsers
        allow you to:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>View and delete stored cookies</li>
        <li>Block all cookies or specific types</li>
        <li>Block cookies from third-party websites</li>
        <li>Receive warnings before a cookie is set</li>
      </ul>

      <p className="mt-4">
        See your browser's help documentation for detailed instructions:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <li>Chrome: google.com/intl/en/policies/privacy/</li>
        <li>Firefox: mozilla.org/en-US/firefox/privacy/</li>
        <li>Safari: apple.com/uk/safari/</li>
        <li>Edge: microsoft.com/en-us/edge/</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Cookie Preferences</h3>
      <p>
        We provide a cookie consent banner on first visit. You can update your
        preferences anytime through your account settings or by clicking the
        cookie preferences link in our footer.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Third-Party Cookies</h2>
      <p>
        Some cookies are set by third-party services embedded in our website.
        We do not control these cookies, but they are subject to those
        services' privacy policies:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>
          <strong>Google Analytics:</strong>{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
            policies.google.com/privacy
          </a>
        </li>
        <li>
          <strong>PostHog:</strong>{' '}
          <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
            posthog.com/privacy
          </a>
        </li>
        <li>
          <strong>Stripe (Payments):</strong>{' '}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
            stripe.com/privacy
          </a>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-4">Do Not Track (DNT)</h2>
      <p>
        Some browsers include a "Do Not Track" feature. Currently, there is no
        industry standard for recognizing DNT signals, so CoHomed does not
        currently respond to DNT browser signals. However, you can control
        cookie usage through browser settings and our cookie preferences panel.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Updates to This Policy</h2>
      <p>
        We may update this Cookie Policy periodically to reflect changes in our
        cookie usage or applicable law. We will notify you of any material
        changes via email or a prominent notice on our website.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Questions?</h2>
      <p>
        If you have questions about our use of cookies, contact us at:
      </p>
      <div className="bg-gray-100 rounded-lg p-4 mt-4">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:privacy@cohomed.com.au">privacy@cohomed.com.au</a>
        </p>
      </div>
    </>
  );
}
