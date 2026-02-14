-- Analytics events table with 50+ fields
create table if not exists public.analytics_events (
  id uuid primary key default gen_random_uuid(),
  session_id text,
  user_id uuid,
  event_type text not null,
  page_title text,
  url text,
  path text,
  referrer text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  user_agent text,
  browser_name text,
  browser_version text,
  os_name text,
  os_version text,
  device_type text,
  device_vendor text,
  device_model text,
  language text,
  languages text[],
  timezone text,
  screen_width int,
  screen_height int,
  viewport_width int,
  viewport_height int,
  color_depth int,
  pixel_ratio numeric,
  cookies_enabled boolean,
  do_not_track boolean,
  connection_effective_type text,
  connection_downlink numeric,
  connection_rtt int,
  save_data boolean,
  time_on_page_ms int,
  scroll_depth_percent int,
  click_count int,
  hover_time_ms int,
  first_paint_ms int,
  dom_content_loaded_ms int,
  load_event_end_ms int,
  geolocation_lat numeric,
  geolocation_lng numeric,
  geolocation_accuracy numeric,
  device_memory numeric,
  hardware_concurrency int,
  color_scheme text,
  prefers_reduced_motion boolean,
  installed_pwas boolean,
  touch_support boolean,
  referrer_policy text,
  extra jsonb,
  created_at timestamptz not null default now()
);

-- Indexes for query performance
create index if not exists idx_analytics_events_created_at on public.analytics_events(created_at desc);
create index if not exists idx_analytics_events_event_type on public.analytics_events(event_type);
create index if not exists idx_analytics_events_path on public.analytics_events(path);

-- Enable RLS (public analytics: allow read/insert; do not expose admin page URL)
alter table public.analytics_events enable row level security;

-- Allow anyone to insert analytics events
create policy "Allow anonymous inserts for analytics" on public.analytics_events
for insert to anon, authenticated using (true) with check (true);

-- Allow anyone to read analytics (UI is password-gated).
create policy "Allow public read of analytics" on public.analytics_events
for select to anon, authenticated using (true);