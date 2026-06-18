const articles = [
  {
    outlet: "The Conversation",
    description:
      "Slopaganda wars: How and why the US and Iran are flooding the zone with viral AI-generated noise",
    link: "https://theconversation.com/slopaganda-wars-how-and-why-the-us-and-iran-are-flooding-the-zone-with-viral-ai-generated-noise-280024",
    date: "April 7, 2026",
    alsoFeaturedIn: [
      {
        name: "Asia Times",
        link: "https://asiatimes.com/2026/04/slopaganda-us-iran-deploy-ai-slop-as-weapons-of-war/",
      },
      {
        name: "The Wire",
        link: "https://thewire.in/tech/ai-slopaganda-is-probably-here-to-stay",
      },
      {
        name: "CNA",
        link: "https://www.channelnewsasia.com/commentary/ai-generated-slop-propaganda-us-iran-war-6043521",
      },
    ],
  },
  {
    outlet: "PsyArXiv",
    description: "How slopaganda exploits features of human cognition",
    link: "https://osf.io/preprints/psyarxiv/3zbdn_v1",
    date: "11 March 2026",
  },
];

export default function DeepDivesPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 text-slate-100 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            Analysis and perspective
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Deep dives on slopaganda.
          </h1>
          <p className="max-w-3xl leading-8 text-slate-300">
            Complementary analysis and commentary exploring the mechanisms and
            implications of slopaganda.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          {articles.map((item) => (
            <div key={item.outlet}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10"
              >
                <div className="mb-3 flex items-start justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-orange-400" />
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {item.outlet}
                    </p>
                  </div>
                  <span className="text-right text-xs text-slate-500">
                    {item.date}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-emerald-200">
                  {item.description}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Read article</span>
                  <span className="text-emerald-400 transition-colors group-hover:text-emerald-300">
                    -&gt;
                  </span>
                </div>
              </a>
              {item.alsoFeaturedIn && (
                <div className="mt-2 text-xs text-slate-500">
                  Also featured in:{" "}
                  {item.alsoFeaturedIn.map((feature, index) => (
                    <span key={feature.name}>
                      <a
                        href={feature.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-slate-600 decoration-1 hover:text-emerald-200"
                      >
                        {feature.name}
                      </a>
                      {index < item.alsoFeaturedIn.length - 2
                        ? ", "
                        : index === item.alsoFeaturedIn.length - 2
                          ? ", and "
                          : "."}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
