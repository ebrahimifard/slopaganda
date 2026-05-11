import Link from "next/link";

const menuItems = [
  { href: "/#introduction", label: "What is Slopaganda" },
  { href: "/#paper", label: "Paper" },
  { href: "/press-coverage", label: "Press Coverage" },
  { href: "/deep-dives", label: "Deep Dives" },
  { href: "/policy-documents", label: "Policy Documents" },
  { href: "/what-others-say", label: "What Others Say" },
  { href: "/slopaganda-events", label: "Slopaganda Events" },
];

export default function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-10">
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-slate-400">
            Slopaganda
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:whitespace-nowrap">
            Propaganda in the age of generative AI.
          </h1>
        </div>
        <nav className="flex flex-wrap gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 p-2 text-sm text-slate-300 shadow-lg shadow-slate-950/20 backdrop-blur">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
