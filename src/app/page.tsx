import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-400">
              Slopaganda
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Propaganda in the age of generative AI.
            </h1>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a href="#introduction" className="transition hover:text-white">
              What is Slopaganda
            </a>
            <a href="#paper" className="transition hover:text-white">
              Paper
            </a>
            <a href="#media" className="transition hover:text-white">
              Press
            </a>
            <a href="#interviews" className="transition hover:text-white">
              Interviews
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl space-y-24 px-6 pb-20 sm:px-10">
        <section id="introduction" className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              What is Slopaganda?
            </h2>
            <div className="text-slate-300 leading-8">
              <p>
                The evolution of telecommunications, the web, and social media platforms created informational overload. Simultaneously, advances in artificial intelligence enabled information personalisation. The confluence of these led to slopaganda and the slopaganda entrepreneur. Slopaganda refers to mass-produced, personalised AI-generated content designed to manipulate beliefs and overwhelm the information ecosystem.
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
              <h3 className="mb-4 text-xl font-semibold text-white">Abstract</h3>
              <p className="leading-8">
                At least since Francis Bacon, the slogan "knowledge is power" has been used to capture the relationship between decision-making at a group level and information. Being able to shape the informational environment for a group is a way to shape their decisions. This paper focuses on strategies that are intentionally designed to impact the decision-making capacities of groups.
              </p>
              <p className="mt-4 leading-8">
                Among these strategies, the best known are political rhetoric, propaganda, and misinformation. We bring out a relatively new strategy: <strong>slopaganda</strong>. According to The Guardian, News Corp Australia is currently churning out 3000 "local" generative AI stories each week. In the coming years, such "generative AI slop" will present multiple knowledge-related (epistemic) challenges.
              </p>
              <p className="mt-4 leading-8">
                We draw on contemporary research in cognitive science and artificial intelligence to diagnose the problem of slopaganda, describe recent troubling cases, then suggest several interventions that may help counter slopaganda.
              </p>
            </div>
            <div className="space-y-8 rounded-3xl border border-slate-800 bg-slate-950 p-8 text-slate-300 shadow-xl shadow-slate-950/20">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Authors</h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  {[
                    {
                      name: "Mark Alfano",
                      title: "Professor of Philosophy",
                      affiliation: "Macquarie University",
                      website: "https://www.alfanophilosophy.com/",
                      image: "mark-alfano"
                    },
                    {
                      name: "Michał Klincewicz",
                      title: "Assistant Professor, Computational Cognitive Science",
                      affiliation: "Tilburg University",
                      website: "https://sites.google.com/site/michalklincewicz/",
                      image: "michal-klincewicz"
                    },
                    {
                      name: "Amir Ebrahimi Fard",
                      title: "Independent Researcher",
                      affiliation: "",
                      website: "https://sites.google.com/view/ebrahimifard",
                      image: "amir-ebrahimi-fard"
                    }
                  ].map((author) => (
                    <a key={author.name} href={author.website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center text-center transition hover:opacity-80">
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
                      {author.affiliation && <p className="text-xs text-slate-500">{author.affiliation}</p>}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">What we show</h3>
                <ul className="mt-3 space-y-3 text-slate-400">
                  <li>• A precise definition of slopaganda in the AI age</li>
                  <li>• The mechanics of mass-produced, personalized AI content designed to manipulate</li>
                  <li>• Contemporary interventions to counter the epistemic challenges</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="media" className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
              Press coverage
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Recognition from leading media outlets.
            </h2>
            <p className="max-w-3xl text-slate-300 leading-8">
              The concept of slopaganda is already resonating with journalists, researchers, and policy makers covering the intersection of AI and information ecosystems.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                outlet: "The Guardian",
                description: "The slopaganda era: AI images posted by the White House and what they teach us",
                link: "https://www.theguardian.com/us-news/2026/jan/29/the-slopaganda-era-10-ai-images-posted-by-the-white-house-and-what-they-teach-us",
                date: "Jan 29, 2026"
              },
              {
                outlet: "The New Yorker",
                description: "The team behind a pro-Iran LEGO-themed viral video campaign",
                link: "https://www.newyorker.com/culture/infinite-scroll/the-team-behind-a-pro-iran-lego-themed-viral-video-campaign",
                date: "Culture"
              },
              {
                outlet: "Boston Globe",
                description: "AI approved this message: How 2026 may be the first election where artificially generated content is inescapable",
                link: "https://www.bostonglobe.com/2025/07/29/nation/ai-approved-this-message-how-2026-may-be-first-election-where-artificially-generated-content-is-inescapable/",
                date: "Jul 29, 2025"
              },
              {
                outlet: "ABC News in Your Classroom",
                description: "Slopaganda",
                link: "https://www.abc.net.au/btn/classroom/slopaganda/105914076",
                date: "Education"
              }
            ].map((item, index) => (
              <a key={item.outlet} href={item.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${index % 4 === 0 ? 'bg-red-400' : index % 4 === 1 ? 'bg-blue-400' : index % 4 === 2 ? 'bg-green-400' : 'bg-yellow-400'}`}></div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">{item.outlet}</p>
                  </div>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                  {item.description}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Read article</span>
                  <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">→</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="interviews" className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
              In conversation
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Interviews and discussions.
            </h2>
            <p className="max-w-3xl text-slate-300 leading-8">
              The research team has engaged with podcasts, video discussions, and other media to explain the concept and its implications.
            </p>
          </div>
          <div className="mt-10 space-y-8">
            {/* YouTube video embed */}
            <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-emerald-300/80 mb-4">YouTube</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-2xl"
                  src="https://www.youtube.com/embed/E-5oz0s4aaw"
                  title="Slopaganda Discussion"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ABC Radio */}
            <a href="https://www.abc.net.au/listen/programs/philosopherszone/slopaganda-propaganda-ai/105853258" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">ABC Philosopher's Zone</p>
                </div>
                <span className="text-xs text-slate-500">Podcast</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Slopaganda: Propaganda and AI
              </h3>
              <p className="text-sm text-slate-400 mb-3">Radio discussion exploring the concept and implications</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Listen now</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">🎧</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>
        </section>

        <section id="analysis" className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
              Analysis and perspective
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Deep dives on slopaganda.
            </h2>
            <p className="max-w-3xl text-slate-300 leading-8">
              Complementary analysis and commentary exploring the mechanisms and implications of slopaganda.
            </p>
          </div>
          <div className="mt-10 grid gap-4">
            {[
              {
                outlet: "The Conversation",
                description: "Slopaganda wars: How and why the US and Iran are flooding the zone with viral AI-generated noise",
                link: "https://theconversation.com/slopaganda-wars-how-and-why-the-us-and-iran-are-flooding-the-zone-with-viral-ai-generated-noise-280024",
                date: "Analysis"
              }
            ].map((item, index) => (
              <a key={item.outlet} href={item.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">{item.outlet}</p>
                  </div>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                  {item.description}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Read article</span>
                  <div className="text-emerald-400 group-hover:text-emerald-300 transition-colors">→</div>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
