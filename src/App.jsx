import { useState } from 'react'

const WA_LINK =
  'https://wa.me/5541991790947?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os%20da%20Lumo%20Automa%C3%A7%C3%A3o!'

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
    { href: '#beneficios', label: 'Benefícios' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#contato', label: 'Contato' },
  ]

  const diferenciais = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Qualidade Premium',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1m-6 0a2 2 0 002 2H9a2 2 0 002-2m0 0V5" />
        </svg>
      ),
      title: 'Automação Inteligente',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Alta Complexidade',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Execução Profissional',
    },
  ]

  const servicos = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Projetos e Instalações Elétricas',
      description: 'Equipe especializada para executar o projeto do bruto ao acabamento fino.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072M12 18.364l-4.243-4.243a8 8 0 010-11.314L12 6.05l4.243-4.243a8 8 0 010 11.314L12 17.121" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 9a3 3 0 104.243 4.243L12 12l-2.121-2.121A3 3 0 009 9z" />
        </svg>
      ),
      title: 'Sistemas de Áudio e Vídeo',
      description: 'Sonorização de ambientes, salas de cinema e home theater com tecnologia de ponta.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'Integração com Segurança',
      description: 'Conexão inteligente com sistemas de segurança e energia solar.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Controle de Máquinas',
      description: 'Automação de equipamentos industriais e comerciais com eficiência e precisão.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Iluminação Profissional',
      description: 'Design de iluminação personalizada para destacar arquitetura e valorizar ambientes.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7h3M3 12h4M3 17h3" />
        </svg>
      ),
      title: 'Carregadores Veiculares',
      description: 'Instalação profissional de carregadores para veículos elétricos em residências e empresas.',
    },
  ]

  const beneficios = [
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Economia de Energia',
      description: 'Gestão inteligente e eficiência energética que reduzem custos operacionais.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: 'Design e Tecnologia',
      description: 'Estética e funcionalidade integradas em cada projeto com identidade exclusiva.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: 'Projetos Sob Medida',
      description: 'Soluções personalizadas para cada cliente, do residencial ao industrial.',
    },
    {
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: 'Resultado Completo',
      description: 'Iluminação que valoriza arquitetura e ambientes, entregando a experiência final ideal.',
    },
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
    { name: 'Residências', detail: 'Alto Padrão' },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a14] text-white">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#0a0a14]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-[#a78bfa]">Lumo</span>
            <span className="hidden text-xs font-medium uppercase tracking-widest text-slate-400 sm:block">
              Automação
            </span>
          </a>

          {/* Nav Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
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
            className="hidden items-center gap-2 rounded-full bg-[#25d366] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1ebe5d] hover:shadow-lg hover:shadow-green-500/25 md:flex"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Menu"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                menuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-white/[0.08] bg-[#0a0a14] px-6 py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-slate-300 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3 font-bold text-white"
              >
                <WhatsAppIcon />
                Fale pelo WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-24 md:px-10 md:py-36"
      >
        {/* Glow background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-[#a78bfa]/10 blur-3xl" />
          <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-[#a78bfa]/8 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="mb-6 inline-block rounded-full border border-[#a78bfa]/40 bg-[#a78bfa]/10 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            Automação Elétrica
          </span>

          <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Automação e Elétrica{' '}
            <span className="text-[#a78bfa]">de Alto Padrão</span>
          </h1>

          <p className="mx-auto mb-4 max-w-2xl text-lg text-slate-400 md:text-xl">
            Entregando soluções completas e excelência em cada projeto.
          </p>
          <p className="mx-auto mb-10 max-w-2xl text-base text-slate-500">
            Ciclo completo desde o planejamento até a operação final.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 text-base font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#1ebe5d] hover:shadow-green-500/40 hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Solicitar Orçamento
            </a>
            <a
              href="#servicos"
              className="rounded-full border border-[#a78bfa]/40 bg-[#a78bfa]/10 px-8 py-4 text-base font-semibold text-[#a78bfa] transition-all hover:bg-[#a78bfa]/20"
            >
              Conhecer Serviços
            </a>
          </div>

          {/* 4 Diferenciais */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {diferenciais.map((d) => (
              <div
                key={d.title}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-sm transition-all hover:border-[#a78bfa]/30 hover:bg-[#a78bfa]/5"
              >
                <span className="text-[#a78bfa]">{d.icon}</span>
                <span className="text-center text-sm font-semibold text-white">{d.title}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOBRE / MISSÃO */}
      <section id="sobre" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
                Quem somos
              </span>
              <h2 className="mb-6 text-3xl font-black tracking-tight md:text-4xl">
                Planejar, integrar e{' '}
                <span className="text-[#a78bfa]">controlar</span> sistemas
                elétricos
              </h2>
              <p className="mb-6 leading-relaxed text-slate-400">
                A <strong className="text-white">Lumo Automação Elétrica</strong>, liderada por{' '}
                <strong className="text-white">Lucas Sbrissia</strong>, atua com eficiência,
                segurança e inteligência em cada etapa — desde o projeto até a operação final.
              </p>
              <p className="leading-relaxed text-slate-400">
                Nosso compromisso é entregar excelência técnica com identidade exclusiva,
                transformando espaços residenciais, comerciais e industriais por todo o Brasil.
              </p>
            </div>

            <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#a78bfa]/20">
                  <svg className="h-5 w-5 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-sm font-semibold uppercase tracking-wider text-[#a78bfa]">
                  Nossa Missão
                </span>
              </div>
              <blockquote className="text-xl font-semibold leading-relaxed text-white">
                "Desenvolver soluções tecnológicas para promover{' '}
                <span className="text-[#a78bfa]">conforto e segurança</span> para todos."
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-6">
                <div className="h-10 w-10 rounded-full bg-[#a78bfa]/20 flex items-center justify-center text-sm font-bold text-[#a78bfa]">
                  LS
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Lucas Sbrissia</div>
                  <div className="text-xs text-slate-500">Fundador — Lumo Automação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
              O que fazemos
            </span>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Serviços Especializados
            </h2>
            <p className="mt-4 text-slate-400">
              Soluções completas do projeto à operação
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 transition-all duration-300 hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/5 hover:-translate-y-1"
              >
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#a78bfa]/10 text-[#a78bfa] transition-colors group-hover:bg-[#a78bfa]/20">
                  {s.icon}
                </span>
                <h3 className="mb-3 text-lg font-bold text-white">{s.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section id="beneficios" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
              Por que escolher a Lumo
            </span>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Benefícios que Fazem a Diferença
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6 text-center transition-all duration-300 hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/5"
              >
                <span className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#a78bfa]/10 text-[#a78bfa] transition-colors group-hover:bg-[#a78bfa]/20">
                  {b.icon}
                </span>
                <h3 className="mb-2 font-bold text-white">{b.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS / CLIENTES */}
      <section id="projetos" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
              Portfólio
            </span>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">
              Projetos Realizados
            </h2>
            <p className="mt-4 text-slate-400">
              Empresas e residências que confiam na Lumo
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clientes.map((c) => (
              <div
                key={c.name}
                className="group rounded-xl border border-white/[0.08] bg-white/[0.03] p-4 text-center transition-all duration-300 hover:border-[#a78bfa]/40 hover:bg-[#a78bfa]/5"
              >
                <div className="mb-1 text-sm font-bold text-white">{c.name}</div>
                <div className="text-xs text-slate-500">{c.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABRANGÊNCIA */}
      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-3xl border border-[#a78bfa]/20 bg-gradient-to-br from-[#a78bfa]/10 to-[#a78bfa]/5 p-10 text-center md:p-16">
            <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-[#a78bfa]/20">
              <svg className="h-8 w-8 text-[#a78bfa]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">
              Atendemos em Todo o{' '}
              <span className="text-[#a78bfa]">Brasil</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-slate-400">
              Do sul ao norte do país, a Lumo leva automação e elétrica de alto padrão
              para residências, restaurantes, bares, hotéis e indústrias.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25d366] px-8 py-4 font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#1ebe5d] hover:-translate-y-0.5"
            >
              <WhatsAppIcon />
              Fale com a Lumo
            </a>
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-[#a78bfa]">
            Contato
          </span>
          <h2 className="mb-4 text-3xl font-black tracking-tight md:text-4xl">
            Pronto para Transformar{' '}
            <span className="text-[#a78bfa]">seu Espaço?</span>
          </h2>
          <p className="mb-10 text-slate-400">
            Entre em contato com a Lumo e receba um orçamento personalizado para o seu projeto.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-[#25d366] px-8 py-5 text-lg font-bold text-white shadow-lg shadow-green-500/20 transition-all hover:bg-[#1ebe5d] hover:shadow-green-500/40 hover:-translate-y-0.5 sm:w-auto"
            >
              <WhatsAppIcon className="w-6 h-6" />
              (41) 99179-0947
            </a>
            <a
              href="https://instagram.com/lumoautomacao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#a78bfa]/40 bg-[#a78bfa]/10 px-8 py-5 text-lg font-bold text-[#a78bfa] transition-all hover:bg-[#a78bfa]/20 sm:w-auto"
            >
              <InstagramIcon className="w-6 h-6" />
              @lumoautomacao
            </a>
          </div>

          <div className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
            <p className="text-sm text-slate-400">
              Projetos residenciais, comerciais, industriais e hospitalidade.{' '}
              <strong className="text-white">Lucas Sbrissia</strong> e a equipe Lumo estão
              prontos para planejar, integrar e controlar o sistema ideal para o seu espaço.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.08] px-6 py-10 md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <span className="text-xl font-black text-[#a78bfa]">Lumo</span>
              <span className="ml-2 text-xs font-medium uppercase tracking-widest text-slate-500">
                Automação Elétrica
              </span>
              <p className="mt-1 text-xs text-slate-600">
                Qualidade Premium · Automação Inteligente · Todo o Brasil
              </p>
            </div>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25d366]/10 text-[#25d366] transition-colors hover:bg-[#25d366]/20"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </a>
              <a
                href="https://instagram.com/lumoautomacao"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#a78bfa]/10 text-[#a78bfa] transition-colors hover:bg-[#a78bfa]/20"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-white/[0.06] pt-6 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Lumo Automação Elétrica. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* WHATSAPP FIXO */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-green-500/30 transition-all hover:scale-110 hover:bg-[#1ebe5d]"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>

    </div>
  )
}
