const projects = [
  {
    name: "Slopaganda.dk",
    type: "Monitoring 2026 Danish parliamentary election",
    description:
      "Slopaganda.dk documents Danish politicians who used AI-generated slop during the campaign leading up to the 2026 Danish parliamentary election. The project presents these examples as evidence of poor judgment, disregard for truth and facts, and indifference to environmental and climate costs, giving voters a factual basis for making their own decisions at the ballot box.",
    note:
      "After the election, public tip submissions closed. The site credits four weeks of public tips for making the archive possible.",
    href: "https://slopaganda.dk/",
  },
  {
    name: "CampAIgn Tracker",
    type: "Monitoring 2025 Dutch parliamentary election",
    description:
      "CampAIgn Tracker analyzes AI-generated campaign content from parties, candidates, selected influencers, and commentators during the 2025 Dutch parliamentary election. The monitor tracks posts across Facebook, Instagram, TikTok, and X, showing which parties spread AI-generated messages, whether AI labels are used, who is depicted, which topics are discussed, and whether the tone is positive or negative.",
    href: "https://www.campaigntracker.nl/",
  },
];

export default function SlopagandaProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-6 py-12 text-slate-100 sm:px-10">
      <section className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
            Projects
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            Slopaganda Projects
          </h1>
          <p className="max-w-3xl leading-8 text-slate-300">
            Independent projects, archives, and public-interest resources that
            track or explain slopaganda in political and civic life.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {project.type}
                  </p>
                </div>
              </div>
              <h3 className="mb-2 text-lg font-semibold leading-tight text-white transition-colors group-hover:text-emerald-200">
                {project.name}
              </h3>
              <p className="mb-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>
              {project.note && (
                <p className="mb-4 text-sm leading-7 text-slate-500">
                  {project.note}
                </p>
              )}
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Visit project</span>
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
