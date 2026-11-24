import { createFileRoute } from "@tanstack/react-router";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";

const canonicalUrl = "https://blu-growth-studio.lovable.app/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TRU BLU Digital Marketing" },
      {
        name: "description",
        content:
          "How TRU BLU handles contact enquiries, Web3Forms submissions, website analytics, and privacy requests.",
      },
      { property: "og:title", content: "Privacy Policy | TRU BLU Digital Marketing" },
      {
        property: "og:description",
        content:
          "Information about contact enquiries, website analytics, and how to make a privacy request to TRU BLU.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonicalUrl },
      { name: "twitter:title", content: "Privacy Policy | TRU BLU Digital Marketing" },
      {
        name: "twitter:description",
        content:
          "How TRU BLU handles contact enquiries, website analytics, and privacy requests.",
      },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: canonicalUrl }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="pt-32 md:pt-44">
        <section className="mx-auto max-w-[1200px] px-6 pb-20 md:px-10 md:pb-28">
          <p className="eyebrow text-primary">TRU BLU · Privacy</p>
          <h1 className="display mt-6 max-w-4xl text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
            Privacy Policy
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            This notice explains how TRU BLU handles information when you use this website or contact
            us about our services.
          </p>

          <div className="mt-14 max-w-4xl space-y-10">
            <section className="border-t border-border pt-6">
              <h2 className="display text-2xl md:text-3xl">Enquiry information</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                When you send an enquiry, we receive your name, email address, phone number, business
                name if provided, selected service, areas of interest, and any message you include.
                We use these details solely to understand and respond to your enquiry, including a
                quotation or service discussion you request.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h2 className="display text-2xl md:text-3xl">How enquiries are handled</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your details are sent to TRU BLU through Web3Forms so we can respond to your enquiry.
                The form sends information over HTTPS, and Web3Forms processes it on our behalf to
                deliver it to{" "}
                <a className="underline underline-offset-4" href="mailto:goblu@trubluagency.co.za">
                  goblu@trubluagency.co.za
                </a>
                . We do not sell enquiry information or share it with unauthorised third parties.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                The contact form does not save enquiry details in browser storage or cookies. After a
                successful submission, the form clears, and the website does not log the details you
                entered.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h2 className="display text-2xl md:text-3xl">Privacy requests</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                You may request access to or deletion of information you have sent us by emailing{" "}
                <a className="underline underline-offset-4" href="mailto:goblu@trubluagency.co.za">
                  goblu@trubluagency.co.za
                </a>
                . We will review and respond to requests in line with applicable law.
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h2 className="display text-2xl md:text-3xl">Website analytics</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Clicks on buttons and links are recorded for all visitors. Page visits, where visitors
                came from, country, browser, operating system and device type, time on page, page speed,
                and errors are also recorded for every visitor. Lovable collects this data for us. It
                uses no cookies, stores nothing on your device, does not keep IP addresses, and does
                not identify visitors. Detailed data is kept for 90 days; daily summaries are kept
                for one year. Read{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://lovable.dev/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Lovable&apos;s privacy policy
                </a>
                .
              </p>
            </section>

            <section className="border-t border-border pt-6">
              <h2 className="display text-2xl md:text-3xl">Website fonts</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                This website requests fonts from Google Fonts. When your browser loads those fonts,
                Google receives the technical information needed to provide the files. See{" "}
                <a
                  className="underline underline-offset-4"
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google&apos;s privacy policy
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>
      <div className="mt-12" />
      <SiteFooter />
    </div>
  );
}