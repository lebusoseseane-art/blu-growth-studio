import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import poolTexture from "@/assets/texture-pool.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Start a Conversation — TRU BLU Digital Marketing" },
      {
        name: "description",
        content:
          "Talk to TRU BLU about brand, social, Meta and TikTok advertising, search and growth strategy. Gauteng-based, full-stack digital marketing.",
      },
      { property: "og:title", content: "Start a Conversation — TRU BLU" },
      {
        property: "og:description",
        content:
          "Tell us where the business is going. We'll tell you what it takes to get there.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const INTERESTS = [
  "Branding",
  "Social media",
  "Meta ads",
  "TikTok ads",
  "Reels / content",
  "SEO & Google Ads",
  "PR & activations",
  "Growth strategy",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-32 md:pt-44">
        <section className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
            <div>
              <p className="eyebrow text-primary">Start a conversation</p>
              <h1 className="display mt-6 text-[15vw] leading-[0.85] sm:text-7xl lg:text-8xl">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="font-serif normal-case italic tracking-[-0.02em] text-primary">
                  stronger.
                </span>
              </h1>
              <p className="mt-8 max-w-md text-lg leading-relaxed text-muted-foreground">
                Tell us where the business is going. We&apos;ll tell you what it takes to
                get there.
              </p>
              <img
                src={poolTexture}
                alt="Sunlit Aegean blue pool water beside a white limestone edge"
                loading="lazy"
                width={1600}
                height={912}
                className="mt-14 hidden h-72 w-full object-cover lg:block"
              />
            </div>

            <div className="border border-border bg-card p-8 md:p-12">
              {sent ? (
                <div className="py-16 text-center">
                  <p className="display text-4xl">Received.</p>
                  <p className="mt-4 text-muted-foreground">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form
                  className="space-y-8"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <Field label="Name" name="name" />
                  <Field label="Business" name="business" />
                  <Field label="Email" name="email" type="email" />
                  <div>
                    <p className="eyebrow text-muted-foreground">Interested in</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {INTERESTS.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggle(item)}
                          className={`border px-4 py-2 text-xs uppercase tracking-[0.14em] transition-colors duration-300 ${
                            selected.includes(item)
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="brief"
                      className="eyebrow block text-muted-foreground"
                    >
                      The brief
                    </label>
                    <textarea
                      id="brief"
                      name="brief"
                      rows={4}
                      className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-foreground px-8 py-5 text-[0.7rem] uppercase tracking-[0.24em] text-background transition-colors duration-300 hover:bg-primary"
                  >
                    Send it through
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <div className="mt-28" />
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow block text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
