import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";

const COVER = "/assets/bellucci-bottle.jpg?v=2";

const GALLERY = [
  { src: "/assets/bellucci-stage.jpg?v=2", caption: "Venue Branding & Banner Integration at Maracanà Sandton", span: "md:col-span-2" },
  { src: "/assets/bellucci-bottle.jpg?v=2", caption: "Exclusive Bottle Service & Table Experience", span: "md:row-span-2" },
  { src: "/assets/bellucci-bar.jpg?v=2", caption: "Premium Bar Presentation & Ice Service", span: "md:col-span-2" },
];

const IMPACT = [
  {
    title: "Prime Venue Real Estate",
    body: "Strategically placed at the Banquet Luxury Sunset Event Experience — bespoke VIP table setups, high-visibility bar positioning, and custom branded bottle presentation service.",
  },
  {
    title: "Targeted HNW Immersion",
    body: "Direct product experience designed for Sandton’s top tastemakers, influencers, and luxury spirit consumers.",
  },
  {
    title: "Digital & Content Traction",
    body: "Live event photography and curated social content capture driving post-activation brand reach.",
  },
];

const META = [
  ["Client", "Bellucci Luxury Vodka"],
  ["Event", "Banquet Luxury Sunset Event Experience"],
  ["Venue Partner", "Maracanà Sandton"],
  ["Scope", "Experiential Marketing, PR & Venue Activation, High-Res Content Creation"],
];

export const Route = createFileRoute("/work/bellucci")({
  head: () => ({
    meta: [
      { title: "Bellucci Luxury Vodka — PR Activation | TRU BLU Digital Marketing" },
      {
        name: "description",
        content:
          "Bellucci Luxury Vodka strategically placed at the Banquet Luxury Sunset Event Experience at Maracanà Sandton — experiential marketing, PR and venue activation by Tru Blu Digital Marketing.",
      },
      { property: "og:title", content: "Bellucci Luxury Vodka — PR Activation | TRU BLU Digital Marketing" },
      {
        property: "og:description",
        content:
          "Experiential venue branding, product placement and luxury market positioning at Maracanà Sandton, Johannesburg.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BellucciWork,
});

function BellucciWork() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLightbox(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <div className="bg-navy-deep text-limestone">
      <figure className="relative">
        <img
          src={COVER}
          alt="Bellucci Luxury Vodka bottle service PR activation in Sandton, Johannesburg by Tru Blu"
          loading="lazy"
          width={1200}
          height={1504}
          className="aspect-[4/5] w-full object-cover md:aspect-auto md:h-[76vh]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
        <span className="eyebrow absolute left-6 top-6 border border-limestone/40 px-3 py-2 text-limestone backdrop-blur-sm">
          Maracana, Sandton
        </span>
      </figure>
      <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10">
        <Link
          to="/"
          className="eyebrow text-limestone/60 transition-colors hover:text-aegean"
        >
          ← Back to selected work
        </Link>
        <p className="eyebrow mt-10 text-aegean">Featured work</p>
        <h2 className="display mt-6 text-4xl leading-[0.9] md:text-6xl">
          Elevating Bellucci Luxury Vodka in Sandton’s Premier Nightlife Scene
        </h2>
        <p className="mt-8 max-w-3xl font-serif text-xl italic text-limestone/75">
          How Tru Blu strategically placed Bellucci at the Banquet Luxury Sunset Event Experience at Maracanà Sandton — executing high-impact venue branding, product placement, and experiential activation to position the brand directly in front of South Africa's high-net-worth clientele.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          {META.map(([k, v]) => (
            <span key={k} className="border border-limestone/30 px-4 py-2 text-sm">
              <span className="eyebrow mr-2 text-limestone/55">{k}</span>
              {v}
            </span>
          ))}
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3">
          {IMPACT.map((item, i) => (
            <div key={item.title} className={`border border-limestone/20 p-8 ${i === 0 ? "md:col-span-2 bg-cobalt/30" : "bg-navy/60"}`}>
              <p className="eyebrow text-aegean">0{i + 1}</p>
              <h3 className="display mt-4 text-2xl">{item.title}</h3>
              <p className="mt-4 leading-relaxed text-limestone/75">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="eyebrow mt-24 text-aegean">Visual Proof</p>
        <div className="mt-6 grid gap-4 md:auto-rows-[260px] md:grid-cols-3">
          {GALLERY.map((g, i) => (
            <button
              key={g.caption}
              type="button"
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden bg-navy/60 text-left aspect-[3/4] md:aspect-auto ${g.span}`}
            >
              <img src={g.src} alt={`${g.caption} — Bellucci Vodka activation Sandton`} loading="lazy" className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105 md:object-cover" />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-deep/90 to-transparent p-4 text-sm">{g.caption}</span>
            </button>
          ))}
        </div>

        <div className="mt-24 border-t border-limestone/20 pt-14 text-center">
          <p className="display mx-auto max-w-3xl text-3xl md:text-4xl">
            Looking for high-impact brand placement or event activation?
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-block bg-limestone px-10 py-5 text-[0.7rem] uppercase tracking-[0.24em] text-navy-deep transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>

      {lightbox !== null ? (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-navy-deep/95 p-6" onClick={() => setLightbox(null)}>
          <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[lightbox]!.src} alt={GALLERY[lightbox]!.caption} className="max-h-[80vh] w-auto object-contain" />
            <figcaption className="mt-4 flex items-center justify-between gap-6 text-sm">
              <button type="button" className="eyebrow hover:text-aegean" onClick={() => setLightbox((lightbox + GALLERY.length - 1) % GALLERY.length)}>← Prev</button>
              <span>{GALLERY[lightbox]!.caption}</span>
              <button type="button" className="eyebrow hover:text-aegean" onClick={() => setLightbox((lightbox + 1) % GALLERY.length)}>Next →</button>
            </figcaption>
          </figure>
        </div>
      ) : null}
    </div>
  );
}
