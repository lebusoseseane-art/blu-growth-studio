import { createFileRoute, Link } from "@tanstack/react-router";
import { SaverBadge } from "@/components/saver-case";

const ICON = "/assets/saver-icon.jpg";

const SCOPE = [
  {
    title: "Market Research & Consumer Insights",
    body: "Deep localized retail research, South African consumer saving habits analysis, and behavioral target profiling to ensure Saver enters the market with the right message.",
  },
  {
    title: "Integrated MarCom Strategy",
    body: "Formulating comprehensive strategic marketing communication plans and multi-channel acquisition funnels for Saver's arrival.",
  },
  {
    title: "Pre-Launch Hype & Awareness",
    body: "Coming-soon teaser campaigns, social presence building and owned-channel content designed to build nationwide anticipation ahead of launch.",
  },
  {
    title: "Full Go-To-Market Rollout",
    body: "End-to-end management of the high-impact launch campaigns, experiential brand activations and performance advertising when Saver goes live.",
  },
];

const VAULT = [
  { src: "/assets/saver-p2.jpg", title: "Brand & Logo System", body: "The primary logomark and full-colour brand marks on deep navy." },
  { src: "/assets/saver-p8.jpg", title: "Campaign Creatives", body: "Launch-ready promotional banners and campaign messaging: “Smarter Saving. Bigger Goals. A Brighter Future.”" },
];

export const Route = createFileRoute("/work/saver")({
  head: () => ({
    meta: [
      { title: "Saver App — Coming Soon | TRU BLU Digital Marketing" },
      {
        name: "description",
        content:
          "Tru Blu Digital Marketing is the marketing agency behind Saver — South Africa's next retail fintech app, coming soon. Market research, marketing strategy and nationwide go-to-market rollout.",
      },
      { property: "og:title", content: "Saver App — Coming Soon | TRU BLU Digital Marketing" },
      {
        property: "og:description",
        content:
          "Marketing the launch of Saver — South Africa's next retail fintech app, coming soon.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SaverWork,
});

function SaverWork() {
  return (
    <div className="bg-saver-navy text-saver-gray">
      <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10">
        <Link
          to="/"
          className="font-inter text-xs uppercase tracking-[0.2em] text-saver-gray/60 transition-colors hover:text-saver-green"
        >
          ← Back to selected work
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <img src={ICON} alt="Saver App icon" className="h-16 w-16 rounded-2xl" />
          <SaverBadge />
        </div>
        <h2 className="mt-8 font-jakarta text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
          Saver App — Building South Africa’s Next Retail Fintech Disruptor
        </h2>
        <p className="mt-6 font-jakarta text-2xl font-bold tracking-[0.25em] text-saver-green md:text-3xl">SAVE • GROW • LIVE</p>
        <p className="mt-8 max-w-3xl font-inter text-lg leading-relaxed text-saver-gray/75">
          Saver is coming soon — the platform is yet to launch. Tru Blu is the marketing agency
          behind its market introduction: the research, the marketing communication strategy and
          the nationwide go-to-market rollout that will carry Saver from pre-launch hype to a
          full launch campaign.
        </p>

        <p className="mt-20 font-inter text-xs uppercase tracking-[0.25em] text-saver-green">Executive Summary // Tru Blu’s Marketing Scope</p>
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
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {VAULT.map((v) => (
            <figure key={v.title} className="group overflow-hidden rounded-2xl border border-saver-gray/10 bg-saver-blue/20">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={v.src} alt={`Saver App ${v.title} — marketing assets by Tru Blu`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
            Partner with Tru Blu for comprehensive agency backing—from market research to nationwide market dominance.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block rounded-full bg-saver-green px-10 py-5 font-inter text-[0.7rem] font-medium uppercase tracking-[0.2em] text-saver-navy transition-opacity hover:opacity-85"
          >
            Partner with Tru Blu
          </Link>
        </div>
      </div>
    </div>
  );
}
