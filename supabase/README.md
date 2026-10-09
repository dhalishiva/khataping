# KhataPing Supabase setup

Use a **dedicated Supabase project** for KhataPing. Do not apply this migration to another product database.

1. Create a project in India (`ap-south-1`) when appropriate.
2. Apply `migrations/001_initial_schema.sql`.
3. Configure email/password authentication and production redirect URLs.
4. Set `NEXT_PUBLIC_SUPABASE_URL` and the modern `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` in Vercel.
5. Keep `service_role`, billing secrets and WhatsApp provider tokens server-side only.
6. Run Supabase security and performance advisors after schema changes.

The schema enables RLS on every exposed `public` table and uses ownership predicates. Subscription rows are intentionally read-only to normal authenticated clients.
