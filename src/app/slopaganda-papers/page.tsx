const papers = [
  {
    title:
      "Slopaganda: Digital Propaganda and Informational Disorder in Hybrid Warfare",
    author: "Carina Barbosa Gouvêa",
    source: "SSRN",
    abstract:
      "This article develops the concept of slopaganda to explain a transformation in contemporary digital propaganda within the context of hybrid warfare. Drawing on recent empirical evidence from the use of AI-generated memes in geopolitical conflicts, it argues that informational contestation has shifted from disputes over truth and narrative coherence to the strategic management of informational disorder. The analysis identifies a set of structuring signs that underpin this phenomenon, including mass content production, low quality and repetition, the use of AI and bots, emotional appeal, and narrative fragmentation. These elements operate through specific communicational functions, such as saturation of the informational environment, artificial scaling of narratives, and affective mobilization-producing effects including reduced verifiability, normalization of noise, illusion of consensus, toxic polarization, and erosion of truth. Unlike deepfakes, which rely on falsifiable claims, slopaganda operates within a symbolic and interpretive regime, making it more resistant to verification and regulation. The article proposes an analytical model based on the relationship between sign, function, and effect, demonstrating how contemporary propaganda increasingly prioritizes circulation, ambiguity, and engagement. The findings suggest that slopaganda represents a new stage in the evolution of digital warfare, with significant implications for democratic systems and the epistemic conditions of public discourse.",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6663461",
  },
];

export default function SlopagandaPapersPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 text-slate-100 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            Research
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Slopaganda Papers
          </h1>
          <p className="max-w-3xl leading-8 text-slate-300">
            Academic papers and preprints that develop, apply, or analyze the
            concept of slopaganda.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {papers.map((paper) => (
            <a
              key={paper.href}
              href={paper.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-cyan-400" />
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {paper.source}
                  </p>
                </div>
                <span className="text-right text-xs text-slate-500">
                  Paper
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-emerald-200">
                {paper.title}
              </h3>
              <p className="mb-4 text-sm text-slate-400">{paper.author}</p>
              <p className="mb-4 text-sm leading-7 text-slate-400">
                {paper.abstract}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">View paper</span>
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
