alter table public.asset_categories enable row level security;
alter table public.assets enable row level security;

drop policy if exists "Lecture publique des catégories" on public.asset_categories;
drop policy if exists "Lecture publique des actifs" on public.assets;

drop policy if exists "Utilisateur lit les catégories" on public.asset_categories;
drop policy if exists "Utilisateur lit les actifs" on public.assets;
drop policy if exists "Utilisateur ajoute les actifs" on public.assets;

create policy "Utilisateur lit les catégories"
on public.asset_categories for select to authenticated using (true);

create policy "Utilisateur lit les actifs"
on public.assets for select to authenticated using (true);

create policy "Utilisateur ajoute les actifs"
on public.assets for insert to authenticated with check (true);
