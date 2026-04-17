export default function DownloadSection() {
  return (
    <section id="download" className="section-padding py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <p className="section-label">Get Started</p>
        <h2 className="font-display text-display-md md:text-display-lg text-teal-900 mb-6">
          Ready to stop paying<br className="hidden md:block" /> someone else's mortgage?
        </h2>
        <p className="prose-body max-w-xl mx-auto mb-10">
          Download CoHomed, create your group, and take the first step toward owning the home you already live in.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-3 bg-teal-900 text-white pl-5 pr-7 py-3.5 rounded-2xl hover:bg-teal-800 transition-all hover:-translate-y-0.5 hover:shadow-lg group"
          >
            <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 16.56 2.93 11.3 4.7 7.72C5.57 5.94 7.36 4.86 9.28 4.84C10.56 4.82 11.78 5.72 12.58 5.72C13.38 5.72 14.88 4.62 16.41 4.8C17.07 4.83 18.92 5.07 20.1 6.81C20 6.88 17.67 8.27 17.7 11.11C17.73 14.53 20.63 15.61 20.66 15.62C20.63 15.7 20.17 17.36 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/60 leading-none">Download on the</p>
              <p className="text-lg font-semibold leading-tight -mt-0.5">App Store</p>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-3 bg-teal-900 text-white pl-5 pr-7 py-3.5 rounded-2xl hover:bg-teal-800 transition-all hover:-translate-y-0.5 hover:shadow-lg group"
          >
            <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.18 1.16C2.91 1.46 2.75 1.91 2.75 2.5V21.5C2.75 22.09 2.91 22.54 3.18 22.84L3.27 22.92L14.12 12.07V11.93L3.27 1.08L3.18 1.16Z"/>
              <path d="M17.73 15.68L14.12 12.07V11.93L17.73 8.32L17.82 8.37L22.09 10.81C23.32 11.5 23.32 12.5 22.09 13.2L17.82 15.63L17.73 15.68Z"/>
              <path d="M17.82 15.63L14.12 11.93L3.18 22.84C3.58 23.27 4.25 23.32 5 22.89L17.82 15.63Z"/>
              <path d="M17.82 8.37L5 1.11C4.25 0.68 3.58 0.73 3.18 1.16L14.12 12.07L17.82 8.37Z"/>
            </svg>
            <div className="text-left">
              <p className="text-[10px] uppercase tracking-wider text-white/60 leading-none">Get it on</p>
              <p className="text-lg font-semibold leading-tight -mt-0.5">Google Play</p>
            </div>
          </a>
        </div>

        <p className="text-sm text-teal-800/40 mt-8">
          Available in Queensland. Expanding nationally soon.
        </p>
      </div>
    </section>
  );
}
