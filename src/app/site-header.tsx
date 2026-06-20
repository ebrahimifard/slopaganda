"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const menuItems = [
  { href: "/#introduction", label: "What is Slopaganda" },
  { href: "/press-coverage", label: "Press Coverage" },
  { href: "/deep-dives", label: "Deep Dives" },
  { href: "/policy-coverage", label: "Policy Coverage" },
];

const resourceItems = [
  { href: "/slopaganda-papers", label: "Slopaganda Papers" },
  { href: "/slopaganda-projects", label: "Slopaganda Projects" },
  { href: "/slopaganda-articles", label: "Slopaganda Articles" },
  { href: "/slopaganda-events", label: "Slopaganda Events" },
];

export default function SiteHeader() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(event: PointerEvent) {
      if (
        resourcesRef.current &&
        !resourcesRef.current.contains(event.target as Node)
      ) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

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
          <div
            ref={resourcesRef}
            className="relative"
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") {
                setResourcesOpen(true);
              }
            }}
            onPointerLeave={(event) => {
              if (event.pointerType === "mouse") {
                setResourcesOpen(false);
              }
            }}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={resourcesOpen}
              onPointerDown={(event) => {
                if (event.pointerType !== "mouse") {
                  event.preventDefault();
                  setResourcesOpen((open) => !open);
                }
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setResourcesOpen((open) => !open);
                }
              }}
              className="flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 transition hover:bg-slate-800 hover:text-white"
            >
              External Resources
              <span
                className={`text-xs text-emerald-300 transition-transform ${
                  resourcesOpen ? "rotate-180" : ""
                }`}
              >
                v
              </span>
            </button>
            <div
              className={`absolute right-0 top-full z-20 min-w-56 pt-2 transition duration-150 ${
                resourcesOpen
                  ? "visible pointer-events-auto translate-y-0 opacity-100"
                  : "invisible pointer-events-none translate-y-1 opacity-0"
              }`}
            >
              <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 p-2 shadow-xl shadow-slate-950/40">
                {resourceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setResourcesOpen(false)}
                    className="block rounded-xl px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
