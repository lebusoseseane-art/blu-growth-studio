import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import wordmark from "@/assets/trublu-wordmark.png.asset.json";
import mark from "@/assets/trublu-mark.png.asset.json";


const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Insights", href: "/#insights" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "bg-background/70 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/"
          className="font-display text-lg tracking-[-0.04em] text-foreground md:text-xl"
        >
          TRU BLU<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="border border-foreground px-6 py-3 text-[0.7rem] uppercase tracking-[0.22em] text-foreground transition-colors duration-300 hover:bg-foreground hover:text-background"
          >
            Start a Conversation
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background px-6 pb-8 pt-4 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display text-3xl text-foreground"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 border border-foreground px-6 py-4 text-center text-[0.7rem] uppercase tracking-[0.22em]"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-limestone">
      <div className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="display text-4xl md:text-5xl">
              TRU BLU<span className="text-aegean">.</span>
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-limestone/60">
              Full-stack digital marketing and growth. Gauteng, South Africa.
            </p>
          </div>
          <div className="space-y-3 text-sm text-limestone/70">
            <p className="eyebrow text-limestone/40">Navigate</p>
            {NAV.map((item) => (
              <a key={item.label} href={item.href} className="block hover:text-limestone">
                {item.label}
              </a>
            ))}
          </div>
          <div className="space-y-3 text-sm text-limestone/70">
            <p className="eyebrow text-limestone/40">Contact</p>
            <a href="mailto:hello@trublu.co.za" className="block hover:text-limestone">
              hello@trublu.co.za
            </a>
            <p>Gauteng, RSA</p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-3 border-t border-limestone/15 pt-6 text-xs text-limestone/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} TRU BLU Digital Marketing.</p>
          <p>We don't just build the brand. We cement the business.</p>
        </div>
      </div>
    </footer>
  );
}
