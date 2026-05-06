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
            <a href="#interviews" className="transition hover:text-white">
              Press Coverage
            </a>
              <a href="/what-others-say" className="transition hover:text-white">
                What Others Say
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
                      name: "Michał Klincewicz",
                      title: "Assistant Professor, Computational Cognitive Science",
                      affiliation: "Tilburg University",
                      website: "https://sites.google.com/site/michalklincewicz/",
                      image: "michal-klincewicz"
                    },
                    {
                      name: "Mark Alfano",
                      title: "Professor of Philosophy",
                      affiliation: "Macquarie University",
                      website: "https://www.alfanophilosophy.com/",
                      image: "mark-alfano"
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


        <section id="interviews" className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
              Press coverage
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Recognition from media
            </h2>
            <p className="max-w-3xl text-slate-300 leading-8">
              The concept of slopaganda is already resonating with journalists, researchers, and policy makers covering the intersection of AI and information ecosystems. This section collects articles, interviews, and features about slopaganda in the media, including appearances and commentary from the authors on TV, radio, and other platforms.
            </p>
          </div>
          <div className="mt-10 space-y-8">
            {/* YouTube video embed */}
            <div className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">In-Depth Conversations</p>
                </div>
                <span className="text-xs text-slate-500">May 18, 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-4 group-hover:text-emerald-200 transition-colors">
                Video discussion on slopaganda and AI-generated content
              </h3>
              <p className="text-sm text-slate-400 mb-4">Exploring the phenomena of slopaganda: the interaction between propaganda and generative AI.</p>
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
                <span className="text-xs text-slate-500">14 Oct 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Slopaganda: Propaganda and AI
              </h3>
              <p className="text-sm text-slate-400 mb-3">Discussion on AI-powered "slopaganda" - propaganda that's unprecedented in speed, scale, and persuasiveness. Guest: Mark Alfano, Professor of Philosophy at Macquarie University.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Listen now</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">🎧</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* New YouTube Interview */}
            <div className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Big [If True]</p>
                </div>
                <span className="text-xs text-slate-500">13 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-4 group-hover:text-emerald-200 transition-colors">
                Interview on slopaganda research
              </h3>
              <p className="text-sm text-slate-400 mb-4">Discussion on the online propaganda battleground featuring AI-generated "slopaganda" in the Iran-Israel-US conflict. Guests: Matthew Gault (404 Media), Jason Stanley (University of Toronto), and Michal Klincewicz (Tilburg University).</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 h-full w-full rounded-2xl"
                  src="https://www.youtube.com/embed/cvC02UKZvY8"
                  title="Slopaganda Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* ABC News Audio Interview */}
            <a href="https://www.abc.net.au/news/2026-04-13/naus_slopagandanr_1304/106559166" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">ABC News</p>
                </div>
                <span className="text-xs text-slate-500">13 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Iran is dominating the 'slopaganda' war on social media
              </h3>
              <div className="text-sm text-slate-400 mb-3 space-y-2">
                <p>Discussion on how AI-generated "slopaganda" is being weaponized in the propaganda war between Iran and the US, and its potential impact on public opinion.</p>
                <p>Mark Alfano, Associate Professor of Philosophy at Macquarie University, spoke with ABC NewsRadio's Dijana Damjanovic.</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Listen now</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">🎧</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* Saufex Podcast */}

              {/* The Breakfast Couch Interview */}
              <a href="https://iview.abc.net.au/show/breakfast-couch/series/0/video/NC2613V009S00" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">The Breakfast Couch</p>
                  </div>
                  <span className="text-xs text-slate-500">3 April 2026</span>
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                  Interview with Prof. Mark Alfano
                </h3>
                <p className="text-sm text-slate-400 mb-3">A feature interview with Prof. Mark Alfano on slopaganda, AI, and information ecosystems, aired on ABC's The Breakfast Couch.</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Watch now</span>
                  <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span className="text-sm">🎬</span>
                    <span>→</span>
                  </div>
                </div>
              </a>

              {/* ARD Mediathek Interview */}
              <a href="https://www.ardmediathek.de/video/ttt-titel-thesen-temperamente/ki-propaganda-mit-lego-mannchen/ard/Y2E2NTIwNGEtNWE3Yi00YmNmLTgyNmYtODk1ZTBiMDFhZTZj" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">ARD Mediathek</p>
                  </div>
                  <span className="text-xs text-slate-500">3 May 2026</span>
                </div>
                <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                  Interview with Dr. Michal Klincewicz
                </h3>
                <div className="text-sm text-slate-400 mb-3 space-y-2">
                  <p>Bericht über KI-generierte Satirevideos im Iran-Krieg: Virale Clips, die politische Gegner karikieren und Stereotype verstärken.</p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-400">Watch now</span>
                  <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                    <span className="text-sm">🎬</span>
                    <span>→</span>
                  </div>
                </div>
              </a>
            <a href="https://soundcloud.com/saufex/dr-michal-klincewicz" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Saufex Podcast</p>
                </div>
                <span className="text-xs text-slate-500">19 February 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Dr. Michał Klincewicz on slopaganda
              </h3>
              <p className="text-sm text-slate-400 mb-3">Audio interview with Dr. Michał Klincewicz on slopaganda and the new dynamics of AI-driven persuasion.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Listen now</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">🎧</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* Deutschlandfunk Kultur */}
            <a href="https://www.deutschlandfunkkultur.de/ai-slop-wie-ki-inhalte-unsere-wahrnehmung-veraendern-100.html" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-sky-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Deutschlandfunk Kultur</p>
                </div>
                <span className="text-xs text-slate-500">9 October 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                How AI content changes our perception
              </h3>
              <p className="text-sm text-slate-400 mb-3">Report on how AI-generated content reshapes attention and perception as volume outpaces our ability to process it.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* Ashlyn Kate Bryson interview */}
            <a href="https://substack.com/home/post/p-173952497" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-fuchsia-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Ashlyn Kate Bryson</p>
                </div>
                <span className="text-xs text-slate-500">22 September 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                "Slopaganda": Dr. Michał Klincewicz Explains the Dark Future of AI Persuasion
              </h3>
              <p className="text-sm text-slate-400 mb-3">A concise interview summary of Dr. Michał Klincewicz on the evolving threat of AI-enabled persuasion and slopaganda.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* BTN (Behind the News) interview */}
            <a href="https://www.abc.net.au/btn/classroom/slopaganda/105914076" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-orange-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">BTN (Behind the News)</p>
                </div>
                <span className="text-xs text-slate-500">20 October 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Slopaganda
              </h3>
              <p className="text-sm text-slate-400 mb-3">Interview with Prof. Mark Alfano on the concept of slopaganda and its impact, featured on BTN (Behind the News).</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Watch interview</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📺</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* The Guardian feature */}
            <a href="https://www.theguardian.com/us-news/2026/jan/29/the-slopaganda-era-10-ai-images-posted-by-the-white-house-and-what-they-teach-us" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">The Guardian</p>
                </div>
                <span className="text-xs text-slate-500">29 Jan 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                The slopaganda era: AI images posted by the White House and what they teach us
              </h3>
              <p className="text-sm text-slate-400 mb-3">Feature on the rise of slopaganda and the use of AI-generated images in political communication.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* The New Yorker feature */}
            <a href="https://www.newyorker.com/culture/infinite-scroll/the-team-behind-a-pro-iran-lego-themed-viral-video-campaign" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">The New Yorker</p>
                </div>
                <span className="text-xs text-slate-500">April 2, 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                The team behind a pro-Iran LEGO-themed viral video campaign
              </h3>
              <p className="text-sm text-slate-400 mb-3">A look at the creators of a viral AI-powered propaganda campaign using LEGO themes in the Iran conflict.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* Boston Globe feature */}
            <a href="https://www.bostonglobe.com/2025/07/29/nation/ai-approved-this-message-how-2026-may-be-first-election-where-artificially-generated-content-is-inescapable/" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Boston Globe</p>
                </div>
                <span className="text-xs text-slate-500">29 July 2025</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                AI approved this message: How 2026 may be the first election where artificially generated content is inescapable
              </h3>
              <p className="text-sm text-slate-400 mb-3">Analysis of the impact of AI-generated content on elections and the information ecosystem.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>
            {/* NBC News interview */}
            <a href="https://www.nbcnews.com/video/how-slopaganda-ai-videos-could-influence-the-war-between-the-u-s-and-iran-261374533511" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">NBC News</p>
                </div>
                <span className="text-xs text-slate-500">15 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                How 'slopaganda' AI videos could influence the war between the U.S. and Iran
              </h3>
              <p className="text-sm text-slate-400 mb-3">Mark Alfano discusses the potential impact of AI-generated slopaganda videos on the U.S.-Iran conflict.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Watch interview</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📺</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* de Volkskrant interview */}
            <a href="https://www.volkskrant.nl/kijkverder/v/2026/ai-propaganda-iran-vs-slopaganda-lego~v2964364/" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-lime-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">de Volkskrant</p>
                </div>
                <span className="text-xs text-slate-500">22 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Iran bevecht Donald Trump met lego: AI-president delft onderspit in propagandavideo’s
              </h3>
              <p className="text-sm text-slate-400 mb-3">Dr. Michał Klincewicz explains how Iran uses AI and Lego-themed videos in the propaganda battle against Trump.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* TVN24+ interview */}
            <a href="https://tvn24.pl/biznes/tech/propaganda-z-wykorzystaniem-ai-czyli-slopaganda-wojna-w-ktorej-nie-chodzi-o-prawde-st9019064" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">TVN24+</p>
                </div>
                <span className="text-xs text-slate-500">29 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Wojna na slopagandę. "To może wywołać totalny chaos"
              </h3>
              <p className="text-sm text-slate-400 mb-3">Interview with Dr. Michał Klincewicz on AI-powered propaganda (slopaganda) and the risks of informational chaos. In Polish.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* iMEdD interview */}
            <a href="https://lab.imedd.org/en/slopaganda-institutionalized/" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">iMEdD</p>
                </div>
                <span className="text-xs text-slate-500">21 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Slopaganda, institutionalized
              </h3>
              <p className="text-sm text-slate-400 mb-3">Prof. Mark Alfano and Dr. Michał Klincewicz discuss the institutionalization of slopaganda in media and politics.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read interview</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* ABC Radio National Life Matters interview */}
            <a href="https://www.abc.net.au/listen/programs/lifematters/watch-out-for-slopaganda-in-your-feeds/106551364" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">ABC Radio National</p>
                </div>
                <span className="text-xs text-slate-500">13 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Watch out for 'slopaganda' in your feeds
              </h3>
              <p className="text-sm text-slate-400 mb-3">Prof. Mark Alfano explains how slopaganda is shaping what we see on social media.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Listen now</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">🎧</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* ABC Radio National Weekend Evenings interview */}
            <a href="https://www.abc.net.au/listen/programs/weekendevenings/weekend-evenings/106593568" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">ABC Radio National</p>
                </div>
                <span className="text-xs text-slate-500">26 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                National Weekend Evenings
              </h3>
              <p className="text-sm text-slate-400 mb-3">Prof. Mark Alfano discusses slopaganda and meme warfare on ABC's Weekend Evenings.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Listen now</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">🎧</span>
                  <span>→</span>
                </div>
              </div>
            </a>

            {/* RNZ interview */}
            <a href="https://www.rnz.co.nz/news/world/593078/meme-warfare-and-slopaganda-are-defining-the-ai-era-iran-war" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">RNZ</p>
                </div>
                <span className="text-xs text-slate-500">22 April 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                Meme warfare and 'slopaganda' are defining the AI-era Iran war
              </h3>
              <p className="text-sm text-slate-400 mb-3">Prof. Mark Alfano discusses meme warfare and slopaganda in the context of the Iran war on RNZ.</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read article</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📰</span>
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
            {(() => {
              const articles = [
                {
                  outlet: "The Conversation",
                  description: "Slopaganda wars: How and why the US and Iran are flooding the zone with viral AI-generated noise",
                  link: "https://theconversation.com/slopaganda-wars-how-and-why-the-us-and-iran-are-flooding-the-zone-with-viral-ai-generated-noise-280024",
                  date: "April 7, 2026"
                },
                {
                  outlet: "PsyArXiv",
                  description: "How slopaganda exploits features of human cognition",
                  link: "https://osf.io/preprints/psyarxiv/3zbdn_v1",
                  date: "11 March 2026"
                }
              ];
              return articles.map((item, index) => (
                <div key={item.outlet}>
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
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
                  {item.outlet === "The Conversation" && (
                    <div className="mt-2 text-xs text-slate-500">
                      Also featured in: <a href="https://asiatimes.com/2026/04/slopaganda-us-iran-deploy-ai-slop-as-weapons-of-war/" target="_blank" rel="noopener noreferrer" className="underline decoration-slate-600 decoration-1 hover:text-emerald-200">Asia Times</a>, <a href="https://thewire.in/tech/ai-slopaganda-is-probably-here-to-stay" target="_blank" rel="noopener noreferrer" className="underline decoration-slate-600 decoration-1 hover:text-emerald-200">The Wire</a>, and <a href="https://www.channelnewsasia.com/commentary/ai-generated-slop-propaganda-us-iran-war-6043521" target="_blank" rel="noopener noreferrer" className="underline decoration-slate-600 decoration-1 hover:text-emerald-200">CNA</a>.
                    </div>
                  )}
                </div>
              ));
            })()}
          </div>
        </section>

        <section id="policy-documents" className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20 mt-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
              Policy and official reports
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Slopaganda in Policy Documents
            </h2>
            <p className="max-w-3xl text-slate-300 leading-8">
              References to slopaganda in government and institutional reports.
            </p>
          </div>
          <div className="mt-10 grid gap-6">
            <a href="https://www.aph.gov.au/Parliamentary_Business/Committees/Senate/Information_Integrity_on_Climate_Change_and_Energy/ClimateIntegrity/Report/Chapter_9_-_Committee_view" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Hansard</p>
                </div>
                <span className="text-xs text-slate-500">Commonwealth of Australia 2026</span>
              </div>
              <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
                The Integrity Gap: Restoring Trust in the Climate and Energy Debate
              </h3>
              <p className="text-sm text-slate-400 mb-3">
                <span className="font-semibold">The Senate Select Committee on Information Integrity on Climate Change and Energy</span> references "slopaganda" in its official report on the integrity gap in climate and energy debates.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-400">Read document</span>
                <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
                  <span className="text-sm">📄</span>
                  <span>→</span>
                </div>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
