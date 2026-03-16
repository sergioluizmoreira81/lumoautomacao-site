import { useState } from 'react'

const WA_LINK =
  'https://wa.me/554191790947?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Lumo%20Automa%C3%A7%C3%A3o!'

/* ─── Ícone WhatsApp ─── */
function WhatsAppIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/* ─── Ícone Instagram ─── */
function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}

/* ─── Ícone Check Badge ─── */
const IconBadge = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
)
const IconBolt = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)
const IconShield = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)
const IconUsers = () => (
  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

/* ─── Label de seção ─── */
function SectionLabel({ children }) {
  return (
    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em]" style={{ color: '#D4AF37' }}>
      {children}
    </p>
  )
}

/* ─── Linha decorativa ouro ─── */
function GoldLine({ centered = false }) {
  return (
    <div
      className={`h-px w-16 mt-6 mb-8 ${centered ? 'mx-auto' : ''}`}
      style={{ background: centered ? 'linear-gradient(to right, transparent, #D4AF37, transparent)' : 'linear-gradient(to right, #D4AF37, transparent)' }}
    />
  )
}

/* ═══════════════════════════════════════════════ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#clientes', label: 'Clientes' },
    { href: '#contato', label: 'Contato' },
  ]

  const diferenciais = [
    { icon: <IconBadge />, title: 'Qualidade Premium', desc: 'Materiais e execução de alto nível em cada entrega' },
    { icon: <IconBolt />, title: 'Automação Inteligente', desc: 'Tecnologia de ponta integrada ao seu espaço' },
    { icon: <IconShield />, title: 'Alta Complexidade', desc: 'Projetos desafiadores são nossa especialidade' },
    { icon: <IconUsers />, title: 'Execução Profissional', desc: 'Equipe técnica qualificada do projeto à operação' },
  ]

  const servicos = [
    {
      gradient: 'from-yellow-900/40 to-amber-800/20',
      icon: '⚡',
      title: 'Projetos e Instalações Elétricas',
      description: 'Equipe especializada para executar desde o bruto ao acabamento fino, com precisão e segurança.',
    },
    {
      gradient: 'from-slate-700/40 to-slate-800/20',
      icon: '🏠',
      title: 'Automação Residencial e Predial',
      description: 'Controle completo de iluminação, climatização, persianas e acesso com tecnologia integrada.',
    },
    {
      gradient: 'from-indigo-900/40 to-blue-900/20',
      icon: '🎵',
      title: 'Sistemas de Áudio e Vídeo',
      description: 'Sonorização de ambientes, home theater e salas de cinema com qualidade profissional.',
    },
    {
      gradient: 'from-amber-900/40 to-yellow-800/20',
      icon: '💡',
      title: 'Iluminação Profissional',
      description: 'Design de iluminação personalizado que valoriza a arquitetura e cria atmosferas únicas.',
    },
    {
      gradient: 'from-zinc-700/40 to-zinc-800/20',
      icon: '🔒',
      title: 'Integração e Segurança',
      description: 'Câmeras, alarmes e controle de acesso integrados à automação e energia solar.',
    },
    {
      gradient: 'from-green-900/40 to-emerald-900/20',
      icon: '🔌',
      title: 'Carregadores Veiculares',
      description: 'Instalação certificada de carregadores para veículos elétricos e híbridos.',
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
    <div
      className="min-h-screen bg-[#0B0B0B] text-[#F5F5F5]"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >

      {/* ════════ HEADER ════════ */}
      <header className="sticky top-0 z-50 bg-[#0B0B0B]/97 backdrop-blur-xl border-b border-[#222222]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-12">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 select-none">
            <span
              className="text-xl font-black tracking-widest text-[#F5F5F5]"
              style={{ letterSpacing: '0.18em' }}
            >
              LUMO
            </span>
            <span
              className="hidden sm:block text-[9px] font-bold uppercase"
              style={{ color: '#D4AF37', letterSpacing: '0.22em' }}
            >
              Automação Elétrica
            </span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden items-center gap-9 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold tracking-wide text-[#888] transition-colors duration-200 hover:text-[#F5F5F5]"
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
            className="hidden items-center gap-2 rounded-full px-6 py-2.5 text-[13px] font-bold text-[#0B0B0B] transition-all duration-300 hover:opacity-90 md:flex"
            style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
          >
            <WhatsAppIcon />
            Solicitar Orçamento
          </a>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 md:hidden"
            aria-label="Menu"
          >
            <span
              className="block h-[1.5px] w-6 bg-[#F5F5F5] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : '' }}
            />
            <span
              className="block h-[1.5px] w-6 bg-[#F5F5F5] transition-all duration-300"
              style={{ opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block h-[1.5px] w-6 bg-[#F5F5F5] transition-all duration-300 origin-center"
              style={{ transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : '' }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-[#222222] bg-[#0D0D0D] px-6 py-6 md:hidden">
            <nav className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold text-[#888] transition-colors hover:text-[#F5F5F5]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex items-center justify-center gap-2 rounded-full px-5 py-3.5 font-bold text-[#0B0B0B]"
                style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
              >
                <WhatsAppIcon />
                Solicitar Orçamento
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ════════ HERO ════════ */}
      <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 md:px-12">

        {/* Glow de fundo */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[700px] w-[700px] rounded-full opacity-[0.07]"
            style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', filter: 'blur(80px)' }}
          />
        </div>

        <div className="relative mx-auto max-w-5xl w-full">

          {/* Badge / label */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 px-4 py-1.5 mb-10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em]" style={{ color: '#D4AF37' }}>
              Automação Elétrica de Alto Padrão
            </span>
          </div>

          {/* Headline principal */}
          <h1 className="mb-6 text-[clamp(2.6rem,8vw,5.5rem)] font-black leading-[1.02] tracking-tight text-[#F5F5F5]">
            Planejar, integrar<br className="hidden sm:block" />
            e controlar com{' '}
            <span
              style={{
                background: 'linear-gradient(120deg, #C9A24A 0%, #D4AF37 40%, #F2D27A 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              excelência.
            </span>
          </h1>

          {/* Linha ouro */}
          <div className="h-px w-20 mb-8" style={{ background: 'linear-gradient(to right, #D4AF37, transparent)' }} />

          {/* Subtítulo */}
          <p className="mb-12 max-w-2xl text-[1.1rem] leading-[1.75] text-[#777]">
            A Lumo entrega automação e elétrica do projeto à operação —
            em residências, restaurantes, hotéis e espaços comerciais em{' '}
            <span className="text-[#B8B8B8] font-medium">todo o Brasil.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-full px-8 py-4 text-[15px] font-bold text-[#0B0B0B] transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="flex items-center gap-2 rounded-full border border-[#333] px-8 py-4 text-[15px] font-semibold text-[#999] transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#F5F5F5]"
            >
              Ver Serviços
            </a>
          </div>
        </div>
      </section>

      {/* ════════ DIFERENCIAIS (strip) ════════ */}
      <div className="border-y border-[#E8E8E8] bg-white">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {diferenciais.map((d) => (
              <div key={d.title} className="flex items-start gap-4">
                <div
                  className="shrink-0 mt-0.5 flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{ background: 'rgba(212,175,55,0.12)', color: '#C9A24A' }}
                >
                  {d.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-[#111111] leading-snug">{d.title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#888]">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════ SOBRE ════════ */}
      <section id="sobre" className="bg-[#0B0B0B] px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Esquerda — texto */}
            <div>
              <SectionLabel>Quem somos</SectionLabel>
              <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-[#F5F5F5]">
                Tecnologia que transforma <br />espaços em experiências.
              </h2>
              <GoldLine />
              <p className="mb-5 text-[15px] leading-[1.8] text-[#666]">
                A <strong className="text-[#E0E0E0] font-bold">Lumo Automação Elétrica</strong>, liderada por{' '}
                <strong className="text-[#E0E0E0] font-bold">Lucas Sbrissia</strong>, desenvolve soluções
                tecnológicas que unem conforto, segurança e eficiência em cada projeto.
              </p>
              <p className="mb-10 text-[15px] leading-[1.8] text-[#666]">
                Do diagnóstico inicial ao comissionamento final, nossa equipe planeja e executa
                sistemas elétricos inteligentes com o mais alto padrão técnico — seja em uma
                residência, restaurante, hotel ou espaço industrial.
              </p>

              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 px-6 py-3 text-[13px] font-bold text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/5"
              >
                Fale com a nossa equipe →
              </a>
            </div>

            {/* Direita — visual com pilares */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '100+', label: 'Projetos entregues', sub: 'Residencial, comercial e industrial' },
                { number: '10+', label: 'Anos de experiência', sub: 'Expertise consolidada no setor' },
                { number: 'BR', label: 'Cobertura nacional', sub: 'Do Sul ao Norte do país' },
                { number: '100%', label: 'Satisfação garantida', sub: 'Comprometimento em cada obra' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#1E1E1E] bg-[#111111] p-6 transition-all duration-300 hover:border-[#D4AF37]/20"
                >
                  <p
                    className="text-3xl font-black mb-1"
                    style={{
                      background: 'linear-gradient(135deg, #C9A24A, #D4AF37)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {item.number}
                  </p>
                  <p className="text-[13px] font-bold text-[#E0E0E0] leading-snug">{item.label}</p>
                  <p className="mt-1 text-[11px] text-[#555] leading-relaxed">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SERVIÇOS ════════ */}
      <section id="servicos" className="bg-[#F8F8F8] px-6 py-24 md:px-12 md:py-32 border-y border-[#E8E8E8]">
        <div className="mx-auto max-w-6xl">

          {/* Cabeçalho */}
          <div className="mb-16 max-w-xl">
            <SectionLabel>O que fazemos</SectionLabel>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black leading-tight tracking-tight text-[#111111]">
              Soluções especializadas para cada projeto.
            </h2>
            <GoldLine />
          </div>

          {/* Grid de serviços */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E0E0E0] bg-white shadow-sm transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-md hover:-translate-y-1"
              >
                {/* Visual topo */}
                <div className={`relative h-36 bg-gradient-to-br ${s.gradient} flex items-center justify-center`}>
                  <span className="text-5xl opacity-80 group-hover:opacity-100 transition-opacity">{s.icon}</span>
                  {/* linha decorativa */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to right, transparent, #D4AF37, transparent)' }}
                  />
                </div>
                {/* Conteúdo */}
                <div className="flex flex-col flex-1 p-7">
                  <h3 className="mb-3 text-[15px] font-bold leading-snug text-[#111111]">{s.title}</h3>
                  <p className="text-[13px] leading-[1.7] text-[#666]">{s.description}</p>
                  <div className="mt-auto pt-5">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] font-semibold text-[#C9A24A] transition-colors duration-200 hover:text-[#D4AF37]"
                    >
                      Solicitar →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STATS STRIP ════════ */}
      <div style={{ background: 'linear-gradient(135deg, #0D0B05 0%, #111008 50%, #0D0B05 100%)' }}>
        <div className="mx-auto max-w-5xl px-6 py-20 md:px-12 md:py-24">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#2A2A2A]">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 sm:px-10">
                <span
                  className="text-[clamp(3rem,8vw,4.5rem)] font-black leading-none"
                  style={{
                    background: 'linear-gradient(135deg, #C9A24A, #D4AF37, #F2D27A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {s.number}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#555]">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════ CLIENTES ════════ */}
      <section id="clientes" className="bg-white px-6 py-24 md:px-12 md:py-32 border-y border-[#E8E8E8]">
        <div className="mx-auto max-w-5xl">

          {/* Cabeçalho */}
          <div className="mb-14 text-center">
            <SectionLabel>Portfólio</SectionLabel>
            <h2 className="text-[clamp(1.9rem,4vw,3rem)] font-black tracking-tight text-[#111111]">
              Marcas que confiam na Lumo
            </h2>
            <GoldLine centered />
            <p className="text-[14px] text-[#888]">
              Residências e negócios de alto padrão em todo o Brasil
            </p>
          </div>

          {/* Grid de clientes */}
          <div className="flex flex-wrap justify-center gap-3">
            {clientes.map((c) => (
              <div
                key={c.name}
                className="group flex items-center gap-2.5 rounded-full border border-[#E0E0E0] bg-[#F8F8F8] px-5 py-2.5 transition-all duration-300 hover:border-[#D4AF37]/50 hover:bg-white hover:shadow-sm"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full shrink-0 transition-colors duration-300 group-hover:bg-[#D4AF37]"
                  style={{ background: '#CCC' }}
                />
                <span className="text-[13px] font-semibold text-[#222]">{c.name}</span>
                <span className="text-[11px] text-[#999]">{c.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ ABRANGÊNCIA ════════ */}
      <section className="relative overflow-hidden border-y border-[#1A1A1A] bg-[#0D0D0D] px-6 py-24 md:px-12 md:py-32">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute bottom-0 right-0 h-[400px] w-[400px] opacity-[0.05]"
            style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Esquerda */}
            <div>
              <SectionLabel>Abrangência</SectionLabel>
              <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-black leading-tight tracking-tight text-[#F5F5F5]">
                Onde o seu projeto estiver, a Lumo chega.
              </h2>
              <GoldLine />
              <p className="text-[15px] leading-[1.8] text-[#666]">
                Atendemos residências, restaurantes, bares, hotéis e espaços
                comerciais do Sul ao Norte do país com a mesma qualidade e comprometimento.
              </p>
            </div>

            {/* Direita */}
            <div className="flex flex-col gap-4">
              {['Residências de Alto Padrão', 'Restaurantes e Bares', 'Hotéis e Resorts', 'Espaços Comerciais e Corporativos'].map((seg) => (
                <div
                  key={seg}
                  className="flex items-center gap-4 rounded-xl border border-[#1E1E1E] bg-[#111111] px-5 py-4"
                >
                  <div className="h-2 w-2 shrink-0 rounded-full" style={{ background: '#D4AF37' }} />
                  <span className="text-[14px] font-semibold text-[#C0C0C0]">{seg}</span>
                </div>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2.5 rounded-2xl px-7 py-4 text-[14px] font-bold text-[#0B0B0B] transition-all duration-300 hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
              >
                <WhatsAppIcon />
                Fale com a Lumo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CONTATO ════════ */}
      <section id="contato" className="bg-[#F8F8F8] px-6 py-24 md:px-12 md:py-32 border-y border-[#E8E8E8]">
        <div className="mx-auto max-w-2xl text-center">

          <SectionLabel>Contato</SectionLabel>
          <h2 className="text-[clamp(1.9rem,4vw,2.8rem)] font-black leading-tight tracking-tight text-[#111111]">
            Pronto para elevar o seu projeto?
          </h2>
          <GoldLine centered />
          <p className="mb-12 text-[15px] leading-[1.8] text-[#666]">
            Entre em contato com a equipe da Lumo e receba um orçamento
            personalizado para o seu espaço.
          </p>

          {/* Cards de contato */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl px-8 py-5 text-[15px] font-bold text-white transition-all duration-300 hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #C9A24A, #D4AF37)' }}
            >
              <WhatsAppIcon className="w-5 h-5" />
              (41) 9179-0947
            </a>
            <a
              href="https://instagram.com/lumoautomacao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl border border-[#DDDDDD] bg-white px-8 py-5 text-[15px] font-bold text-[#333] transition-all duration-300 hover:border-[#D4AF37]/50 hover:text-[#111]"
            >
              <InstagramIcon className="w-5 h-5" />
              @lumoautomacao
            </a>
          </div>

          {/* Info text */}
          <p className="mt-10 text-[13px] leading-relaxed text-[#999]">
            Projetos residenciais, comerciais, industriais e de hospitalidade.{' '}
            <span className="text-[#666]">Lucas Sbrissia</span> e a equipe Lumo atendem em todo o Brasil.
          </p>
        </div>
      </section>

      {/* ════════ FOOTER ════════ */}
      <footer className="bg-[#080808] px-6 pt-12 pb-8 md:px-12 border-t border-[#1A1A1A]">
        <div className="mx-auto max-w-6xl">

          {/* Top row */}
          <div className="grid gap-8 pb-10 md:grid-cols-3 md:gap-4 border-b border-[#1A1A1A]">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-lg font-black tracking-widest text-[#F5F5F5]" style={{ letterSpacing: '0.18em' }}>LUMO</span>
                <span className="text-[9px] font-bold uppercase text-[#D4AF37]" style={{ letterSpacing: '0.2em' }}>Automação Elétrica</span>
              </div>
              <p className="text-[13px] text-[#444] leading-relaxed max-w-[220px]">
                Planejar, integrar e controlar sistemas elétricos com excelência.
              </p>
            </div>

            {/* Nav */}
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#444]">Navegação</p>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[13px] text-[#555] transition-colors hover:text-[#D4AF37]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contato */}
            <div>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-widest text-[#444]">Contato</p>
              <div className="flex flex-col gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-[#555] transition-colors hover:text-[#25d366]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-[#25d366]" />
                  (41) 9179-0947
                </a>
                <a
                  href="https://instagram.com/lumoautomacao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[13px] text-[#555] transition-colors hover:text-[#D4AF37]"
                >
                  <InstagramIcon className="w-4 h-4" />
                  @lumoautomacao
                </a>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="pt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-[11px] text-[#333]">
              &copy; {new Date().getFullYear()} Lumo Automação Elétrica · Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#333]">lumoautomacao.com.br</p>
          </div>
        </div>
      </footer>

      {/* ════════ WHATSAPP FLUTUANTE ════════ */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
        style={{ boxShadow: '0 8px 32px rgba(37,211,102,0.3)' }}
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>

    </div>
  )
}
