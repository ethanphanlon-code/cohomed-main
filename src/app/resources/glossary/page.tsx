import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glossary | CoHomed',
  description: 'Property and finance terminology explained in plain language.',
};

const glossaryTerms = [
  {
    term: 'Caveat',
    definition: 'A legal notice lodged on property titles to protect your interest or claim on the property.',
  },
  {
    term: 'Co-ownership',
    definition: 'When two or more people own a property together, each with a defined legal interest.',
  },
  {
    term: 'Conveyancer',
    definition: 'A legal professional who handles the paperwork and legal processes of buying or selling property.',
  },
  {
    term: 'Deposit',
    definition: 'Money paid upfront when buying property, typically 5-20% of the purchase price.',
  },
  {
    term: 'Equity',
    definition: 'The difference between your property\'s value and what you still owe on your mortgage.',
  },
  {
    term: 'First Home Buyer',
    definition: 'Someone purchasing a property for the first time, eligible for government schemes and concessions.',
  },
  {
    term: 'First Home Owner Grant',
    definition: 'Queensland government grant up to $30,000 for eligible first-home buyers of new homes.',
  },
  {
    term: 'FHSS',
    definition: 'First Home Super Saver Scheme - allows first-home buyers to withdraw up to $50,000 from super.',
  },
  {
    term: 'Fixture',
    definition: 'An item attached to the property that transfers to the new owner (e.g., built-in wardrobes).',
  },
  {
    term: 'Joint Tenancy',
    definition: 'A form of ownership where all owners have equal rights and survivorship applies.',
  },
  {
    term: 'LVR',
    definition: 'Loan-to-Value Ratio - the mortgage amount as a percentage of the property value.',
  },
  {
    term: 'Mortgage',
    definition: 'A loan from a bank or lender to finance your property purchase, secured by the property itself.',
  },
  {
    term: 'Offset Account',
    definition: 'A savings account linked to your mortgage where interest is calculated on net balance.',
  },
  {
    term: 'Redraw Facility',
    definition: 'Ability to withdraw extra money you\'ve paid into your mortgage.',
  },
  {
    term: 'Settlement',
    definition: 'The final step of buying property where funds are transferred and you receive the keys.',
  },
  {
    term: 'Stamp Duty',
    definition: 'State government tax on property purchases, varies by state and property value.',
  },
  {
    term: 'Tenants in Common',
    definition: 'A form of ownership where each owner has a distinct share that can be unequal.',
  },
  {
    term: 'Title',
    definition: 'The legal document proving ownership of a property.',
  },
  {
    term: 'Valuation',
    definition: 'A professional assessment of a property\'s market value.',
  },
];

export default function GlossaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Property & Finance Glossary
          </h1>
          <p className="text-lg text-gray-600">
            Common terms explained in plain language for co-owners and first-home buyers.
          </p>
        </div>

        {/* Glossary Terms */}
        <div className="space-y-4">
          {glossaryTerms.map((item, index) => (
            <details
              key={index}
              className="group bg-white rounded-lg border border-gray-200 hover:border-teal-300 transition-colors"
            >
              <summary className="flex items-center justify-between p-4 cursor-pointer">
                <h3 className="text-lg font-semibold text-gray-900 group-open:text-teal-600">
                  {item.term}
                </h3>
                <svg
                  className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform"
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
                <p>{item.definition}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-teal-50 rounded-lg p-8 border border-teal-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Not finding what you need?
          </h2>
          <p className="text-gray-700 mb-4">
            Our blog has detailed guides on specific topics like government schemes, ownership structures, and financial planning.
          </p>
          <a
            href="/blog"
            className="inline-block bg-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-teal-700 transition-colors"
          >
            Browse Blog Guides
          </a>
        </div>
      </div>
    </div>
  );
}
