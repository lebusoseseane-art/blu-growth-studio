import { Link } from "@tanstack/react-router";

const ICON = "/assets/saver-icon.jpg";

export function SaverBadge() {
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
  return (
    <Link to="/work/saver" className="group block overflow-hidden bg-foreground text-background focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
      <article>
      <div className="grid lg:grid-cols-2">
        <figure className="relative flex min-h-[42vh] items-center justify-center overflow-hidden bg-secondary md:min-h-[60vh]">
          <img
            src={ICON}
            alt="Saver App logomark — fintech marketing by Tru Blu Digital Marketing, Johannesburg"
            loading="lazy"
            className="relative w-2/3 max-w-sm transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
          />
          <div className="absolute left-6 top-6"><SaverBadge /></div>
        </figure>
        <div className="self-center p-8 md:p-14">
          <p className="eyebrow text-orange">Fintech &amp; retail // Marketing &amp; go-to-market</p>
          <h3 className="display mt-5 text-4xl md:text-5xl">Saver App</h3>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-background/75">
            Tru Blu is the marketing agency behind Saver — a South African retail fintech app
            coming soon. Tru Blu owns the market research, marketing strategy and nationwide
            launch campaign.
          </p>
          <span className="mt-10 inline-flex border border-background/50 px-8 py-4 text-[0.7rem] uppercase tracking-[0.2em] transition-colors group-hover:bg-background group-hover:text-foreground">
            Explore Our Work
          </span>
        </div>
      </div>
      </article>
    </Link>
  );
}
