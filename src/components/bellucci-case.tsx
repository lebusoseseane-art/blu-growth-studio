import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const COVER = "/assets/bellucci-bottle.jpg?v=2";

const GALLERY = [
  { src: "/assets/bellucci-stage.jpg?v=2", caption: "Venue Branding & Banner Integration at Maracanà Sandton", span: "md:col-span-2" },
  { src: "/assets/bellucci-bottle.jpg?v=2", caption: "Exclusive Bottle Service & Table Experience", span: "md:row-span-2" },
  { src: "/assets/bellucci-bar.jpg?v=2", caption: "Premium Bar Presentation & Ice Service", span: "md:col-span-2" },
];

const IMPACT = [
  {
    title: "Prime Venue Real Estate",
    body: "Bespoke VIP table setups, high-visibility bar positioning, and custom branded bottle presentation service.",
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
  ["Venue Partner", "Maracanà Sandton"],
  ["Scope", "Experiential Marketing, PR & Venue Activation, High-Res Content Creation"],
];

export function BellucciCase() {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (lightbox !== null) setLightbox(null);
      else setOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lightbox]);

  return (
    <>
      <article className="group relative cursor-pointer overflow-hidden bg-navy-deep text-limestone" onClick={() => setOpen(true)}>
        <div className="grid lg:grid-cols-2">
          <figure className="relative overflow-hidden">
            <img
              src={COVER}
              alt="Bellucci Luxury Vodka bottle service PR activation in Sandton, Johannesburg by Tru Blu"
              loading="lazy"
              width={1200}
              height={1504}
              className="h-[58vh] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:h-[76vh]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
            <span className="eyebrow absolute left-6 top-6 border border-limestone/40 px-3 py-2 text-limestone backdrop-blur-sm">
              Sandton, Johannesburg
            </span>
            <div className="absolute inset-x-6 bottom-6 grid grid-cols-2 gap-4 border-t border-limestone/25 pt-4">
              <div>
                <p className="eyebrow text-limestone/60">Target Audience</p>
                <p className="mt-1 text-sm">HNW Tastemakers</p>
              </div>
              <div>
                <p className="eyebrow text-limestone/60">Placement</p>
                <p className="mt-1 text-sm">Maracana, Sandton</p>
              </div>
            </div>
          </figure>
          <div className="self-center p-8 md:p-14">
            <p className="eyebrow text-aegean">PR Activation // Experiential &amp; Brand Placement</p>
            <h3 className="display mt-5 text-4xl md:text-5xl">Bellucci Luxury Vodka</h3>
            <p className="mt-6 max-w-md font-serif text-lg italic text-limestone/75">
              Strategic product placement, experiential venue branding, and luxury market positioning at Sandton&apos;s premier lounge and event venue.
            </p>
            <button
              type="button"
              className="mt-10 border border-limestone/50 px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-limestone hover:text-navy-deep"
            >
              View Case Study
            </button>
          </div>
        </div>
      </article>

      {open ? (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-navy-deep/95 text-limestone backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="Bellucci Luxury Vodka case study">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="eyebrow fixed right-6 top-6 z-10 border border-limestone/40 bg-navy-deep px-4 py-3 hover:bg-limestone hover:text-navy-deep"
          >
            Close ✕
          </button>
          <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10">
            <p className="eyebrow text-aegean">Featured case study</p>
            <h2 className="display mt-6 text-4xl leading-[0.9] md:text-6xl">
              Elevating Bellucci Luxury Vodka in Sandton’s Premier Nightlife Scene
            </h2>
            <p className="mt-8 max-w-3xl font-serif text-xl italic text-limestone/75">
              How Tru Blu executed high-impact venue branding, product placement, and experiential activation to position Bellucci directly in front of South Africa&apos;s high-net-worth clientele.
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
            <div className="mt-6 grid auto-rows-[260px] gap-4 md:grid-cols-3">
              {GALLERY.map((g, i) => (
                <button
                  key={g.caption}
                  type="button"
                  onClick={() => setLightbox(i)}
                  className={`group relative overflow-hidden text-left ${g.span}`}
                >
                  <img src={g.src} alt={`${g.caption} — Bellucci Vodka activation Sandton`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
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
                onClick={() => setOpen(false)}
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
      ) : null}
    </>
  );
}
