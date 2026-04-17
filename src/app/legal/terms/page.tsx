import { formatDate } from '@/lib/utils';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CoHomed',
  description: 'CoHomed Terms of Service',
};

const lastUpdated = '2026-04-16';

export default function TermsPage() {
  return (
    <>
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Terms of Service
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
            <a href="#1-agreement-to-terms">1. Agreement to Terms</a>
          </li>
          <li>
            <a href="#2-use-license">2. Use License</a>
          </li>
          <li>
            <a href="#3-disclaimer">3. Disclaimer of Warranties</a>
          </li>
          <li>
            <a href="#4-limitation-of-liability">4. Limitation of Liability</a>
          </li>
          <li>
            <a href="#5-accuracy-of-materials">5. Accuracy of Materials</a>
          </li>
          <li>
            <a href="#6-user-content">6. User Content</a>
          </li>
          <li>
            <a href="#7-prohibited-behavior">7. Prohibited Behavior</a>
          </li>
          <li>
            <a href="#8-termination">8. Termination</a>
          </li>
          <li>
            <a href="#9-governing-law">9. Governing Law</a>
          </li>
          <li>
            <a href="#10-contact">10. Contact</a>
          </li>
        </ol>
      </div>

      <h2 id="1-agreement-to-terms" className="text-2xl font-bold mt-8 mb-4">
        1. Agreement to Terms
      </h2>
      <p>
        By accessing and using the CoHomed website and services ("Service"), you
        accept and agree to be bound by the terms and provision of this
        agreement. If you do not agree to abide by the above, please do not use
        this service.
      </p>

      <h2 id="2-use-license" className="text-2xl font-bold mt-8 mb-4">
        2. Use License
      </h2>
      <p>
        Permission is granted to temporarily download one copy of the materials
        (information or software) on CoHomed's website for personal,
        non-commercial transitory viewing only. This is the grant of a license,
        not a transfer of title, and under this license you may not:
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Modifying or copying the materials</li>
        <li>Using the materials for any commercial purpose or for any public display</li>
        <li>Attempting to decompile or reverse engineer any software contained on the site</li>
        <li>Removing any copyright or other proprietary notations from the materials</li>
        <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
        <li>Violating any applicable laws or regulations related to access to or use of the Service</li>
      </ul>

      <h2 id="3-disclaimer" className="text-2xl font-bold mt-8 mb-4">
        3. Disclaimer of Warranties
      </h2>
      <p>
        The materials on CoHomed's website are provided on an 'as is' basis.
        CoHomed makes no warranties, expressed or implied, and hereby disclaims
        and negates all other warranties including, without limitation, implied
        warranties or conditions of merchantability, fitness for a particular
        purpose, or non-infringement of intellectual property or other
        violation of rights.
      </p>

      <h2 id="4-limitation-of-liability" className="text-2xl font-bold mt-8 mb-4">
        4. Limitation of Liability
      </h2>
      <p>
        In no event shall CoHomed or its suppliers be liable for any damages
        (including, without limitation, damages for loss of data or profit, or
        due to business interruption) arising out of the use or inability to
        use the materials on CoHomed's website, even if CoHomed or a CoHomed
        authorized representative has been notified orally or in writing of the
        possibility of such damage.
      </p>

      <h2 id="5-accuracy-of-materials" className="text-2xl font-bold mt-8 mb-4">
        5. Accuracy of Materials
      </h2>
      <p>
        The materials appearing on CoHomed's website could include technical,
        typographical, or photographic errors. CoHomed does not warrant that
        any of the materials on its website are accurate, complete, or current.
        CoHomed may make changes to the materials contained on its website at
        any time without notice.
      </p>

      <h2 id="6-user-content" className="text-2xl font-bold mt-8 mb-4">
        6. User Content
      </h2>
      <p>
        In these terms and conditions, "User Content" shall mean any audio,
        video, text, images, or other material you choose to display on this
        Service. By posting or displaying User Content, you grant CoHomed a
        non-exclusive, worldwide, irrevocable license to reproduce, adapt,
        modify, and distribute it in any media.
      </p>
      <p className="mt-4">
        User Content must be your own and must not infringe any third party
        rights. CoHomed reserves the right to remove any User Content it deems
        inappropriate, without notice.
      </p>

      <h2 id="7-prohibited-behavior" className="text-2xl font-bold mt-8 mb-4">
        7. Prohibited Behavior
      </h2>
      <p>You may not access or use the Service for any purpose other than that for which we make the Service available. The Service may not be used in connection with any commercial endeavors except those specifically endorsed or approved by us.</p>
      <p className="mt-4">Specifically, you agree not to:</p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <li>Harass, abuse, or threaten other users</li>
        <li>Use the Service to transmit any unlawful or harmful content</li>
        <li>Attempt to gain unauthorized access to our systems</li>
        <li>Impersonate or misrepresent your affiliation with any person or entity</li>
        <li>Upload viruses or malicious code</li>
        <li>Collect or track personal information of others without consent</li>
      </ul>

      <h2 id="8-termination" className="text-2xl font-bold mt-8 mb-4">
        8. Termination
      </h2>
      <p>
        CoHomed may terminate or suspend your account and access to the Service
        immediately, without prior notice or liability, for any reason
        whatsoever, including if you breach the Terms. Upon termination of your
        account, your right to use the Service will immediately cease.
      </p>

      <h2 id="9-governing-law" className="text-2xl font-bold mt-8 mb-4">
        9. Governing Law
      </h2>
      <p>
        These terms and conditions are governed by and construed in accordance
        with the laws of Australia, and you irrevocably submit to the exclusive
        jurisdiction of the courts located in Australia.
      </p>

      <h2 id="10-contact" className="text-2xl font-bold mt-8 mb-4">
        10. Contact Information
      </h2>
      <p>
        If you have any questions about these Terms of Service, please contact
        us at:
      </p>
      <div className="bg-gray-100 rounded-lg p-4 mt-4">
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:legal@cohomed.com.au">legal@cohomed.com.au</a>
        </p>
        <p className="mt-2">
          <strong>Website:</strong> cohomed.com.au
        </p>
      </div>
    </>
  );
}
