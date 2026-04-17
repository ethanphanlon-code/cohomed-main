import DownloadSection from '@/components/DownloadSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — CoHomed',
  description: 'CoHomed was built by someone who spent 6 years paying rent with the same housemates and realised they could have been building equity instead.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="section-label opacity-0 animate-fade-up">About CoHomed</p>
          <h1 className="font-display text-display-md md:text-display-lg text-teal-900 mb-6 opacity-0 animate-fade-up-delay">
            We built this because<br />
            we needed it ourselves.
          </h1>
        </div>
      </section>

      {/* The story */}
      <section className="section-padding pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose-body space-y-6">
            <p>
              CoHomed started with a simple realisation. After six years of living with the same people
              and paying rent every week, we did the maths. Individually, none of us could afford a
              mortgage. But collectively? We absolutely could.
            </p>
            <p>
              Every fortnight, we were handing over money that went straight into someone else&rsquo;s
              mortgage. Someone else was building equity from our rent. And we had nothing to show for it.
            </p>
            <p>
              So we asked the obvious question: why can&rsquo;t we just buy a house together?
            </p>
            <p>
              Turns out, you can. It&rsquo;s called tenants in common, and it&rsquo;s been part of
              Australian property law forever. But the process of actually doing it? That&rsquo;s where
              it falls apart.
            </p>
          </div>

          <div className="bg-cream-100 rounded-2xl border border-cream-200 p-8 md:p-10 my-12">
            <h2 className="font-display text-display-sm text-teal-900 mb-6">
              The problem we found
            </h2>
            <div className="space-y-4">
              {[
                'Home buyer laws are designed for couples and families — not groups of friends.',
                'There\'s no easy way to create co-ownership agreements without expensive lawyers.',
                'Mortgage brokers don\'t know which lenders accept 3 or 4 borrowers.',
                'Government schemes like the First Home Guarantee were restricted to couples — until 2023, when they quietly opened it to any two people.',
                'There\'s nowhere to track who\'s paid what, split household costs, or keep everyone accountable.',
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-clay-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-clay-500 text-xs font-bold">{i + 1}</span>
                  </span>
                  <p className="text-base text-teal-800/70">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="prose-body space-y-6">
            <p>
              CoHomed is the app we wish had existed when we started this journey. It handles the
              legal documents, tracks the money, checks your eligibility for every government scheme,
              and connects you with brokers who actually understand co-ownership.
            </p>
            <p>
              We&rsquo;re not a bank. We&rsquo;re not a law firm. We&rsquo;re not financial advisors.
              We&rsquo;re a technology platform that makes the messy, confusing process of buying
              a home with other people as straightforward as it should be.
            </p>
            <p>
              We&rsquo;re based in Brisbane, we&rsquo;re starting in Queensland, and we&rsquo;re
              building for every Australian who&rsquo;s looked at the housing market and thought:
              &ldquo;I can&rsquo;t do this alone.&rdquo;
            </p>
            <p className="font-display text-xl font-semibold text-teal-900 !mt-10">
              You don&rsquo;t have to.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-display-sm text-teal-900 text-center mb-12">What we believe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency first',
                description: 'Every dollar tracked. Every risk explained. Every obligation visible. Co-ownership only works when everyone knows exactly where they stand.',
              },
              {
                title: 'Honest about the hard parts',
                description: 'We don\'t pretend buying a home with friends is risk-free. We make sure you understand what you\'re signing up for — before you sign anything.',
              },
              {
                title: 'Built for real people',
                description: 'Not property investors. Not developers. Not people with trust funds. CoHomed is for renters who are tired of making someone else rich.',
              },
            ].map((value, i) => (
              <div key={i}>
                <h3 className="font-display text-lg font-semibold text-teal-900 mb-2">{value.title}</h3>
                <p className="text-sm text-teal-800/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DownloadSection />
    </>
  );
}
