import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import { INTEREST_OPTIONS, leadSchema, SERVICE_OPTIONS } from "@/lib/forms";
import { submitLead } from "@/lib/forms.functions";
const poolTexture = "/assets/texture-pool.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact a Digital Marketing Agency in Johannesburg | TRU BLU" },
      {
        name: "description",
        content:
          "Talk to TRU BLU about social media management, Meta and TikTok advertising, content creation Gauteng, local SEO and music PR Johannesburg. Gauteng-based digital marketing agency.",
      },
      {
        property: "og:title",
        content: "Contact a Digital Marketing Agency in Johannesburg | TRU BLU",
      },
      {
        property: "og:description",
        content:
          "Tell us where the business is going. We'll tell you what it takes to get there.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://blu-growth-studio.lovable.app/contact" },
      { name: "twitter:title", content: "Contact a Digital Marketing Agency in Johannesburg | TRU BLU" },
      { name: "twitter:description", content: "Tell TRU BLU where your business is going. Discuss social media, advertising, branding, SEO or music marketing." },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://blu-growth-studio.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const submitLeadFn = useServerFn(submitLead);

  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    const form = event.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = leadSchema.safeParse(raw);

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    const lead = parsed.data;
    setSending(true);

    try {
      const result = await submitLeadFn({ data: lead });
      if (!result.success) throw new Error("Submission failed");

      setSent(true);
      form.reset();
      setSelected([]);
    } catch {
      setError(
        "Something went wrong sending your enquiry. Please email goblu@trubluagency.co.za directly.",
      );
    } finally {
      setSending(false);
    }
  };

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
              <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <a href="mailto:goblu@trubluagency.co.za" className="block hover:text-foreground">
                  goblu@trubluagency.co.za
                </a>
                <a href="tel:+27768659792" className="block hover:text-foreground">
                  076 865 9792
                </a>
              </div>
              <img
                src={poolTexture}
                alt="Sunlit Aegean blue pool water beside white limestone — contact Tru Blu digital marketing Johannesburg"
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
                    A confirmation email is on its way. We&apos;ll be in touch within one
                    business day.
                  </p>
                </div>
              ) : (
                <form className="space-y-8" onSubmit={handleSubmit} noValidate>
                  <div aria-hidden="true" className="hidden">
                    <label htmlFor="website">Website</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <Field label="Name" name="name" autoComplete="name" />
                  <Field label="Business" name="business" required={false} />
                  <Field label="Email" name="email" type="email" autoComplete="email" />
                  <Field label="Phone number" name="phone" type="tel" autoComplete="tel" />

                  <div>
                    <label htmlFor="service" className="eyebrow block text-muted-foreground">
                      Service needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <p className="eyebrow text-muted-foreground">Also interested in</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {INTEREST_OPTIONS.map((item) => (
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
                    <label htmlFor="message" className="eyebrow block text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={2000}
                      className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
                    />
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    For specified marketing concepts, tailored quotation requests, or direct enquiries,
                    contact us at{" "}
                    <a className="underline underline-offset-4" href="mailto:goblu@trubluagency.co.za">
                      goblu@trubluagency.co.za
                    </a>.
                  </p>

                  {error ? (
                    <p className="text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  ) : null}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-foreground px-8 py-5 text-[0.7rem] uppercase tracking-[0.24em] text-background transition-colors duration-300 hover:bg-primary disabled:opacity-60"
                  >
                    {sending ? "Sending…" : "Send it through"}
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
  required = true,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
        required={required}
        autoComplete={autoComplete}
        maxLength={255}
        className="mt-3 w-full border-b border-border bg-transparent pb-3 text-lg outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}
