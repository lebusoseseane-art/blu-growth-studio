import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
const heroSantorini = "/assets/hero-santorini.jpg";
const stillFruit = "/assets/still-fruit.jpg";
const deviceAds = "/assets/device-ads.jpg";
const poolTexture = "/assets/texture-pool.jpg";
const caseOne = "/assets/case-carsharenova.jpg";
const caseTwo = "/assets/case-purple-blossom.png";
const caseThree = "/assets/case-laith-luv.jpg";
const aboutTerrace = "/assets/about-terrace.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digital Marketing Johannesburg | TRU BLU Digital Marketing Agency" },
      {
        name: "description",
        content:
          "TRU BLU is a digital marketing agency in Johannesburg, Gauteng — social media management, Meta and TikTok advertising, content creation, local SEO, brand strategy and music PR.",
      },
      {
        property: "og:title",
        content: "Digital Marketing Johannesburg | TRU BLU Digital Marketing Agency",
      },
      {
        property: "og:description",
        content:
          "Strategic social media management and creative growth agency in Gauteng. Brand strategy, paid social, local SEO and music marketing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://blu-growth-studio.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://blu-growth-studio.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "TRU BLU Digital Marketing",
          description:
            "Digital marketing agency in Johannesburg offering social media management, digital advertising, brand strategy, content creation, local SEO and music marketing.",
          email: "goblu@trubluagency.co.za",
          telephone: "+27768659792",
          url: "https://blu-growth-studio.lovable.app/",
          address: {
            "@type": "PostalAddress",
            addressRegion: "Gauteng",
            addressLocality: "Johannesburg",
            addressCountry: "ZA",
          },
          areaServed: ["Johannesburg", "Sandton", "Gauteng", "South Africa"],
        }),
      },
    ],
  }),
  component: Home,
});

const SERVICES = [
  {
    name: "Social",
    line: "Social media management run like a publication, not a posting schedule.",
    items: ["Social media manager", "Community", "Channel strategy"],
  },
  {
    name: "Advertising",
    line: "Digital advertising built to sell, not to decorate a feed.",
    items: ["Meta advertising", "TikTok advertising", "Google Ads"],
  },
  {
    name: "Brand",
    line: "Brand strategy South Africa businesses are remembered by.",
    items: ["Branding solutions", "Identity systems", "Messaging & tone"],
  },
  {
    name: "Content",
    line: "Content creation Gauteng brands can actually publish every week.",
    items: ["Reels & short-form", "Photography direction", "Content strategy"],
  },
  {
    name: "Local SEO",
    line: "Local SEO optimisation that captures Johannesburg and Sandton search intent.",
    items: ["Local SEO", "Google Business Profile", "Search marketing"],
  },
];

const MUSIC = [
  {
    name: "Music video production & visual concepts",
    line: "Concept, direction and delivery for artists building a visual world.",
  },
  {
    name: "4K DJ mixes produced for TV & streaming",
    line: "Broadcast-grade mix films finished for television and streaming platforms.",
  },
  {
    name: "Music advertising & paid media",
    line: "Paid campaigns that put releases in front of the right listeners.",
  },
  {
    name: "Album rollout & single launch strategy",
    line: "Sequenced rollouts, press moments and music PR Johannesburg artists can sustain.",
  },
];

const CHAIN = ["Brand", "Content", "Attention", "Leads", "Customers", "Growth"];

const CASES = [
  {
    image: caseOne,
    client: "CarShareNova",
    sector: "South Africa's first luxury and exotic car sharing platform",
    description: "Brand identity & performance marketing campaign",
    challenge: "Strong startup idea, weak awareness and user base, low direct booking share.",
    strategy:
      "Consistency and professional brand identity, followed by Meta Ad and Google Ad-led discovery at scale.",
    creative: "High-quality, vehicle-focused images to entice desire and demand.",
    result: "Scaled audience from 1,000 to 5,000+ followers across platforms in under six months.",
  },
  {
    image: caseTwo,
    client: "The Purple Blossom Dental Studio",
    sector: "Dental & aesthetics",
    description: "Full-scale branding and content consultations",
    challenge:
      "High-traffic business location, low awareness and client base, low direct bookings and walk-ins.",
    strategy:
      "Full-scale luxury branding and exterior branding, followed by organic search engine marketing for discovery at scale.",
    creative: "Professional and informative still graphics tailored for a mature audience.",
    result: "Increased local search visibility and boosted direct walk-ins and consultation bookings.",
  },
  {
    image: caseThree,
    client: "Laith Luv",
    sector: "Music & culture",
    description:
      "PR, music marketing and project rollout (Home EP — 2026) for musician, DJ & producer Laith Luv",
    challenge: "An instrumental EP needs to tell a compelling story without vocals.",
    strategy:
      "Storytelling media and an animated DJ mix promoting the EP, leveraging fanbase UGC to maintain consistent visibility.",
    creative:
      "Detailed stills, a re-established artist presence in new photography, and dynamic performance footage.",
    result: "Re-established artist presence and sustained engagement across the EP rollout cycle.",
  },
];

const AUDIT = [
  "Brand",
  "Social",
  "Advertising",
  "Search",
  "Customer journey",
  "Conversion",
  "Growth",
];

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* HERO */}
        <section className="relative">
          <div className="grid min-h-[92vh] lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-end px-6 pb-16 pt-36 md:px-10 lg:pb-24 lg:pt-40">
              <h1 className="sr-only">
                Premier Digital Marketing in Johannesburg | Tru Blu Digital Marketing
              </h1>
                <p className="eyebrow reveal text-primary">
                  TRU BLU DIGITAL MARKETING AGENCY - SANDTON, JOHANNESBURG&nbsp;
                </p>
              <p
                aria-hidden="true"
                className="display reveal mt-8 text-[17vw] leading-[0.84] sm:text-[11vw] lg:text-[7.4vw]"
              >
                Build the
                <br />
                brand,
                <br />
                cement the
                <br />
                <span className="text-primary">business.</span>
              </p>
              <h2 className="mt-10 max-w-xl font-serif text-xl italic leading-snug text-foreground/80 md:text-2xl">
                Strategic Digital Marketing &amp; Creative Growth Agency&nbsp;
              </h2>
              <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
                  Full-stack digital marketing for South African businesses ready to look
                  better, communicate better and grow faster.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center bg-foreground px-9 py-5 text-[0.7rem] uppercase tracking-[0.24em] text-background transition-colors duration-300 hover:bg-primary"
                >
                  Start a project
                </Link>
              </div>
            </div>
            <div className="relative min-h-[60vh] lg:min-h-full">
              <img
                src={heroSantorini}
                alt="Digital marketing team in Johannesburg - Tru Blu, a diverse group in white linen on a sunlit Mediterranean coastline"
                width={1024}
                height={1408}
                className="h-full w-full object-cover"
              />
            </div>

          </div>
          <div className="rule-line mx-6 md:mx-10" />
          <p className="mx-6 py-5 font-serif text-sm italic text-muted-foreground md:mx-10 md:text-base">
            We don&apos;t just build the brand. We cement the business.
          </p>
        </section>

        {/* PHILOSOPHY */}
        <section className="bg-navy-deep py-28 text-limestone md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-24">
              <h2 className="display text-[11vw] leading-[0.86] sm:text-6xl lg:text-[5vw]">
                A great brand
                <br />
                deserves a
                <br />
                <span className="font-serif normal-case italic tracking-[-0.02em] text-aegean">
                  great business.
                </span>
              </h2>
              <div className="space-y-8 self-end">
                <p className="text-lg leading-relaxed text-limestone/70">
                  Branding without business strategy is decoration. Marketing without a
                  strong brand is noise.
                </p>
                <p className="text-lg leading-relaxed text-limestone/70">
                  We work on both at once — the way a business is seen, and the way it
                  actually makes money.
                </p>
                <p className="font-serif text-xl italic text-limestone md:text-2xl">
                  Give your business a strong brand. Build a strong business for your
                  brand to represent.
                </p>
              </div>
            </div>
            <img
              src={stillFruit}
              alt="Brand strategy South Africa still life — blue grapes, blueberries and a halved fig on travertine in hard Mediterranean sunlight"
              loading="lazy"
              width={1408}
              height={1008}
              className="mt-20 h-[42vh] w-full object-cover md:h-[60vh]"
            />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="scroll-mt-24 py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="display text-[13vw] leading-[0.86] sm:text-6xl lg:text-7xl">
                Services
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Core digital marketing disciplines, one commercial objective.
              </p>
            </div>

            <div className="mt-16 border-t border-border">
              {SERVICES.map((service, i) => (
                <div
                  key={service.name}
                  className="group grid items-baseline gap-4 border-b border-border py-9 transition-colors duration-500 hover:bg-secondary/50 md:grid-cols-[6rem_1fr_1.1fr] md:gap-10 md:px-4"
                >
                  <span className="eyebrow text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="display text-4xl transition-colors duration-500 group-hover:text-primary md:text-5xl">
                    {service.name}
                  </h3>
                  <div>
                    <p className="text-base text-foreground/80">{service.line}</p>
                    <p className="mt-3 text-sm text-muted-foreground">
                      {service.items.join(" · ")}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="display text-[11vw] leading-[0.86] sm:text-5xl lg:text-6xl">
                Music marketing
                <br />
                &amp; artist PR
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Music PR Johannesburg artists use to release properly.
              </p>
            </div>

            <div className="mt-12 grid gap-px bg-border sm:grid-cols-2">
              {MUSIC.map((item) => (
                <div
                  key={item.name}
                  className="group bg-background p-8 transition-colors duration-500 hover:bg-secondary/50 md:p-10"
                >
                  <h3 className="display text-2xl leading-tight transition-colors duration-500 group-hover:text-primary md:text-3xl">
                    {item.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.line}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPECIALTY */}
        <section className="relative">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="order-2 bg-primary px-6 py-24 text-primary-foreground md:px-14 md:py-32 lg:order-1">
              <p className="eyebrow text-primary-foreground/60">Specialty</p>
              <h2 className="display mt-8 text-[12vw] leading-[0.86] sm:text-6xl lg:text-[4.6vw]">
                Where we
                <br />
                really move.
              </h2>
              <div className="mt-14 space-y-1">
                {["Meta ads", "TikTok ads", "Reels"].map((item) => (
                  <p
                    key={item}
                    className="display border-b border-primary-foreground/20 py-5 text-4xl md:text-6xl"
                  >
                    {item}
                  </p>
                ))}
              </div>
              <p className="mt-12 max-w-md font-serif text-xl italic md:text-2xl">
                Our speciality is social. Our capability is everything around it.
              </p>
            </div>
            <div className="order-1 min-h-[50vh] lg:order-2 lg:min-h-full">
              <img
                src={deviceAds}
                alt="Social media manager strategies for Gauteng businesses shown on a smartphone advertising feed beside a pool"
                loading="lazy"
                width={1408}
                height={1008}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* GROWTH SYSTEM */}
        <section className="py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <p className="eyebrow text-primary">The growth system</p>
            <div className="mt-12 flex flex-wrap items-baseline gap-x-6 gap-y-4">
              {CHAIN.map((step, i) => (
                <span key={step} className="flex items-baseline gap-6">
                  <span className="display text-[9vw] leading-none sm:text-5xl lg:text-6xl">
                    {step}
                  </span>
                  {i < CHAIN.length - 1 ? (
                    <span className="text-2xl text-primary md:text-4xl">→</span>
                  ) : null}
                </span>
              ))}
            </div>
            <p className="mt-12 max-w-lg text-base leading-relaxed text-muted-foreground">
              Every engagement moves left to right. Nothing is built in isolation.
            </p>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="scroll-mt-24 bg-secondary py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <h2 className="display text-[13vw] leading-[0.86] sm:text-6xl lg:text-7xl">
                Selected
                <br />
                work
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-secondary-foreground/70">
                Brand, creative and performance, delivered as one.
              </p>
            </div>

            <div className="mt-20 space-y-24 md:space-y-32">
              {CASES.map((study, i) => (
                <article
                  key={study.client}
                  className={`grid gap-10 lg:grid-cols-2 lg:gap-20 ${
                    i % 2 === 1 ? "lg:[&>figure]:order-2" : ""
                  }`}
                >
                  <figure className="overflow-hidden">
                    <img
                      src={study.image}
                      alt={`${study.client} — digital marketing Johannesburg campaign by Tru Blu`}
                      loading="lazy"
                      width={1200}
                      height={1500}
                      className="h-[58vh] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03] md:h-[76vh]"
                    />
                  </figure>
                  <div className="self-center">
                    <p className="eyebrow text-primary">{study.sector}</p>
                    <h3 className="display mt-5 text-4xl md:text-5xl">{study.client}</h3>
                    <p className="mt-4 max-w-md font-serif text-lg italic text-foreground/70">
                      {study.description}
                    </p>
                    <dl className="mt-8 space-y-6 border-t border-border pt-8">
                      <Row term="Challenge" value={study.challenge} />
                      <Row term="Strategy" value={study.strategy} />
                      <Row term="Creative" value={study.creative} />
                    </dl>
                    <p className="eyebrow mt-10 text-muted-foreground">Outcome</p>
                    <p className="mt-3 font-serif text-2xl italic leading-tight text-primary md:text-3xl">
                      {study.result}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GROWTH AUDIT */}
        <section id="insights" className="relative scroll-mt-24 overflow-hidden">
          <img
            src={poolTexture}
            alt="Sunlit Aegean pool water backdrop for the Tru Blu growth audit for Gauteng businesses"
            loading="lazy"
            width={1600}
            height={912}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative bg-navy-deep/80 px-6 py-28 text-limestone md:px-10 md:py-40">
            <div className="mx-auto grid max-w-[1600px] gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
              <div>
                <p className="eyebrow text-limestone/60">TRU BLU Growth Audit</p>
                <h2 className="display mt-8 text-[11vw] leading-[0.86] sm:text-6xl lg:text-[4.8vw]">
                  Find what&apos;s
                  <br />
                  holding your
                  <br />
                  business back.
                </h2>
                <Link
                  to="/contact"
                  className="mt-12 inline-flex items-center justify-center border border-limestone px-9 py-5 text-[0.7rem] uppercase tracking-[0.24em] text-limestone transition-colors duration-300 hover:bg-limestone hover:text-navy-deep"
                >
                  Request the audit
                </Link>
              </div>
              <ul className="grid grid-cols-2 gap-px self-end bg-limestone/15">
                {AUDIT.map((item) => (
                  <li
                    key={item}
                    className="bg-navy-deep/60 px-5 py-8 text-sm uppercase tracking-[0.16em] backdrop-blur-sm"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="scroll-mt-24 py-28 md:py-40">
          <div className="mx-auto max-w-[1600px] px-6 md:px-10">
            <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
              <img
                src={aboutTerrace}
                alt="Digital marketing agency Sandton dashboard on a laptop on a linen table overlooking the Aegean"
                loading="lazy"
                width={1408}
                height={1104}
                className="h-[45vh] w-full object-cover md:h-[70vh]"
              />
              <div className="self-center">
                <p className="eyebrow text-primary">About</p>
                <h2 className="display mt-6 text-[11vw] leading-[0.86] sm:text-5xl lg:text-6xl">
                  A growth partner,
                  <br />
                  not an outsourced
                  <br />
                  social team.
                </h2>
                <div className="mt-10 max-w-lg space-y-6 text-lg leading-relaxed text-muted-foreground">
                  <p>
                    TRU BLU sits between the boardroom and the feed. We take commercial
                    objectives and translate them into brand, creative and media that
                    perform.
                  </p>
                  <p>
                    Strategy, design, content and paid media live in one team — so nothing
                    is lost between the idea and the result.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-primary px-6 py-32 text-primary-foreground md:px-10 md:py-48">
          <div className="mx-auto max-w-[1600px]">
            <h2 className="display text-[13vw] leading-[0.86] sm:text-7xl lg:text-[7vw]">
              Ready to build
              <br />
              something stronger?
            </h2>
            <Link
              to="/contact"
              className="mt-16 inline-flex items-center justify-center bg-primary-foreground px-10 py-6 text-[0.7rem] uppercase tracking-[0.24em] text-primary transition-opacity duration-300 hover:opacity-85"
            >
              Start a conversation
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Row({ term, value }: { term: string; value: string }) {
  return (
    <div className="grid gap-1 md:grid-cols-[7rem_1fr] md:gap-6">
      <dt className="eyebrow text-muted-foreground">{term}</dt>
      <dd className="text-base leading-relaxed text-foreground/85">{value}</dd>
    </div>
  );
}
