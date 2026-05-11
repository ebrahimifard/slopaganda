import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto w-full max-w-7xl space-y-24 px-6 pb-20 sm:px-10">
        <section
          id="introduction"
          className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20"
        >
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What is Slopaganda?
            </h2>
            <div className="leading-8 text-slate-300">
              <p>
                The evolution of telecommunications, the web, and social media
                platforms created informational overload. Simultaneously,
                advances in artificial intelligence enabled information
                personalisation. The confluence of these led to slopaganda and
                the slopaganda entrepreneur. Slopaganda refers to mass-produced,
                personalised AI-generated content designed to manipulate beliefs
                and overwhelm the information ecosystem.
              </p>
            </div>
          </div>
        </section>

        <section id="paper" className="space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
                Original research
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Slopaganda: The interaction between propaganda and generative AI
              </h2>
            </div>
            <div className="inline-flex flex-wrap gap-3">
              <a
                href="https://arxiv.org/pdf/2503.01560"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-emerald-400 px-5 py-3 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/10"
              >
                Download PDF
              </a>
              <a
                href="https://arxiv.org/abs/2503.01560"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-slate-700 px-5 py-3 text-sm text-slate-300 transition hover:border-slate-500"
              >
                View on arXiv
              </a>
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
              <h3 className="mb-4 text-xl font-semibold text-white">
                Abstract
              </h3>
              <p className="leading-8">
                At least since Francis Bacon, the slogan &quot;knowledge is
                power&quot; has been used to capture the relationship between
                decision-making at a group level and information. Being able to
                shape the informational environment for a group is a way to
                shape their decisions. This paper focuses on strategies that are
                intentionally designed to impact the decision-making capacities
                of groups.
              </p>
              <p className="mt-4 leading-8">
                Among these strategies, the best known are political rhetoric,
                propaganda, and misinformation. We bring out a relatively new
                strategy: <strong>slopaganda</strong>. According to The
                Guardian, News Corp Australia is currently churning out 3000
                &quot;local&quot; generative AI stories each week. In the coming
                years, such &quot;generative AI slop&quot; will present multiple
                knowledge-related epistemic challenges.
              </p>
              <p className="mt-4 leading-8">
                We draw on contemporary research in cognitive science and
                artificial intelligence to diagnose the problem of slopaganda,
                describe recent troubling cases, then suggest several
                interventions that may help counter slopaganda.
              </p>
            </div>
            <div className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-white">
                  Authors
                </h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    {
                      name: "Michal Klincewicz",
                      title:
                        "Assistant Professor, Computational Cognitive Science",
                      affiliation: "Tilburg University",
                      website:
                        "https://sites.google.com/site/michalklincewicz/",
                      image: "michal-klincewicz",
                    },
                    {
                      name: "Mark Alfano",
                      title: "Professor of Philosophy",
                      affiliation: "Macquarie University",
                      website: "https://www.alfanophilosophy.com/",
                      image: "mark-alfano2",
                    },
                    {
                      name: "Amir Ebrahimi Fard",
                      title: "Independent Researcher",
                      affiliation: "",
                      website: "https://sites.google.com/view/ebrahimifard",
                      image: "amir-ebrahimi-fard",
                    },
                  ].map((author) => (
                    <a
                      key={author.name}
                      href={author.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center transition hover:opacity-80"
                    >
                      <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-2 border-emerald-400/50 bg-slate-900">
                        <Image
                          src={`/images/authors/${author.image}.jpg`}
                          alt={author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <h4 className="font-semibold text-white">{author.name}</h4>
                      <p className="text-sm text-slate-400">{author.title}</p>
                      {author.affiliation && (
                        <p className="text-xs text-slate-500">
                          {author.affiliation}
                        </p>
                      )}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-xl font-semibold text-white">
                  What we show
                </h3>
                <ul className="mt-3 space-y-3 text-slate-400">
                  <li>A precise definition of slopaganda in the AI age</li>
                  <li>
                    The mechanics of mass-produced, personalized AI content
                    designed to manipulate
                  </li>
                  <li>
                    Contemporary interventions to counter the epistemic
                    challenges
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
