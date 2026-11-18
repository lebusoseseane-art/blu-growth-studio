import { createFileRoute, Link } from "@tanstack/react-router";
import { SaverBadge } from "@/components/saver-case";

const ICON = "/assets/saver-icon.jpg";

const SCOPE = [
  {
    title: "Market Research & Consumer Insights",
    body: "Retail and audience research to shape relevant South African launch messaging and identify the consumers Saver needs to reach.",
  },
  {
    title: "Integrated MarCom Strategy",
    body: "A marketing communications plan connecting pre-launch activity, audience development and the wider go-to-market effort.",
  },
  {
    title: "Pre-Launch Hype & Awareness",
    body: "Pre-launch campaign messaging and social content to introduce Saver and build awareness ahead of its arrival.",
  },
  {
    title: "Full Go-To-Market Rollout",
    body: "Coordinated launch communications and advertising planning for when the platform is ready to go live.",
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
      { property: "og:url", content: "https://blu-growth-studio.lovable.app/work/saver" },
      { name: "twitter:title", content: "Saver App — Coming Soon | TRU BLU Digital Marketing" },
      { name: "twitter:description", content: "Tru Blu is leading marketing for Saver, a South African retail fintech platform yet to launch." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://blu-growth-studio.lovable.app/work/saver" }],
  }),
  component: SaverWork,
});

function SaverWork() {
  return (
    <div className="bg-background text-foreground">
      <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10">
        <Link
          to="/"
          className="eyebrow text-muted-foreground transition-colors hover:text-primary"
        >
          ← Back to selected work
        </Link>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <img src={ICON} alt="Saver App icon" className="h-16 w-16 rounded-2xl" />
          <SaverBadge />
        </div>
        <h1 className="display mt-8 max-w-4xl text-4xl leading-tight md:text-6xl">
          Saver App — Marketing for a platform coming soon
        </h1>
        <p className="mt-6 text-xl font-semibold text-primary md:text-2xl">SAVE • GROW • LIVE</p>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Saver is coming soon — the platform is yet to launch. Tru Blu is the marketing agency
          behind its market introduction: the research, the marketing communication strategy and
          the nationwide go-to-market rollout that will carry Saver from pre-launch hype to a
          full launch campaign.
        </p>

        <p className="eyebrow mt-20 text-primary">Tru Blu’s marketing scope</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {SCOPE.map((s, i) => (
            <div key={s.title} className="border-t border-border py-7 md:px-4">
              <p className="eyebrow text-primary">0{i + 1}</p>
              <h2 className="display mt-3 text-2xl md:text-3xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>

        <p className="eyebrow mt-24 text-primary">Marketing assets</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {VAULT.map((v) => (
            <figure key={v.title} className="group overflow-hidden border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={v.src} alt={`Saver App ${v.title} — marketing assets by Tru Blu`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <figcaption className="p-6">
                <h3 className="display text-xl">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-24 border-t border-border py-14 text-center md:py-20">
          <p className="display mx-auto max-w-3xl text-3xl md:text-4xl">Marketing Saver’s next chapter.</p>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Saver has not launched yet. Tru Blu’s role is its marketing and go-to-market preparation.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center justify-center bg-foreground px-10 py-5 text-[0.7rem] uppercase tracking-[0.2em] text-background transition-colors hover:bg-primary"
          >
            Partner with Tru Blu
          </Link>
        </div>
      </div>
    </div>
  );
}
