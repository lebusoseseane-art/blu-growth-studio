import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const ICON = "/assets/saver-icon.jpg";

const SCOPE = [
  {
    title: "Conceptualization & Brand Architecture",
    body: "Full visual identity system, typography hierarchy, multi-format icon variations, and the signature “Save • Grow • Live” messaging framework.",
  },
  {
    title: "Market Research & Consumer Insights",
    body: "Deep localized retail research, South African consumer saving habits analysis, and behavioral target profiling to ensure product-market fit.",
  },
  {
    title: "Integrated MarCom Strategy",
    body: "Formulating comprehensive strategic marketing communication plans, multi-channel acquisition funnels, and pre-launch hype frameworks.",
  },
  {
    title: "Full Go-To-Market Rollout",
    body: "End-to-end management of upcoming high-impact launch campaigns, experiential brand activations, and performance advertising.",
  },
];

const VAULT = [
  { src: "/assets/saver-p2.jpg", title: "Brand & Logo System", body: "Primary logomark, full-colour app icons on deep navy, and responsive icon variations." },
  { src: "/assets/saver-dashboard.jpg", title: "Mobile App UI & Dashboard", body: "Home-screen app icon and dark-mode dashboard with live Rand balances (R 12,450.00), Save / Send / Top Up actions and active goals like the Emergency Fund." },
  { src: "/assets/saver-p8.jpg", title: "App Store & Campaign Creatives", body: "Store-ready promotional banners and campaign messaging: “Smarter Saving. Bigger Goals. A Brighter Future.”" },
];

function Badge() {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-saver-green/50 bg-saver-navy/80 px-3 py-1.5 font-inter text-[0.7rem] font-medium uppercase tracking-[0.18em] text-saver-green backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-saver-green opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-saver-green" />
      </span>
      Coming Soon
    </span>
  );
}

export function SaverCase() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <article className="group relative cursor-pointer overflow-hidden bg-saver-navy text-saver-gray" onClick={() => setOpen(true)}>
        <div className="grid lg:grid-cols-2">
          <figure className="relative flex h-[58vh] items-center justify-center overflow-hidden bg-gradient-to-br from-saver-blue via-saver-navy to-saver-navy md:h-[76vh]">
            <div className="absolute -bottom-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-[50%] bg-saver-green/20 blur-3xl" />
            <img
              src={ICON}
              alt="Saver App logomark — fintech brand architecture by Tru Blu Digital Marketing, Johannesburg"
              loading="lazy"
              className="relative w-2/3 max-w-sm rounded-[2rem] shadow-2xl transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
            />
            <div className="absolute left-6 top-6"><Badge /></div>
          </figure>
          <div className="self-center p-8 md:p-14">
            <p className="font-inter text-[0.7rem] uppercase tracking-[0.2em] text-saver-green">Fintech &amp; Retail Innovation // Brand Architecture &amp; Go-To-Market</p>
            <h3 className="mt-5 font-jakarta text-4xl font-extrabold tracking-tight md:text-5xl">Saver App</h3>
            <p className="mt-6 max-w-md font-inter text-lg leading-relaxed text-saver-gray/75">
              Tru Blu is the lead strategic digital marketing agency driving the conceptualization, brand architecture, and nationwide market introduction of South Africa's next major retail fintech app.
            </p>
            <button
              type="button"
              className="mt-10 rounded-full bg-saver-green px-8 py-4 font-inter text-[0.7rem] font-medium uppercase tracking-[0.2em] text-saver-navy transition-opacity duration-300 hover:opacity-85"
            >
              Explore Case Study
            </button>
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-saver-navy text-saver-gray" role="dialog" aria-modal="true" aria-label="Saver App case study">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="fixed right-6 top-6 z-10 rounded-full border border-saver-gray/30 bg-saver-navy px-4 py-3 font-inter text-xs uppercase tracking-[0.2em] hover:border-saver-green hover:text-saver-green"
          >
            Close ✕
          </button>
          <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10">
            <div className="flex flex-wrap items-center gap-4">
              <img src={ICON} alt="Saver App icon" className="h-16 w-16 rounded-2xl" />
              <Badge />
            </div>
            <h2 className="mt-8 font-jakarta text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Saver App — Building South Africa’s Next Retail Fintech Disruptor
            </h2>
            <p className="mt-6 font-jakarta text-2xl font-bold tracking-[0.25em] text-saver-green md:text-3xl">SAVE • GROW • LIVE</p>
            <p className="mt-8 max-w-3xl font-inter text-lg leading-relaxed text-saver-gray/75">
              From the first sketch of the logomark to the nationwide launch plan, Tru Blu owns the brand, research, communication strategy and go-to-market rollout for Saver.
            </p>

            <p className="mt-20 font-inter text-xs uppercase tracking-[0.25em] text-saver-green">Executive Summary // Tru Blu’s Scope of Work</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {SCOPE.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-saver-gray/10 bg-saver-blue/30 p-8 transition-colors duration-300 hover:border-saver-green/50">
                  <p className="font-inter text-sm text-saver-green">0{i + 1}</p>
                  <h3 className="mt-3 font-jakarta text-2xl font-bold">{s.title}</h3>
                  <p className="mt-4 font-inter leading-relaxed text-saver-gray/75">{s.body}</p>
                  <div className="mt-6 h-1 overflow-hidden rounded-full bg-saver-gray/10">
                    <div className="h-full rounded-full bg-saver-green" style={{ width: `${100 - i * 20}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-24 font-inter text-xs uppercase tracking-[0.25em] text-saver-green">Visual Asset Vault</p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {VAULT.map((v) => (
                <figure key={v.title} className="group overflow-hidden rounded-2xl border border-saver-gray/10 bg-saver-blue/20">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img src={v.src} alt={`Saver App ${v.title} — brand kit by Tru Blu`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <figcaption className="p-6">
                    <h4 className="font-jakarta text-lg font-bold">{v.title}</h4>
                    <p className="mt-2 font-inter text-sm leading-relaxed text-saver-gray/70">{v.body}</p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-24 rounded-3xl bg-gradient-to-br from-saver-blue to-saver-navy p-10 text-center md:p-16">
              <p className="mx-auto max-w-3xl font-jakarta text-3xl font-extrabold tracking-tight md:text-4xl">Ready to Build Your Next Big Disruptor?</p>
              <p className="mx-auto mt-5 max-w-2xl font-inter text-saver-gray/75">
                Partner with Tru Blu for comprehensive agency backing—from brand architecture to nationwide market dominance.
              </p>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-10 inline-block rounded-full bg-saver-green px-10 py-5 font-inter text-[0.7rem] font-medium uppercase tracking-[0.2em] text-saver-navy transition-opacity hover:opacity-85"
              >
                Partner with Tru Blu
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
