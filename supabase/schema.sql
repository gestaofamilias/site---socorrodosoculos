-- ============================================================
-- Socorro dos Óculos — Schema do Painel Administrativo
-- Execute este script no SQL Editor do seu projeto Supabase
-- (Project > SQL Editor > New query > cole tudo > Run)
-- ============================================================

-- Categorias
create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  image_url text,
  sort_order int default 0,
  created_at timestamptz default now()
);

-- Produtos
create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  category_id uuid references categories(id) on delete set null,
  price numeric(10,2) not null default 0,
  installments int default 1,
  rating numeric(2,1) default 5.0,
  image_url text,
  stock int default 0,
  created_at timestamptz default now()
);

-- Conteúdo do site (chave/valor) — usado para textos e imagens editáveis
-- (banner principal, textos da página Sobre, rodapé, contatos, etc.)
create table if not exists site_content (
  key text primary key,
  value text,
  updated_at timestamptz default now()
);

-- ============================================================
-- Row Level Security
-- ============================================================
alter table categories enable row level security;
alter table products enable row level security;
alter table site_content enable row level security;

-- Leitura pública (o site precisa ler sem estar logado)
drop policy if exists "Public read categories" on categories;
create policy "Public read categories" on categories for select using (true);

drop policy if exists "Public read products" on products;
create policy "Public read products" on products for select using (true);

drop policy if exists "Public read site_content" on site_content;
create policy "Public read site_content" on site_content for select using (true);

-- Escrita somente para usuários autenticados (o admin logado)
drop policy if exists "Authenticated write categories" on categories;
create policy "Authenticated write categories" on categories
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated write products" on products;
create policy "Authenticated write products" on products
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

drop policy if exists "Authenticated write site_content" on site_content;
create policy "Authenticated write site_content" on site_content
  for all using (auth.role() = 'authenticated') with check (auth.role() = 'authenticated');

-- ============================================================
-- Storage — bucket para upload de imagens (produtos, categorias, banner)
-- ============================================================
insert into storage.buckets (id, name, public)
values ('media', 'media', true)
on conflict (id) do nothing;

drop policy if exists "Public read media" on storage.objects;
create policy "Public read media" on storage.objects
  for select using (bucket_id = 'media');

drop policy if exists "Authenticated upload media" on storage.objects;
create policy "Authenticated upload media" on storage.objects
  for insert with check (bucket_id = 'media' and auth.role() = 'authenticated');

drop policy if exists "Authenticated update media" on storage.objects;
create policy "Authenticated update media" on storage.objects
  for update using (bucket_id = 'media' and auth.role() = 'authenticated');

drop policy if exists "Authenticated delete media" on storage.objects;
create policy "Authenticated delete media" on storage.objects
  for delete using (bucket_id = 'media' and auth.role() = 'authenticated');

-- ============================================================
-- Dados iniciais (seed) — espelha o conteúdo atual do site
-- ============================================================
insert into categories (name, slug, image_url, sort_order) values
  ('Óculos de Sol', 'oculos-de-sol', 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=600&h=800', 1),
  ('Óculos de Grau', 'oculos-de-grau', 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=600&h=800', 2),
  ('Lentes de Contato', 'lentes-de-contato', 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=600&h=800', 3),
  ('Armações', 'armacoes', 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&q=80&w=600&h=800', 4)
on conflict (slug) do nothing;

insert into products (name, slug, price, installments, rating, image_url, stock) values
  ('Óculos de Sol Ray-Ban Aviator Classic', 'oculos-de-sol-ray-ban-aviator-classic', 850.00, 10, 4.8, 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=400&h=300', 12),
  ('Armação de Grau Vogue Eyewear Gatinho', 'armacao-de-grau-vogue-eyewear-gatinho', 450.00, 10, 4.5, 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&q=80&w=400&h=300', 5),
  ('Óculos de Sol Oakley Holbrook', 'oculos-de-sol-oakley-holbrook', 720.00, 10, 4.9, 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=400&h=300', 8),
  ('Lentes de Contato Acuvue Oasys (Caixa)', 'lentes-de-contato-acuvue-oasys', 180.00, 3, 4.7, 'https://images.unsplash.com/photo-1589820572855-f71694f4206e?auto=format&fit=crop&q=80&w=400&h=300', 45)
on conflict (slug) do nothing;

insert into site_content (key, value) values
  ('hero_banner_image', '/hero-bg.png'),
  ('sobre_titulo', 'Nossa História'),
  ('sobre_texto', 'A Socorro do Óculos nasceu com a missão de democratizar o acesso à saúde ocular, oferecendo produtos de alta qualidade com preços justos e atendimento humanizado.'),
  ('footer_descricao', 'Sua ótica de confiança. Especialistas em conserto, manutenção e venda de óculos de grau, sol e lentes de contato.'),
  ('footer_endereco', 'Rua Dona Izabel A Redentora, 1984 - Centro, São José dos Pinhais - PR'),
  ('whatsapp_numero', '5541933852179'),
  ('email_contato', 'contato@socorrodooculos.com.br'),
  ('nome_site', 'Socorro dos Óculos'),
  ('slogan_site', 'A sua ótica online de confiança')
on conflict (key) do nothing;
