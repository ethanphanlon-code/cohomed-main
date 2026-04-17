import { generateFAQSchema } from '@/lib/blog';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | CoHomed',
  description: 'Frequently asked questions about co-ownership, buying with friends, and property in Australia.',
};

const faqs = [
  {
    question: 'Can friends legally buy a property together?',
    answer: 'Yes, absolutely. Friends can buy property together as "tenants in common" or "joint tenants". The key is having a proper legal agreement outlining ownership percentages, financial contributions, and dispute resolution. We recommend consulting a solicitor to set this up correctly.',
  },
  {
    question: 'What\'s the difference between tenants in common and joint tenancy?',
    answer: 'Tenants in common: Each person owns a specific percentage (can be unequal), and can leave their share to beneficiaries. Joint tenancy: All owners have equal rights, and shares automatically pass to survivors if someone dies. For friend groups, tenants in common is usually better.',
  },
  {
    question: 'How much deposit do we need?',
    answer: 'Typically 5-20% of the property value. The larger your deposit, the lower your interest rate and the less mortgage insurance you\'ll pay. First-home buyer schemes like Boost to Buy can reduce this to as low as 2%, with the government guaranteeing the rest.',
  },
  {
    question: 'Can we split a mortgage equally if we contribute different amounts?',
    answer: 'Not always equally. Your contributions should match your ownership percentages. If one person contributes 40% and another 30%, they should own 40% and 30% respectively. This avoids future disputes and is clearer for tax purposes.',
  },
  {
    question: 'What government schemes can we access as a group?',
    answer: 'Several schemes are available: First Home Owner Grant (up to $30K), Stamp Duty concessions, Boost to Buy (2% deposit), and the First Home Super Saver Scheme ($50K per eligible person). Each co-buyer may qualify separately for some schemes.',
  },
  {
    question: 'Who is liable for the mortgage if someone can\'t pay?',
    answer: 'All co-mortgagors are jointly and severally liable. This means the lender can pursue any borrower for the full amount if others default. This is why a solid co-ownership agreement is essential to protect everyone.',
  },
  {
    question: 'What if one person wants to exit the arrangement?',
    answer: 'The exiting person can either sell their share to the remaining owners (if agreed) or sell the whole property. Your co-ownership agreement should specify buyout procedures, valuation methods, and timelines. It\'s much better to have this in writing before problems arise.',
  },
  {
    question: 'How do we handle ongoing expenses like rates and maintenance?',
    answer: 'Split expenses according to your ownership percentages (or another agreed arrangement). Keep meticulous records of all payments. Tools like CoHomed automate this tracking and ensure transparency, which helps maintain friendships.',
  },
  {
    question: 'Do we all need to earn enough for the mortgage?',
    answer: 'Lenders look at combined income and assets. However, each borrower usually must meet minimum lending criteria individually. If one friend has very poor credit or low income, they may not qualify as a borrower, though they can still own the property if others borrow.',
  },
  {
    question: 'What happens if one friend dies?',
    answer: 'With tenants in common: Their share goes to their beneficiaries (may need buy-in from new owners). With joint tenancy: Their share automatically passes to survivors. Most friend groups prefer tenants in common for more control.',
  },
  {
    question: 'How much does a co-ownership agreement cost?',
    answer: 'Typically $300-800 through a solicitor. This is a worthwhile investment given property values and the potential for disputes. It protects everyone and clarifies expectations.',
  },
  {
    question: 'Can we use our First Home Super Saver scheme withdrawals?',
    answer: 'Yes, if you\'re all first-home buyers. Each eligible person can withdraw up to $50,000 from their super for the property. This dramatically increases your combined deposit capacity.',
  },
  {
    question: 'What if the relationship breaks down between co-owners?',
    answer: 'Your co-ownership agreement should include dispute resolution procedures (mediation, arbitration). If unresolved, you may need to sell the property and split proceeds. Having clear agreements prevents many conflicts.',
  },
  {
    question: 'How do we split the property if we decide to separate?',
    answer: 'The process depends on your ownership percentages and agreement terms. Options include: one person buys out others, third-party purchase, or sale with proceeds split by percentage. Mediation can help resolve disagreements.',
  },
  {
    question: 'What about tax? Do we all claim the main residence exemption?',
    answer: 'Each owner can claim the main residence exemption if it\'s their primary place of residence. However, if one person rents their room out or doesn\'t live there, that portion may be subject to capital gains tax. Consult an accountant about your specific situation.',
  },
  {
    question: 'Can we refinance with new co-owners?',
    answer: 'Yes, but it requires lender approval. Any change in ownership should be properly documented with a new mortgage deed. Legal advice is recommended.',
  },
  {
    question: 'Is it better to buy in someone\'s name only?',
    answer: 'Generally no. If the property is only in one person\'s name, others have no legal protection if that person exits or has financial problems. Proper co-ownership with everyone on the title protects all parties.',
  },
  {
    question: 'How long should a co-ownership agreement be?',
    answer: 'It depends on complexity, but typically 5-15 pages. It should cover: ownership percentages, financial contributions, expense division, decision-making, exit procedures, and dispute resolution. Every situation is unique.',
  },
  {
    question: 'Can we amend our agreement later?',
    answer: 'Yes, but all co-owners must consent. Any changes should be documented and may require re-registration. It\'s easier to get it right initially than to fix issues later.',
  },
  {
    question: 'Is co-ownership with friends risky?',
    answer: 'Any business arrangement has risks. The key is proper planning: clear agreements, good communication, transparent financial tracking, and professional legal and financial advice. Many successful friend groups own property together with clear processes.',
  },
];

export default function FAQsPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Common questions about co-ownership, buying with friends, and the property buying process in Australia.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer">
                <h3 className="text-base md:text-lg font-semibold text-gray-900 group-open:text-teal-600 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </summary>
              <div className="px-4 pb-4 text-gray-600 border-t border-gray-100">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Additional Support */}
        <div className="mt-12 bg-teal-50 rounded-lg p-8 border border-teal-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Still have questions?
          </h2>
          <p className="text-gray-700 mb-6">
            Check our blog for detailed guides, use our calculators to run numbers, or consult with a solicitor for legal advice specific to your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/blog"
              className="inline-block bg-white text-teal-600 border-2 border-teal-600 px-6 py-2 rounded-lg font-medium hover:bg-teal-50 transition-colors"
            >
              Read Guides
            </a>
            <a
              href="/resources/calculators"
              className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
            >
              Use Calculators
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
