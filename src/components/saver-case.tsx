import { useNavigate } from "@tanstack/react-router";

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
  const navigate = useNavigate();

  return (
    <article className="group relative cursor-pointer overflow-hidden bg-saver-navy text-saver-gray" onClick={() => navigate({ to: "/work/saver" })}>
      <div className="grid lg:grid-cols-2">
        <figure className="relative flex h-[58vh] items-center justify-center overflow-hidden bg-gradient-to-br from-saver-blue via-saver-navy to-saver-navy md:h-[76vh]">
          <div className="absolute -bottom-24 left-1/2 h-72 w-[140%] -translate-x-1/2 rounded-[50%] bg-saver-green/20 blur-3xl" />
          <img
            src={ICON}
            alt="Saver App logomark — fintech marketing by Tru Blu Digital Marketing, Johannesburg"
            loading="lazy"
            className="relative w-2/3 max-w-sm rounded-[2rem] shadow-2xl transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
          />
          <div className="absolute left-6 top-6"><SaverBadge /></div>
        </figure>
        <div className="self-center p-8 md:p-14">
          <p className="font-inter text-[0.7rem] uppercase tracking-[0.2em] text-saver-green">Fintech &amp; Retail Innovation // Marketing &amp; Go-To-Market</p>
          <h3 className="mt-5 font-jakarta text-4xl font-extrabold tracking-tight md:text-5xl">Saver App</h3>
          <p className="mt-6 max-w-md font-inter text-lg leading-relaxed text-saver-gray/75">
            Tru Blu is the marketing agency behind Saver — a South African retail fintech app
            coming soon. Tru Blu owns the market research, marketing strategy and nationwide
            launch campaign.
          </p>
          <button
            type="button"
            className="mt-10 rounded-full bg-saver-green px-8 py-4 font-inter text-[0.7rem] font-medium uppercase tracking-[0.2em] text-saver-navy transition-opacity duration-300 hover:opacity-85"
          >
            Explore Our Work
          </button>
        </div>
      </div>
    </article>
  );
}
