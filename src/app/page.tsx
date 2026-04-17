import Link from 'next/link';
import DownloadSection from '@/components/DownloadSection';

export default function HomePage() {
  return (
    <>
      {/* ============================================================ */}
      {/* HERO */}
      {/* ============================================================ */}
      <section className="section-padding pt-36 md:pt-44 pb-20 md:pb-32 relative overflow-hidden">
        {/* Subtle background shape */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cream-200 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl opacity-40" />

        <div className="relative max-w-4xl">
          <p className="section-label opacity-0 animate-fade-up">
            Co-ownership made simple
          </p>

          <h1 className="font-display text-display-lg md:text-display-xl text-teal-900 mb-8 opacity-0 animate-fade-up-delay">
            Stop renting<br />
            someone else&rsquo;s<br />
            <span className="text-teal-500 italic font-medium">dream.</span>
          </h1>

          <p className="prose-body max-w-lg mb-10 opacity-0 animate-fade-up-delay-2">
            You and your housemates already split the rent. CoHomed helps you
            pool your resources, buy a home together, and turn those
            payments into something that&rsquo;s actually yours.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up-delay-3">
            <a href="#download" className="btn-primary">
              Get the App
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <Link href="/how-it-works" className="btn-secondary">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* THE PROBLEM */}
      {/* ============================================================ */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="section-label">The problem</p>
              <h2 className="font-display text-display-sm md:text-display-md text-teal-900 mb-6">
                You can afford a mortgage.<br />
                <span className="text-teal-800/50">Just not on your own.</span>
              </h2>
              <p className="prose-body mb-6">
                Individually, most young Australians can&rsquo;t get past the deposit hurdle.
                But collectively? Your household might already have enough.
              </p>
              <p className="prose-body">
                The system isn&rsquo;t built for you. Home buying laws are designed for
                couples and families. The paperwork is confusing. And there&rsquo;s no clear
                path to buying with the people you already live with and trust.
              </p>
            </div>

            {/* Visual — rent vs own comparison */}
            <div className="space-y-4">
              <div className="card-soft border-red-100 bg-red-50/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏚️</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-teal-900 mb-1">Renting</h3>
                    <p className="text-sm text-teal-800/60 leading-relaxed">
                      $2,400/month between four people.
                      After 6 years, you&rsquo;ve paid <span className="font-semibold text-red-600">$172,800</span> toward
                      someone else&rsquo;s mortgage. You own nothing.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-300"><path d="M12 5v14m-7-7 7 7 7-7"/></svg>
              </div>
              <div className="card-soft border-teal-200 bg-teal-50/30">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">🏡</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-teal-900 mb-1">Co-owning with CoHomed</h3>
                    <p className="text-sm text-teal-800/60 leading-relaxed">
                      Same $2,400/month. But now every dollar builds your equity.
                      After 6 years, you could have <span className="font-semibold text-teal-600">$172,800 in home equity</span> instead
                      of a pile of rent receipts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* WHAT COHOMED DOES */}
      {/* ============================================================ */}
      <section className="section-padding py-20 md:py-28 bg-cream-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="section-label">What CoHomed does</p>
            <h2 className="font-display text-display-sm md:text-display-md text-teal-900">
              Everything you need to buy together.<br />
              <span className="text-teal-500">Nothing you don&rsquo;t.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: '📋',
                title: 'Legal agreements, done',
                description: 'Co-ownership agreements, expense agreements, and mortgage contribution deeds — generated from your group\'s details, ready for your lawyer to review.',
              },
              {
                icon: '💰',
                title: 'Track every dollar',
                description: 'Split mortgage payments, rates, and household expenses. See who\'s paid, who\'s due, and keep everyone accountable — without the awkward conversations.',
              },
              {
                icon: '🤝',
                title: 'Broker-ready in minutes',
                description: 'When you\'re ready to buy, CoHomed generates a handover pack that gives your mortgage broker everything they need to get started.',
              },
              {
                icon: '✅',
                title: 'Eligibility checker',
                description: 'Instantly see which government schemes your group qualifies for — First Home Owner Grant, stamp duty concessions, Boost to Buy, and more.',
              },
              {
                icon: '🔒',
                title: 'Transparent by design',
                description: 'Every payment tracked. Every decision recorded. Everyone knows exactly where they stand. That\'s what makes co-ownership work.',
              },
              {
                icon: '🏠',
                title: 'Built for Australia',
                description: 'QLD property law, Australian government schemes, local mortgage brokers. This isn\'t a generic tool — it\'s built specifically for how Australians buy homes.',
              },
            ].map((feature, i) => (
              <div key={i} className="card-soft">
                <span className="text-3xl block mb-4">{feature.icon}</span>
                <h3 className="font-display text-lg font-semibold text-teal-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-teal-800/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* TRUST / TRANSPARENCY BANNER */}
      {/* ============================================================ */}
      <section className="section-padding py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-teal-50 px-4 py-2 rounded-full mb-8">
            <span className="text-sm">🤝</span>
            <span className="text-sm font-medium text-teal-700">Our promise</span>
          </div>
          <blockquote className="font-display text-display-sm md:text-display-md text-teal-900 italic mb-8">
            &ldquo;We don&rsquo;t pretend this is risk-free.
            What we do is make every obligation visible,
            every payment tracked, and every risk
            understood&thinsp;&mdash;&thinsp;before you sign anything.&rdquo;
          </blockquote>
          <p className="prose-body max-w-lg mx-auto">
            Co-owning a home with friends is a big commitment.
            CoHomed exists to make sure everyone goes in with their eyes open,
            their rights protected, and their money accounted for.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* HOW IT WORKS TEASER */}
      {/* ============================================================ */}
      <section className="section-padding py-20 md:py-28 bg-teal-900 text-white rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-300 mb-4">How it works</p>
            <h2 className="font-display text-display-sm md:text-display-md text-white">
              Four steps to owning your home.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {[
              {
                num: '01',
                title: 'Create your group',
                description: 'Sign up, invite your housemates, and set your ownership split based on what everyone can contribute.',
              },
              {
                num: '02',
                title: 'Get organised',
                description: 'Fill in your financial profiles, run the eligibility checker, and generate your co-ownership agreements.',
              },
              {
                num: '03',
                title: 'Talk to a broker',
                description: 'CoHomed generates a handover pack with everything your broker needs. We connect you with brokers who know co-ownership.',
              },
              {
                num: '04',
                title: 'Buy your home',
                description: 'Settlement happens through your broker and conveyancer. Then CoHomed keeps tracking expenses, payments, and ownership — for as long as you need it.',
              },
            ].map((step, i) => (
              <div key={i} className="flex gap-5">
                <span className="font-display text-4xl font-bold text-teal-500/30">{step.num}</span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link href="/how-it-works" className="inline-flex items-center gap-2 text-teal-300 font-semibold text-sm hover:text-white transition-colors">
              Learn more about how it works
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* QLD SCHEMES */}
      {/* ============================================================ */}
      <section className="section-padding py-20 md:py-28 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-300 mb-4">Did you know?</p>
            <h2 className="font-display text-display-sm md:text-display-md text-white mb-4">
              Friends can use government<br />home buyer schemes too.
            </h2>
            <p className="text-base text-white/50 max-w-xl mx-auto">
              Since 2023, the First Home Guarantee lets any two eligible people buy together &mdash;
              not just couples. CoHomed helps you find and apply for every scheme you qualify for.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { amount: '$30K', label: 'QLD First Home\nOwner Grant', note: 'New homes under $750K' },
              { amount: '$0', label: 'Stamp Duty\n(New Homes)', note: 'No price cap in QLD' },
              { amount: '2%', label: 'Minimum Deposit\nwith Boost to Buy', note: 'Govt contributes up to 30%' },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10">
                <p className="font-display text-3xl md:text-4xl font-bold text-teal-300 mb-2">{stat.amount}</p>
                <p className="text-sm font-medium text-white whitespace-pre-line leading-snug">{stat.label}</p>
                <p className="text-xs text-white/40 mt-2">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* DOWNLOAD CTA */}
      {/* ============================================================ */}
      <DownloadSection />
    </>
  );
}
