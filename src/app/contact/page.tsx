import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — CoHomed',
  description: 'Get in touch with the CoHomed team. We\'re based in Brisbane and always happy to chat.',
};

export default function ContactPage() {
  return (
    <>
      <section className="section-padding pt-36 md:pt-44 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <p className="section-label opacity-0 animate-fade-up">Contact</p>
          <h1 className="font-display text-display-md md:text-display-lg text-teal-900 mb-6 opacity-0 animate-fade-up-delay">
            Let&rsquo;s talk.
          </h1>
          <p className="prose-body max-w-lg opacity-0 animate-fade-up-delay-2">
            Whether you&rsquo;re a potential user, a mortgage broker interested in partnering,
            or a journalist writing about housing — we&rsquo;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="section-padding pb-32">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact methods */}
          <div className="space-y-8">
            <div className="card-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📧</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-teal-900 mb-1">Email us</h3>
                  <a href="mailto:hello@cohomed.com.au" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                    hello@cohomed.com.au
                  </a>
                  <p className="text-sm text-teal-800/50 mt-2">
                    General enquiries, feedback, or just to say hi. We reply to everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-teal-900 mb-1">Broker partnerships</h3>
                  <a href="mailto:brokers@cohomed.com.au" className="text-teal-500 font-medium hover:text-teal-600 transition-colors">
                    brokers@cohomed.com.au
                  </a>
                  <p className="text-sm text-teal-800/50 mt-2">
                    If you&rsquo;re a mortgage broker with experience in co-ownership
                    or tenants-in-common applications, we&rsquo;d love to partner with you.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">📍</span>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-teal-900 mb-1">Location</h3>
                  <p className="text-base text-teal-800/70">Brisbane, Queensland</p>
                  <p className="text-sm text-teal-800/50 mt-2">
                    We&rsquo;re a small team based in Brisbane, building for Australia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ shortcut */}
          <div>
            <div className="bg-cream-100 rounded-2xl border border-cream-200 p-8">
              <h3 className="font-display text-xl font-semibold text-teal-900 mb-4">
                Common questions
              </h3>
              <p className="text-sm text-teal-800/60 leading-relaxed mb-6">
                Many questions are answered in our FAQ. Here are the most common:
              </p>
              <div className="space-y-4">
                {[
                  { q: 'How does co-ownership actually work?', link: '/how-it-works' },
                  { q: 'Can friends use government home buyer schemes?', link: '/faq' },
                  { q: 'What happens if someone wants to leave?', link: '/faq' },
                  { q: 'Does CoHomed provide financial advice?', link: '/faq' },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    className="flex items-center justify-between py-3 px-4 bg-white rounded-xl border border-cream-200 text-sm font-medium text-teal-800 hover:border-teal-200 hover:bg-teal-50/50 transition-colors group"
                  >
                    <span>{item.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-teal-300 group-hover:text-teal-500 transition-colors flex-shrink-0">
                      <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-teal-900 rounded-2xl p-8 mt-6 text-white">
              <h3 className="font-display text-xl font-semibold mb-3">
                Not in Queensland yet?
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                We&rsquo;re expanding nationally. Drop us an email with your state and
                we&rsquo;ll let you know when we launch in your area.
              </p>
              <a
                href="mailto:hello@cohomed.com.au?subject=Interested%20in%20CoHomed%20-%20[Your%20State]"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                Register interest
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
