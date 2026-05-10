const policyDocuments = [
  {
    source: "Hansard",
    date: "Commonwealth of Australia 2026",
    title: "The Integrity Gap: Restoring Trust in the Climate and Energy Debate",
    description:
      "The Senate Select Committee on Information Integrity on Climate Change and Energy references slopaganda in its official report on the integrity gap in climate and energy debates.",
    link: "https://www.aph.gov.au/Parliamentary_Business/Committees/Senate/Information_Integrity_on_Climate_Change_and_Energy/ClimateIntegrity/Report/Chapter_9_-_Committee_view",
  },
];

export default function PolicyDocumentsPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100 sm:px-10">
      <section className="mx-auto max-w-5xl rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            Policy and official reports
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Slopaganda in Policy Documents
          </h1>
          <p className="max-w-3xl leading-8 text-slate-300">
            References to slopaganda in government and institutional reports.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {policyDocuments.map((item) => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
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
              <p className="mb-3 text-sm leading-7 text-slate-400">
                {item.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read document</span>
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
