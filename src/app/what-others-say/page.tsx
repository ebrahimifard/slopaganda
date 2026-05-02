import Link from "next/link";

export default function WhatOthersSay() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-900/95 p-10 shadow-xl shadow-slate-950/20 mt-12 max-w-5xl mx-auto">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/90">
          Press coverage
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          What Others Say About Slopaganda
        </h2>
        <p className="max-w-3xl text-slate-300 leading-8">
          This page collects notable mentions of "slopaganda" in the media and public discourse, where the concept is discussed or referenced without directly interviewing the authors or featuring their research paper.
        </p>
      </div>
      <div className="mt-10 space-y-8">
        {/* New York Times */}
        <a href="https://www.nytimes.com/interactive/2026/04/25/business/iran-trump-israel-war-memes.html" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">New York Times</p>
            </div>
            <span className="text-xs text-slate-500">April 24, 2026</span>
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
            Iran’s Meme War Against Trump Ushers In a Future of ‘Slopaganda’
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Read article</span>
            <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <span className="text-sm">📰</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* The Standard */}
        <a href="https://www.standard.co.uk/culture/music/kim-gordon-interview-play-me-b1273634.html" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">The Standard</p>
            </div>
            <span className="text-xs text-slate-500">6 March 2026</span>
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
            Kooler than ever: Kim Gordon on punk, Kurt and slopaganda
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Read article</span>
            <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <span className="text-sm">📰</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* BBC */}
        <a href="https://www.bbc.co.uk/news/articles/cjd8jrd1vnyo" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">BBC</p>
            </div>
            <span className="text-xs text-slate-500">12 April 2026</span>
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
            We spoke to the man making viral Lego-style AI videos for Iran. Experts say it's powerful propaganda
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-slate-400">Read article</span>
            <div className="flex items-center gap-2 text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <span className="text-sm">📰</span>
              <span>→</span>
            </div>
          </div>
        </a>

        {/* De Morgen */}
        <a href="https://www.demorgen.be/meningen/waarom-reageren-op-trump-jezus-precies-is-wat-slopaganda-wil-bereiken~b6905278/" target="_blank" rel="noopener noreferrer" className="group block rounded-2xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition-all duration-300 hover:border-emerald-400/60 hover:shadow-emerald-500/10 hover:shadow-xl hover:-translate-y-1">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-pink-400"></div>
              <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">De Morgen</p>
            </div>
            <span className="text-xs text-slate-500">April 15, 2026</span>
          </div>
          <h3 className="text-lg font-semibold text-white leading-tight mb-2 group-hover:text-emerald-200 transition-colors">
            Waarom reageren op Trump-Jezus precies is wat slopaganda wil bereiken
          </h3>
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
  );
}
