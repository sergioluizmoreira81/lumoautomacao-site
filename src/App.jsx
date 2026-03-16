import { useState } from 'react'

const WA_LINK =
  'https://wa.me/554191790947?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Lumo%20Automa%C3%A7%C3%A3o!'

function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contato', label: 'Contato' },
  ]

  const diferenciais = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Qualidade Premium',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0a2 2 0 002 2H9a2 2 0 002-2m0 0V5" />
        </svg>
      ),
      title: 'Automação Inteligente',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Alta Complexidade',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Execução Profissional',
    },
  ]

  const servicos = [
    {
      emoji: '⚡',
      title: 'Projetos e Instalações Elétricas',
      description: 'Do bruto ao acabamento fino com precisão e excelência',
    },
    {
      emoji: '🏠',
      title: 'Automação Residencial e Predial',
      description: 'Controle completo de sistemas com tecnologia de ponta',
    },
    {
      emoji: '🎵',
      title: 'Sistemas de Áudio e Vídeo',
      description: 'Sonorização, home theater e salas de cinema',
    },
    {
      emoji: '💡',
      title: 'Iluminação Profissional',
      description: 'Design de iluminação que valoriza arquitetura e ambientes',
    },
    {
      emoji: '🔒',
      title: 'Integração e Segurança',
      description: 'Sistemas de segurança integrados à automação e energia solar',
    },
    {
      emoji: '🔌',
      title: 'Carregadores Veiculares',
      description: 'Instalação profissional para veículos elétricos',
    },
  ]

  const stats = [
    { number: '100+', label: 'Projetos entregues' },
    { number: 'BR', label: 'Todo o Brasil' },
    { number: '100%', label: 'Satisfação garantida' },
  ]

  const clientes = [
    { name: 'Hard Rock Cafe', detail: 'Florianópolis' },
    { name: 'BaraQuias', detail: 'Restaurante' },
    { name: 'Jurema Águas Quentes', detail: 'Resort' },
    { name: 'Sumatra', detail: 'Surf & Skate' },
    { name: 'TAJ Bar', detail: 'Bar & Lounge' },
    { name: 'Ambar', detail: 'Restaurante & Bar' },
    { name: 'OX Room Steakhouse', detail: 'Restaurante' },
    { name: 'ELIXIR', detail: 'Restaurant & Lounge Bar' },
    { name: 'Its Curitiba', detail: 'Espaço Múltiplo' },
    { name: 'Residências Premium', detail: 'Alto Padrão' },
  ]

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-[#0B0B0B]/95 backdrop-blur-xl border-b border-[#2A2A2A]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-widest text-[#F5F5F5]">LUMO</span>
            <span
              className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] sm:block"
              style={{ color: '#D4AF37' }}
            >
              Automação
            </span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#9FA3A7] transition-all duration-300 hover:text-[#D4AF37]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-[#D4AF37]/60 px-5 py-2.5 text-sm font-bold text-[#F5F5F5] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37] md:flex"
          >
            Solicitar Orçamento
          </a>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Menu"
          >
            <span
              className="block h-px w-6 bg-[#F5F5F5] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : '' }}
            />
            <span
              className="block h-px w-6 bg-[#F5F5F5] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-px w-6 bg-[#F5F5F5] transition-all duration-300"
              style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : '' }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-[#2A2A2A] bg-[#0B0B0B] px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-[#9FA3A7] transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 px-5 py-3.5 font-bold text-[#F5F5F5]"
              >
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden px-6 py-24 md:px-10">

        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute -top-60 left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-[120px] opacity-10"
            style={{ background: 'radial-gradient(circle, #D4AF37, transparent)' }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl w-full text-center">

          {/* Label */}
          <p
            className="mb-8 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: '#D4AF37' }}
          >
            Automação Elétrica de Alto Padrão
          </p>

          {/* Título principal */}
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
            Sofisticação que transforma{' '}
            <br className="hidden md:block" />
            energia em{' '}
            <span
              className="inline-block"
              style={{
                background: 'linear-gradient(135deg, #C9A24A, #D4AF37, #F2D27A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              arte.
            </span>
          </h1>

          {/* Linha dourada decorativa */}
          <div
            className="mx-auto mb-8 h-px w-32"
            style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
          />

          {/* Subtítulo */}
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-[#9FA3A7] md:text-xl">
            Automação e elétrica de alto padrão.{' '}
            <span className="text-[#B8B8B8]">Ciclo completo desde o projeto até a operação.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-[#0B0B0B] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-[#D4AF37]/60 px-8 py-4 text-base font-semibold text-[#F5F5F5] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              Conhecer Serviços
            </a>
          </div>

          {/* 4 Diferenciais */}
          <div className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-[#2A2A2A] bg-[#111111] p-5 transition-all duration-300 hover:border-[#D4AF37]/40"
              >
                <span style={{ color: '#D4AF37' }}>{d.icon}</span>
                <span className="text-center text-sm font-semibold text-[#F5F5F5]">{d.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section id="sobre" className="bg-[#111111] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 md:grid-cols-2">

            {/* Esquerda — texto */}
            <div>
              <p
                className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
                style={{ color: '#D4AF37' }}
              >
                Quem somos
              </p>
              <h2 className="mb-6 text-3xl font-black leading-tight tracking-tight text-[#F5F5F5] md:text-5xl">
                Planejar, integrar e controlar com excelência
              </h2>
              {/* Linha decorativa */}
              <div
                className="mb-8 h-px w-20"
                style={{ background: 'linear-gradient(to right, #D4AF37, transparent)' }}
              />
              <p className="mb-6 leading-relaxed text-[#9FA3A7]">
                A <strong className="text-[#F5F5F5]">Lumo Automação Elétrica</strong>, liderada por{' '}
                <strong className="text-[#F5F5F5]">Lucas Sbrissia</strong>, desenvolve soluções
                tecnológicas para promover conforto e segurança para todos.
              </p>
              <p className="leading-relaxed text-[#9FA3A7]">
                Nosso foco é planejar, integrar e controlar sistemas elétricos com eficiência,
                segurança e inteligência — do projeto à operação final, em todo o Brasil.
              </p>
            </div>

            {/* Direita — 4 diferenciais em cards */}
            <div className="grid grid-cols-2 gap-4">
              {diferenciais.map((d) => (
                <div
                  key={d.title}
                  className="rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-6 transition-all duration-300 hover:border-[#D4AF37]/40"
                >
                  <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ background: 'rgba(212,175,55,0.1)' }}
                  >
                    <span style={{ color: '#D4AF37' }}>{d.icon}</span>
                  </div>
                  <p className="text-sm font-bold text-[#F5F5F5]">{d.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVIÇOS ── */}
      <section id="servicos" className="bg-[#0B0B0B] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">

          {/* Cabeçalho */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: '#D4AF37' }}
            >
              O que fazemos
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#F5F5F5] md:text-5xl">
              Serviços Especializados
            </h2>
            <div
              className="mx-auto mt-6 h-px w-24"
              style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
            />
          </div>

          {/* Grid de serviços */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-[#2A2A2A] bg-[#111111] p-8 transition-all duration-300 hover:border-[#D4AF37]/40 hover:-translate-y-1"
              >
                <div className="mb-5 text-4xl">{s.emoji}</div>
                <h3 className="mb-3 text-lg font-bold text-[#F5F5F5]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#9FA3A7]">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section
        className="px-6 py-20 md:px-10 md:py-28"
        style={{ background: 'linear-gradient(135deg, #0B0B0B 0%, #111008 50%, #0B0B0B 100%)' }}
      >
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2">
                <span
                  className="text-5xl font-black md:text-6xl"
                  style={{
                    background: 'linear-gradient(135deg, #C9A24A, #D4AF37, #F2D27A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.number}
                </span>
                <span className="text-sm font-medium uppercase tracking-widest text-[#9FA3A7]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLIENTES ── */}
      <section id="clientes" className="bg-[#111111] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">

          {/* Cabeçalho */}
          <div className="mb-16 text-center">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: '#D4AF37' }}
            >
              Portfólio
            </p>
            <h2 className="text-3xl font-black tracking-tight text-[#F5F5F5] md:text-5xl">
              Quem Confia na Lumo
            </h2>
            <div
              className="mx-auto mt-6 h-px w-24"
              style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
            />
            <p className="mt-6 text-[#9FA3A7]">
              Marcas e residências de alto padrão em todo o Brasil
            </p>
          </div>

          {/* Tags de clientes */}
          <div className="flex flex-wrap justify-center gap-3">
            {clientes.map((c) => (
              <div
                key={c.name}
                className="rounded-full border border-[#D4AF37]/25 bg-[#0B0B0B] px-5 py-2.5 transition-all duration-300 hover:border-[#D4AF37]/60"
              >
                <span className="text-sm font-semibold text-[#F5F5F5]">{c.name}</span>
                <span className="ml-2 text-xs text-[#9FA3A7]">{c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABRANGÊNCIA ── */}
      <section className="bg-[#0B0B0B] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p
            className="mb-6 text-xs font-semibold uppercase tracking-[0.3em]"
            style={{ color: '#D4AF37' }}
          >
            Abrangência
          </p>
          <h2 className="mb-6 text-3xl font-black tracking-tight text-[#F5F5F5] md:text-5xl lg:text-6xl">
            Atendemos em todo o Brasil
          </h2>
          {/* Linha decorativa */}
          <div
            className="mx-auto mb-8 h-px w-32"
            style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
          />
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#9FA3A7]">
            Do sul ao norte do país, a Lumo leva automação e elétrica de alto padrão
            para residências, restaurantes, bares, hotéis e espaços comerciais.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold text-[#0B0B0B] transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
          >
            <WhatsAppIcon />
            Fale com a Lumo
          </a>
        </div>
      </section>

      {/* ── CONTATO ── */}
      <section id="contato" className="bg-[#111111] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">

          {/* Cabeçalho */}
          <div className="mb-14 text-center">
            <p
              className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]"
              style={{ color: '#D4AF37' }}
            >
              Contato
            </p>
            <h2 className="mb-4 text-3xl font-black tracking-tight text-[#F5F5F5] md:text-5xl">
              Pronto para elevar seu projeto?
            </h2>
            <div
              className="mx-auto mt-6 h-px w-24"
              style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
            />
            <p className="mt-6 text-[#9FA3A7]">
              Entre em contato e receba um orçamento personalizado.
            </p>
          </div>

          {/* Botões de contato */}
          <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-lg font-bold text-[#0B0B0B] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
            >
              <WhatsAppIcon className="w-6 h-6" />
              (41) 9179-0947
            </a>
            <a
              href="https://instagram.com/lumoautomacao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-[#D4AF37]/60 px-8 py-5 text-lg font-bold text-[#F5F5F5] transition-all duration-300 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            >
              <InstagramIcon className="w-6 h-6" />
              @lumoautomacao
            </a>
          </div>

          {/* Info block */}
          <div className="mt-10 rounded-2xl border border-[#2A2A2A] bg-[#0B0B0B] p-6 text-center">
            <p className="text-sm leading-relaxed text-[#9FA3A7]">
              Projetos residenciais, comerciais, industriais e hospitalidade.{' '}
              <strong className="text-[#F5F5F5]">Lucas Sbrissia</strong> e a equipe Lumo estão
              prontos para planejar, integrar e controlar o sistema ideal para o seu espaço.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="bg-[#0B0B0B] px-6 py-10 md:px-10"
        style={{ borderTop: '1px solid #D4AF37' }}
      >
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            {/* Logo + tagline */}
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-xl font-black tracking-widest text-[#F5F5F5]">LUMO</span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                  style={{ color: '#D4AF37' }}
                >
                  Automação Elétrica
                </span>
              </div>
              <p className="mt-1 text-xs text-[#9FA3A7]">
                Qualidade Premium · Todo o Brasil
              </p>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#9FA3A7] transition-colors hover:text-[#D4AF37]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2A2A2A] text-[#25d366] transition-all duration-300 hover:border-[#25d366]/40"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://instagram.com/lumoautomacao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2A2A2A] text-[#9FA3A7] transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-[#2A2A2A] pt-6 text-center text-xs text-[#9FA3A7]/50">
            &copy; {new Date().getFullYear()} Lumo Automação Elétrica · lumoautomacao.com.br · Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLUTUANTE ── */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
        style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.35)' }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

    </div>
  )
}
