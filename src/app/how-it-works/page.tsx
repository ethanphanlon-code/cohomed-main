import Link from 'next/link';
import DownloadSection from '@/components/DownloadSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How It Works — CoHomed',
  description: 'Learn how CoHomed helps housemates buy a home together in four simple steps. From group creation to settlement and beyond.',
};

const steps = [
  {
    num: '01',
    title: 'Create your group',
    description: 'Download the app, sign up, and create a co-ownership group. Invite your housemates — you can have 2, 3, or 4 people in a group.',
    details: [
      'Everyone fills in their financial profile (income, savings, deposit contribution)',
      'The app suggests an ownership split based on what each person can contribute',
      'You agree on the split together — it doesn\'t have to be equal',
      'All of this stays private until you choose to share it with a broker',
    ],
    aside: 'You don\'t need to have a property in mind yet. Many groups use CoHomed to get organised months before they\'re ready to buy.',
  },
  {
    num: '02',
    title: 'Get your paperwork sorted',
    description: 'CoHomed generates the legal documents you need — co-ownership agreements, expense agreements, and mortgage contribution deeds — from the details your group has entered.',
    details: [
      'Documents are populated with your group\'s actual names, ownership percentages, and financial details',
      'The co-ownership agreement covers everything: ownership split, decision-making, what happens if someone wants to leave, default protections, and dispute resolution',
      'We strongly recommend having a solicitor review the documents before signing — they\'re drafted as a starting point, not a substitute for legal advice',
    ],
    aside: 'Having these documents ready before you talk to a broker puts you miles ahead of other co-buyers who show up with nothing.',
  },
  {
    num: '03',
    title: 'Check your eligibility',
    description: 'The eligibility wizard checks every government scheme your group might qualify for — and tells you exactly how much you could save.',
    details: [
      'First Home Owner Grant ($30,000 in QLD for new homes)',
      'Stamp duty concessions (potentially $0 in QLD)',
      'First Home Guarantee (5% deposit, no LMI)',
      'Boost to Buy (government contributes up to 30%)',
      'The checker flags any issues — like one member not being a first home buyer — before they become problems',
    ],
    aside: 'Did you know? Since 2023, the First Home Guarantee allows any two eligible people to apply together — not just couples. Friends, siblings, anyone.',
  },
  {
    num: '04',
    title: 'Connect with a broker',
    description: 'When your group is ready, CoHomed generates a broker handover pack and connects you with mortgage brokers who have experience with co-ownership applications.',
    details: [
      'The handover pack includes your group structure, financial summary, ownership split, and eligibility results',
      'Brokers in our marketplace are experienced with tenants-in-common applications',
      'You choose the broker — CoHomed doesn\'t recommend one over another',
      'The broker handles the mortgage application, and your conveyancer handles settlement',
    ],
    aside: 'CoHomed doesn\'t provide financial advice and doesn\'t hold an AFSL. We connect you with professionals who do.',
  },
  {
    num: '05',
    title: 'Move in and keep tracking',
    description: 'After settlement, CoHomed keeps working. Track mortgage contributions, split household expenses, and keep everyone accountable.',
    details: [
      'Split mortgage payments, rates, insurance, and maintenance costs',
      'Create one-off expenses (like renovating the deck) and vote on them within the app',
      'Automatic payment reminders so nobody falls behind',
      'Your reliability score builds over time — a track record of responsible co-ownership',
    ],
    aside: 'CoHomed isn\'t just for buying — it\'s for living. The expense tracking and payment management keeps working for as long as you co-own the property.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="section-label opacity-0 animate-fade-up">How It Works</p>
          <h1 className="font-display text-display-md md:text-display-lg text-teal-900 mb-6 opacity-0 animate-fade-up-delay">
            From housemates<br />to homeowners.
          </h1>
          <p className="prose-body max-w-lg opacity-0 animate-fade-up-delay-2">
            CoHomed guides your group from &ldquo;should we buy together?&rdquo;
            through to settlement and beyond. Here&rsquo;s how each step works.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding pb-16">
        <div className="max-w-4xl mx-auto space-y-20">
          {steps.map((step, i) => (
            <div key={i} className="grid md:grid-cols-[1fr_280px] gap-10 items-start">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-display text-5xl font-bold text-teal-200">{step.num}</span>
                  <h2 className="font-display text-display-sm text-teal-900">{step.title}</h2>
                </div>
                <p className="prose-body mb-6">{step.description}</p>
                <ul className="space-y-3">
                  {step.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-teal-600"><path d="M20 6L9 17l-5-5"/></svg>
                      </span>
                      <span className="text-sm text-teal-800/70 leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {step.aside && (
                <aside className="bg-cream-100 rounded-2xl p-6 border border-cream-200">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-sm">💡</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-teal-500">Good to know</span>
                  </div>
                  <p className="text-sm text-teal-800/60 leading-relaxed">{step.aside}</p>
                </aside>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Legal note */}
      <section className="section-padding py-12">
        <div className="max-w-3xl mx-auto bg-cream-100 rounded-2xl border border-cream-200 p-8">
          <h3 className="font-display text-lg font-semibold text-teal-900 mb-3">A note on professional advice</h3>
          <p className="text-sm text-teal-800/60 leading-relaxed">
            CoHomed generates document templates and provides general information about co-ownership.
            We are not a law firm and do not provide legal or financial advice. We strongly recommend
            that each person in your group obtains independent legal and financial advice before signing
            any agreements or entering into a mortgage. CoHomed does not hold an Australian Financial
            Services Licence (AFSL) or Australian Credit Licence (ACL).
          </p>
        </div>
      </section>

      <DownloadSection />
    </>
  );
}
