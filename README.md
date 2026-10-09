# KhataPing by SlotRecover

India-first recurring dues and payment reminder SaaS for tutors, PG owners, gyms, freelancers and small service businesses.

## Product thesis

KhataPing is intentionally narrower than accounting software. Users add a customer, recurring amount and due date; the app shows upcoming/pending/overdue collections and prepares polite reminder follow-ups. Customer payments go directly to the business's UPI route, so KhataPing does not need to hold end-customer funds.

**Launch pricing:** ₹149/month after a 14-day free trial.

## Included in this build

- SEO-first marketing homepage
- Real product-style user dashboard preview
- Internal admin dashboard preview
- Login/signup UI with Supabase auth wiring that activates when env vars are present
- Pricing, Help, Contact, Security, Privacy, Terms and Cancellation/Refund pages
- Segment SEO pages for tuition fees, PG rent, gym renewals, freelancers and local recurring services
- `sitemap.xml`, `robots.txt`, canonical metadata, Open Graph/Twitter metadata and JSON-LD
- Vercel Analytics and Speed Insights components
- PWA manifest and app icons
- Content Security Policy and common security headers
- Supabase schema with Row Level Security and explicit Data API privileges
- Mobile responsive design

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` when connecting a dedicated backend.

## Supabase

A production-ready starting migration lives at `supabase/migrations/001_initial_schema.sql`. It enables RLS for every public business table and restricts records to `auth.uid()` ownership. Do not expose a `service_role` key in any `NEXT_PUBLIC_*` variable.

## Messaging roadmap

The UI is WhatsApp-ready, but automatic WhatsApp delivery should only be enabled after an approved WhatsApp Business API/provider is configured and user/customer communication requirements are satisfied. Until then the product can generate/copy ready-to-send reminder text.

## Billing roadmap

KhataPing's own ₹149 subscription billing still needs a selected provider and webhook implementation. Billing webhooks must be verified server-side and write subscription state using a trusted server credential.

## SEO notes

Technical SEO makes pages crawlable and relevant but does not guarantee a traffic number. Organic acquisition should continue with useful intent pages (for example tuition fee reminder templates, PG rent reminder messages, gym renewal reminders), Search Console submission, backlinks/citations, and iterative content based on actual query data.

## Security checklist before real customer data

- Connect a dedicated Supabase project and run security advisors.
- Add production auth redirect URLs.
- Protect real `/app` routes with server-side session checks.
- Protect `/admin` with trusted server-side authorization; never `user_metadata`.
- Configure rate limits / abuse protection for auth and reminder endpoints.
- Add a real support mailbox and legal entity/contact details before taking payments.
- Configure automated backup/recovery appropriate for production.
