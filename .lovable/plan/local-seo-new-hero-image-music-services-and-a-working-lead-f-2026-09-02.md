# Local SEO, new hero image, music services and a working lead form

## 1. SEO structure (homepage)

- Add a visually-hidden H1: "Premier Digital Marketing in Johannesburg | Tru Blu Digital Marketing". The visible editorial line "Build the brand, cement the business." stays exactly as designed and becomes styled display text.
- Add the visible H2: "Strategic Social Media Management & Creative Growth Agency in Gauteng" in the hero supporting area.
- Update the page title and description to lead with Johannesburg / Gauteng keywords.
- Rewrite short passages of existing copy (hero support, services, about) so these blend in naturally without bloating the page: digital marketing Johannesburg, social media manager, content creation Gauteng, brand strategy South Africa, digital marketing agency Sandton, music PR Johannesburg.
- Rewrite every image alt on the homepage and contact page to be descriptive and keyword-rich.
- Add LocalBusiness JSON-LD (name, Gauteng area served, email, phone) to the homepage.

## 2. Hero image

Generate a new hero photograph: same Mediterranean coastline, composition, and golden-hour cinematic light as the current image, but featuring a diverse group of stylish Black individuals — varied skin tones, locs, fades, braids, short and long hair, different body types and genders — in chic high-end white linen, relaxed and elegantly posed by the ocean. Saved into `public/assets/` and swapped in, with keyword-rich alt text. Layout untouched.

## 3. Offerings section

Restructure the services content into two clearly separated groups, reusing the existing card and animation styles:

- Core: Social Media Management, Digital Advertising, Brand Strategy, Content Creation, Local SEO Optimization.
- Music Marketing & Artist PR: Music Video Production & Visual Concepts; 4K DJ Mixes Produced for TV & Streaming; Music Advertising & Paid Media Campaigns; Album Rollout & Single Launch Strategy.

## 4. Lead form and email automation

- Contact form fields become: Name, Email, Phone Number, Service Needed (select, including the music services), Message. Service-interest chips stay as an optional extra.
- Enable Lovable Cloud so the submission runs through a secure server-side endpoint over HTTPS instead of the current front-end-only mock.
- Validate every field with Zod on both the client and the server (length limits, email and phone format).
- On submit the server sends two emails via Resend from your verified `trubluagency.co.za` domain:
  1. Lead notification to goblu@trubluagency.co.za with all submitted details and a reply-to of the client's address.
  2. Instant auto-responder to the client — subject "Thank you for contacting Tru Blu Digital Marketing", body: "Thank you for reaching out to Tru Blu Digital Marketing. Your response has been successfully logged, and a representative from our agency will be in touch with you shortly."
- Store every submission in a `leads` table (RLS on, no public read) so no enquiry is lost if an email bounces.
- Success and error states shown in the existing form design.

## Technical notes

- Homepage/contact metadata via each route's `head()`; JSON-LD through `head().scripts`.
- Form submission via a TanStack `createServerFn` (same-origin, HTTPS); the Resend API key is stored as a backend secret and never reaches the browser.
- No styling, layout, card or animation changes beyond the content edits described above.

## Needed from you

Your Resend API key when prompted, so the emails can send from your verified domain.
