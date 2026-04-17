'use client';

import { useState } from 'react';
import DownloadSection from '@/components/DownloadSection';

const faqs = [
  {
    category: 'The basics',
    questions: [
      {
        q: 'What is CoHomed?',
        a: 'CoHomed is an app that helps groups of friends or housemates buy a home together. We handle the legal documents, expense tracking, eligibility checking, and broker connections — so you can focus on finding your home.',
      },
      {
        q: 'How is this different from just buying a property with someone?',
        a: 'You can already buy property with other people — but the system isn\'t set up for it. Lawyers charge thousands for custom agreements, brokers don\'t know which lenders accept co-ownership, and there\'s no way to track who owes what. CoHomed brings all of that into one place and makes it simple.',
      },
      {
        q: 'How many people can co-own a property?',
        a: 'CoHomed supports groups of 2, 3, or 4 people. Legally, there\'s no hard limit on tenants in common, but lending and practical considerations make 2–4 the sweet spot.',
      },
      {
        q: 'Do we all need to be on the mortgage?',
        a: 'No. You can all be on the property title (as owners) without all being on the mortgage. The people with the strongest income and credit become the borrowers. Everyone else is still a registered owner with legally protected ownership shares. Our Mortgage Contribution Deed governs the obligations between borrowers and non-borrowing owners.',
      },
    ],
  },
  {
    category: 'Money & ownership',
    questions: [
      {
        q: 'Does everyone need to own equal shares?',
        a: 'No. Ownership percentages can be anything — 50/50, 60/20/20, 40/30/20/10 — based on what each person contributes to the deposit and what you agree on. The only rule is they need to add up to 100%.',
      },
      {
        q: 'What if someone stops paying?',
        a: 'The co-ownership agreement includes a structured default process: a 7-day grace period, a formal notice, a 30-day remediation period, and — if the default isn\'t resolved — the option for the remaining owners to buy out the defaulting person\'s share. CoHomed tracks every payment, so there\'s a clear record of who\'s met their obligations.',
      },
      {
        q: 'What if someone wants to leave?',
        a: 'The co-ownership agreement includes a right of first refusal. The departing person offers their share to the remaining owners first. If nobody wants to buy it, they can sell to a third party (who must agree to the co-ownership terms). The process is structured and fair.',
      },
      {
        q: 'What does CoHomed cost?',
        a: 'There\'s a one-time setup fee per group to unlock legal document generation and broker access. A small platform service fee applies to payments processed through the app. Eligibility checking, expense tracking, and the stamp duty calculator are available before you pay.',
      },
    ],
  },
  {
    category: 'Government schemes',
    questions: [
      {
        q: 'Can friends use the First Home Guarantee together?',
        a: 'Yes! Since July 2023, any two eligible people can apply — friends, siblings, anyone. It\'s no longer limited to couples. You can buy with a 5% deposit and avoid Lenders Mortgage Insurance. However, it\'s capped at two applicants, so in a group of four, only two can be on the guarantee.',
      },
      {
        q: 'Can our group get the First Home Owner Grant?',
        a: 'If you\'re buying a new home in QLD under $750,000 and all co-buyers are eligible first home buyers, yes — you can receive the grant (currently $30,000 for contracts before 30 June 2026). However, it\'s one grant per transaction, not per person. And all co-buyers must be eligible — one ineligible person disqualifies the group.',
      },
      {
        q: 'What is Boost to Buy?',
        a: 'It\'s a Queensland shared equity scheme where the government contributes up to 30% of a new home\'s purchase price (or 25% for existing). You need just a 2% deposit. There are income caps and limited places. CoHomed\'s eligibility checker will tell you if your group qualifies.',
      },
    ],
  },
  {
    category: 'Legal & safety',
    questions: [
      {
        q: 'Does CoHomed provide legal advice?',
        a: 'No. CoHomed is a technology platform. We generate document templates based on your group\'s details, but we are not a law firm and do not hold an AFSL or ACL. We strongly recommend each person get independent legal and financial advice before signing.',
      },
      {
        q: 'What type of ownership structure does CoHomed use?',
        a: 'Tenants in common. This means each person owns a defined percentage share of the property, which they can sell or leave in their will. There\'s no automatic right of survivorship (unlike joint tenancy, which is designed for couples).',
      },
      {
        q: 'Is my financial information safe?',
        a: 'Your financial profile is encrypted and only visible to you within the app. It\'s only included in a broker handover pack if you explicitly consent. CoHomed uses bank-grade encryption and Australian data hosting.',
      },
      {
        q: 'What happens if one of us passes away?',
        a: 'As tenants in common, the deceased person\'s share forms part of their estate — it does not automatically transfer to the other owners. The co-ownership agreement includes a right of first refusal for surviving owners before the share transfers to a beneficiary. We recommend all co-owners update their wills and consider life insurance.',
      },
    ],
  },
  {
    category: 'Availability',
    questions: [
      {
        q: 'Where is CoHomed available?',
        a: 'We\'re currently live in Queensland. We\'re built to expand nationally — the app adapts to each state\'s property laws, stamp duty rules, and government schemes. Other states are coming soon.',
      },
      {
        q: 'Can I use CoHomed before we\'re ready to buy?',
        a: 'Absolutely — and we encourage it. Many groups use CoHomed to track shared rent and household expenses while they\'re still renting. This builds a payment history and reliability score that demonstrates your group\'s financial coordination. Think of it as practising co-ownership before you commit.',
      },
    ],
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-cream-200 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
      >
        <span className="font-display text-base md:text-lg font-medium text-teal-900 group-hover:text-teal-600 transition-colors">
          {q}
        </span>
        <span className={`w-6 h-6 rounded-full border-2 border-teal-200 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${open ? 'bg-teal-500 border-teal-500 rotate-45' : ''}`}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={open ? 'white' : 'currentColor'} strokeWidth="2.5" className="text-teal-400">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-out ${open ? 'max-h-96 pb-5' : 'max-h-0'}`}>
        <p className="text-sm text-teal-800/60 leading-relaxed pr-12">{a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  return (
    <>
      <section className="section-padding pt-36 md:pt-44 pb-16">
        <div className="max-w-3xl">
          <p className="section-label opacity-0 animate-fade-up">FAQ</p>
          <h1 className="font-display text-display-md md:text-display-lg text-teal-900 mb-6 opacity-0 animate-fade-up-delay">
            Questions you<br />probably have.
          </h1>
          <p className="prose-body max-w-lg opacity-0 animate-fade-up-delay-2">
            Co-owning a home is a big decision. Here are honest answers to the things
            people ask us most.
          </p>
        </div>
      </section>

      <section className="section-padding pb-16">
        <div className="max-w-3xl mx-auto space-y-12">
          {faqs.map((section, i) => (
            <div key={i}>
              <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-teal-400 mb-2">
                {section.category}
              </h2>
              <div className="bg-white rounded-2xl border border-cream-200 px-6 md:px-8 shadow-sm">
                {section.questions.map((faq, j) => (
                  <FAQItem key={j} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <DownloadSection />
    </>
  );
}
