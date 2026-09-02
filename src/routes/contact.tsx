import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { SiteHeader, SiteFooter } from "@/components/site-chrome";
import {
  AUTORESPONDER_BODY,
  AUTORESPONDER_SUBJECT,
  LEAD_RECIPIENT,
  WEB3FORMS_ACCESS_KEY,
} from "@/lib/forms";
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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://blu-growth-studio.lovable.app/contact" }],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  "Social media management",
  "Digital advertising (Meta / TikTok)",
  "Brand strategy",
  "Content creation",
  "Local SEO optimisation",
  "Music video production",
  "4K DJ mixes for TV & streaming",
  "Music advertising & paid media",
  "Album rollout & single launch",
  "PR & activations",
  "Growth strategy",
];

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

const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  business: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(25)
    .regex(/^[0-9+()\-\s]+$/, "Please enter a valid phone number"),
  service: z.string().trim().min(1, "Please choose a service"),
  message: z.string().trim().max(2000).optional(),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `New enquiry from ${lead.name} — ${lead.service}`,
          from_name: "TRU BLU Website",
          to: LEAD_RECIPIENT,
          replyto: lead.email,
          name: lead.name,
          email: lead.email,
          phone: lead.phone,
          business: lead.business ?? "",
          service_needed: lead.service,
          also_interested_in: selected.join(", "),
          message: lead.message ?? "",
          // Instant thank-you email sent back to the client by Web3Forms
          autoresponder_subject: AUTORESPONDER_SUBJECT,
          autoresponder_message: AUTORESPONDER_BODY,
        }),
      });

      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Submission failed");
      }

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
