export default function SlopagandaEvents() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 text-slate-100 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
          Events
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          Slopaganda Events
        </h2>
        <p className="max-w-3xl leading-8 text-slate-300">
          This page collects events, talks, symposia, and public programs where
          slopaganda is discussed as part of the broader politics of
          AI-generated media, propaganda, and disinformation.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <a
          href="https://www.schirn.de/en/event/ai-politics-slop-and-slopaganda-symposium-en/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10"
        >
          <div className="mb-3 flex items-start justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Schirn Kunsthalle Frankfurt
              </p>
            </div>
            <span className="text-right text-xs text-slate-500">
              Thursday, June 11, 2026, 5-10 PM
            </span>
          </div>
          <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-emerald-200">
            AI Politics: Slop and Slopaganda
          </h3>
          <p className="mb-4 text-sm leading-7 text-slate-400">
            The symposium will focus on AI-generated propaganda, or
            &quot;slopaganda&quot;. Recent wars have been accompanied by escalating waves
            of synthetic online propaganda designed to spread disinformation,
            popularize conspiracy theories, troll the enemy, and celebrate
            one&apos;s own military dominance.
          </p>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">View event</span>
            <span className="text-emerald-400 transition-colors group-hover:text-emerald-300">
              -&gt;
            </span>
          </div>
        </a>
      </div>
      </section>
    </main>
  );
}
