import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white/60 mt-32">
      <div className="section-padding py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <span className="font-display text-lg font-semibold text-white tracking-tight">CoHomed</span>
            </div>
            <p className="text-sm leading-relaxed text-white/40 max-w-xs">
              Helping Australians buy homes together. Fairly, transparently, and simply.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wide">Product</h4>
            <div className="space-y-2.5">
              <Link href="/how-it-works" className="block text-sm hover:text-white transition-colors">How It Works</Link>
              <Link href="/blog" className="block text-sm hover:text-white transition-colors">Blog</Link>
              <Link href="/resources" className="block text-sm hover:text-white transition-colors">Resources</Link>
              <a href="#download" className="block text-sm hover:text-white transition-colors">Download App</a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wide">Company</h4>
            <div className="space-y-2.5">
              <Link href="/about" className="block text-sm hover:text-white transition-colors">About</Link>
              <Link href="/contact" className="block text-sm hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white/90 mb-4 tracking-wide">Legal</h4>
            <div className="space-y-2.5">
              <Link href="/legal/privacy" className="block text-sm hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/legal/terms" className="block text-sm hover:text-white transition-colors">Terms of Service</Link>
              <Link href="/legal/cookies" className="block text-sm hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} CoHomed Pty Ltd. Made in Brisbane.
          </p>
          <p className="text-xs text-white/25 max-w-lg text-center md:text-right leading-relaxed">
            CoHomed is a technology platform and does not provide legal, financial, or credit advice.
            CoHomed does not hold an AFSL or ACL.
          </p>
        </div>
      </div>
    </footer>
  );
}
