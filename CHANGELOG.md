# Histórico de Mudanças — lumoautomacao.com.br

Documento de controle de evolução do site Lumo Automação.

---

## [v2.2] — 2026-03-16 · Alternância dark/light de seções

- Seções alternadas entre fundo escuro e branco no padrão Gauge/Elgin
- Diferenciais: fundo branco, ícones dourados, texto escuro
- Serviços: fundo #F8F8F8, cards brancos com sombra e borda clara
- Clientes: fundo branco, pills com borda #E0E0E0
- Contato: fundo #F8F8F8, botão WhatsApp dourado com texto branco
- Ajuste de cores dos textos para garantir contraste em fundo claro
- Build e push validados com sucesso

---

## [v2.1] — 2026-03-16 · Redesign tipográfico e estrutural estilo Gauge

- Fonte Inter importada do Google Fonts (geométrica, clean — equivalente ao Visby)
- Headings com `font-black` e `clamp()` para escala fluida em qualquer tela
- Hero: badge pill com ponto dourado pulsante, tagline refinada
- Diferenciais: strip horizontal com ícones + título + descrição em linha (4 colunas)
- Sobre: layout 2 colunas — texto à esquerda, 4 cards de stats à direita
- Serviços: cards com área visual em gradiente no topo (gradiente único por serviço)
- Stats strip: números centralizados com divisórias
- Abrangência: 2 colunas com lista de segmentos e CTA
- Footer: 3 colunas (brand / navegação / contato) com Instagram como link de texto
- Componentes internos: `SectionLabel` e `GoldLine` para consistência visual
- Hierarquia de fundos: `#080808` → `#0B0B0B` → `#0D0D0D` → `#111111`
- Build e push validados com sucesso

---

## [v2.0] — 2026-03-15 · Redesign premium dark gold (estilo Tesla/Apple)

- Substituído layout anterior por redesign completo dark gold
- Paleta: preto profundo (#080808) + dourado (#D4AF37/#C9A24A)
- Seções completas: Hero, Diferenciais, Sobre, Serviços, Stats, Clientes, Abrangência, Contato, Footer
- 6 serviços com ícones e descrições detalhadas
- 10 clientes reais extraídos do Instagram (Hard Rock Cafe Floripa, BaraQuias, Jurema, etc.)
- Stats: 100+ projetos, 10+ anos, atendimento em todo o Brasil
- Botão WhatsApp flutuante fixo no canto inferior direito

---

## [v1.0] — 2026-03-15 · Migração para Vite + React + Tailwind

- Substituído HTML estático por pipeline com Vite 5 + React 18 + Tailwind CSS
- Criados: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`, `src/App.jsx`, `src/index.css`
- Cloudflare Pages configurado: build command `npm run build`, output `dist/`
- Adicionado conteúdo estático `<noscript>` para indexação pelo Google
- SEO: sitemap.xml, robots.txt, Open Graph, canonical, meta keywords
- Build de produção: JS ~152 KB gzipped, CSS ~16 KB

---

## [v0.2] — 2026-03-15 · Contato e identidade

- Adicionado botão WhatsApp com mensagem pré-preenchida → Lucas Sbrissia (41) 9179-0947
- Adicionado link Instagram @lumoautomacao
- Badge "Site em Construção" mantido
- SEO básico com title e meta description
- HTML corrigido e reestruturado
- Corrigido número WhatsApp (zero extra removido)

---

## [v0.1] — 2026-03-11 · Página inicial

- Criação do repositório `lumoautomacao-site`
- Página "Em Breve" com identidade visual roxa (#a78bfa)
- Fundo escuro (#0f0f1a)

---

## Próximas evoluções planejadas

### Conteúdo
- [ ] Logo oficial da Lumo (arquivo fornecido via Canva/ZIP)
- [ ] Fotos reais de obras (extraídas do portfólio no Canva — Hard Rock, BaraQuias, Jurema, Sumatra, etc.)
- [ ] Confirmar números dos stats (100+ projetos? 10+ anos?)
- [ ] Confirmar lista completa de clientes e permissão de uso público
- [ ] E-mail profissional da Lumo
- [ ] CNPJ / razão social (opcional)
- [ ] Revisar textos dos serviços com Lucas Sbrissia

### Técnico
- [ ] Submeter ao Google Search Console
- [ ] Google Analytics
- [ ] og:image para preview em redes sociais
- [ ] Formulário de orçamento funcional
