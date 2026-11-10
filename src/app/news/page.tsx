const newsItems = [
  {
    source: "Wikipedia",
    date: "10 November 2026",
    title: "Slopaganda mentioned on the Explosive Media page",
    description:
      'The Explosive Media article describes how philosophers Mark Alfano and Michał Klincewicz coined “slopaganda” in 2025 for AI-generated propaganda, and identifies Explosive Media’s videos as a further example.',
    href: "https://en.wikipedia.org/wiki/Explosive_Media",
  },
  {
    source: "Merriam-Webster",
    date: "11 June 2026",
    title: "Merriam-Webster Adds Slopaganda to Its Slang Dictionary",
    description:
      "Merriam-Webster now includes slopaganda in its slang dictionary, defining the term as propaganda made partially or entirely with AI. The entry traces the word's recent AI-era use, its roots in slop and propaganda, and examples from coverage of meme warfare and generative AI political content.",
    href: "https://www.merriam-webster.com/slang/slopaganda",
  },
];

export default function NewsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 text-slate-100 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            News
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Slopaganda News
          </h1>
          <p className="max-w-3xl leading-8 text-slate-300">
            Updates on the public life of slopaganda as a term, concept, and
            phenomenon.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {newsItems.map((item) => (
            <a
              key={`${item.source}-${item.date}-${item.title}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {item.source}
                  </p>
                </div>
                <span className="text-right text-xs text-slate-500">
                  {item.date}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-emerald-200">
                {item.title}
              </h3>
              <p className="mb-4 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read update</span>
                <span className="text-emerald-400 transition-colors group-hover:text-emerald-300">
                  -&gt;
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
