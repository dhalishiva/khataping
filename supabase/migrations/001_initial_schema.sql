-- KhataPing initial schema
-- Apply to a dedicated Supabase project. Do not apply to an unrelated existing project.

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  business_name text,
  phone text,
  upi_id text,
  timezone text not null default 'Asia/Kolkata',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.customers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 120),
  phone text,
  email text,
  notes text,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.dues (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  customer_id uuid not null references public.customers(id) on delete cascade,
  title text not null default 'Monthly due',
  amount numeric(12,2) not null check (amount >= 0),
  currency text not null default 'INR' check (currency = 'INR'),
  due_date date not null,
  frequency text not null default 'monthly' check (frequency in ('one_time','weekly','monthly','quarterly','yearly')),
  status text not null default 'upcoming' check (status in ('upcoming','due','overdue','paid','paused')),
  paid_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reminder_settings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  before_days integer[] not null default array[3,1],
  on_due boolean not null default true,
  after_days integer[] not null default array[3,7],
  channel text not null default 'whatsapp' check (channel in ('whatsapp','email','manual')),
  tone text not null default 'friendly' check (tone in ('friendly','professional','brief')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.reminder_events (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  due_id uuid not null references public.dues(id) on delete cascade,
  customer_id uuid not null references public.customers(id) on delete cascade,
  scheduled_for timestamptz not null,
  status text not null default 'queued' check (status in ('queued','ready','sent','skipped','failed')),
  channel text not null default 'whatsapp' check (channel in ('whatsapp','email','manual')),
  provider_message_id text,
  error text,
  sent_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null unique references auth.users(id) on delete cascade,
  plan text not null default 'trial' check (plan in ('trial','khata149')),
  status text not null default 'trialing' check (status in ('trialing','active','past_due','cancelled','expired')),
  provider text,
  provider_customer_id text,
  provider_subscription_id text,
  trial_ends_at timestamptz default (now() + interval '14 days'),
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists customers_user_id_idx on public.customers(user_id);
create index if not exists dues_user_id_due_date_idx on public.dues(user_id, due_date);
create index if not exists dues_customer_id_idx on public.dues(customer_id);
create index if not exists reminder_events_user_scheduled_idx on public.reminder_events(user_id, scheduled_for);

alter table public.profiles enable row level security;
alter table public.customers enable row level security;
alter table public.dues enable row level security;
alter table public.reminder_settings enable row level security;
alter table public.reminder_events enable row level security;
alter table public.subscriptions enable row level security;

revoke all on public.profiles from anon;
revoke all on public.customers from anon;
revoke all on public.dues from anon;
revoke all on public.reminder_settings from anon;
revoke all on public.reminder_events from anon;
revoke all on public.subscriptions from anon;

grant select, insert, update, delete on public.profiles to authenticated;
grant select, insert, update, delete on public.customers to authenticated;
grant select, insert, update, delete on public.dues to authenticated;
grant select, insert, update, delete on public.reminder_settings to authenticated;
grant select, insert, update, delete on public.reminder_events to authenticated;
grant select on public.subscriptions to authenticated;

create policy "profiles_select_own" on public.profiles for select to authenticated using ((select auth.uid()) = id);
create policy "profiles_insert_own" on public.profiles for insert to authenticated with check ((select auth.uid()) = id);
create policy "profiles_update_own" on public.profiles for update to authenticated using ((select auth.uid()) = id) with check ((select auth.uid()) = id);
create policy "profiles_delete_own" on public.profiles for delete to authenticated using ((select auth.uid()) = id);

create policy "customers_select_own" on public.customers for select to authenticated using ((select auth.uid()) = user_id);
create policy "customers_insert_own" on public.customers for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "customers_update_own" on public.customers for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "customers_delete_own" on public.customers for delete to authenticated using ((select auth.uid()) = user_id);

create policy "dues_select_own" on public.dues for select to authenticated using ((select auth.uid()) = user_id);
create policy "dues_insert_own" on public.dues for insert to authenticated with check (
  (select auth.uid()) = user_id and exists (select 1 from public.customers c where c.id = customer_id and c.user_id = (select auth.uid()))
);
create policy "dues_update_own" on public.dues for update to authenticated using ((select auth.uid()) = user_id) with check (
  (select auth.uid()) = user_id and exists (select 1 from public.customers c where c.id = customer_id and c.user_id = (select auth.uid()))
);
create policy "dues_delete_own" on public.dues for delete to authenticated using ((select auth.uid()) = user_id);

create policy "reminder_settings_select_own" on public.reminder_settings for select to authenticated using ((select auth.uid()) = user_id);
create policy "reminder_settings_insert_own" on public.reminder_settings for insert to authenticated with check ((select auth.uid()) = user_id);
create policy "reminder_settings_update_own" on public.reminder_settings for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "reminder_settings_delete_own" on public.reminder_settings for delete to authenticated using ((select auth.uid()) = user_id);

create policy "reminder_events_select_own" on public.reminder_events for select to authenticated using ((select auth.uid()) = user_id);
create policy "reminder_events_insert_own" on public.reminder_events for insert to authenticated with check (
  (select auth.uid()) = user_id
  and exists (select 1 from public.dues d where d.id = due_id and d.user_id = (select auth.uid()))
  and exists (select 1 from public.customers c where c.id = customer_id and c.user_id = (select auth.uid()))
);
create policy "reminder_events_update_own" on public.reminder_events for update to authenticated using ((select auth.uid()) = user_id) with check ((select auth.uid()) = user_id);
create policy "reminder_events_delete_own" on public.reminder_events for delete to authenticated using ((select auth.uid()) = user_id);

create policy "subscriptions_select_own" on public.subscriptions for select to authenticated using ((select auth.uid()) = user_id);

comment on table public.subscriptions is 'Billing state is server-managed. Authenticated clients have read-only access to their own row.';
