import { useNavigate } from "@tanstack/react-router";

const COVER = "/assets/bellucci-bottle.jpg?v=2";

export function BellucciCase() {
  const navigate = useNavigate();

  return (
    <article className="group relative cursor-pointer overflow-hidden bg-navy-deep text-limestone" onClick={() => navigate({ to: "/work/bellucci" })}>
      <div className="grid lg:grid-cols-2">
        <figure className="relative overflow-hidden">
          <img
            src={COVER}
            alt="Bellucci Luxury Vodka bottle service PR activation in Sandton, Johannesburg by Tru Blu"
            loading="lazy"
            width={1200}
            height={1504}
            className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] md:aspect-auto md:h-[76vh]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/20 to-transparent" />
          <span className="eyebrow absolute left-6 top-6 border border-limestone/40 px-3 py-2 text-limestone backdrop-blur-sm">
            Maracana, Sandton
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
            Strategically placed at the Banquet Luxury Sunset Event Experience — experiential venue branding, product placement, and luxury market positioning at Maracanà Sandton, Johannesburg.
          </p>
          <button
            type="button"
            className="mt-10 border border-limestone/50 px-8 py-4 text-[0.7rem] uppercase tracking-[0.24em] transition-colors duration-300 hover:bg-limestone hover:text-navy-deep"
          >
            View Work
          </button>
        </div>
      </div>
    </article>
  );
}
