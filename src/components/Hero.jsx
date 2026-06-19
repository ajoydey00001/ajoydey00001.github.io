const SOCIAL = [
  {
    href: 'https://github.com/JohoraAva',
    label: 'GitHub',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/fatema-tuj-johora-50000b324/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://x.com/JohoraAva',
    label: 'Twitter / X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'mailto:Fatema.TujJohora@utdallas.edu',
    label: 'Email',
    external: false,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Cover photo */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/img/welcome3.jpg')" }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/75 via-slate-900/65 to-slate-900/85" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto">
        {/* Profile photo */}
        {/* <div className="mb-7">
          <img
            src="/img/profile_pic.jpg"
            alt="Fatema Tuj Johora"
            className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto object-cover border-[3px] border-white/80 shadow-2xl"
          />
        </div> */}

        <h1 className="text-4xl md:text-5xl font-bold text-white mb-1 tracking-tight">
          Fatema Tuj Johora
        </h1>
        <p className="text-lg text-blue-300 font-medium mb-3">Ava</p>

        <p className="text-lg md:text-xl text-slate-200 font-light mb-2">
          Ph.D. Student in Computer Science
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-slate-400 text-sm mb-8">
          <a
            href="https://www.utdallas.edu/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            University of Texas at Dallas
          </a>
          <span className="text-slate-600">·</span>
          <a
            href="https://sysnets.github.io/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-300 transition-colors"
          >
            SysNetS Lab
          </a>
          <span className="text-slate-600">·</span>
          <span>Dallas, TX</span>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-3 mb-8">
          {SOCIAL.map(({ href, label, icon, external = true }) => (
            <a
              key={href}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noreferrer' : undefined}
              aria-label={label}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 border border-white/20 hover:border-blue-600 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/img/CV.pdf" download className="btn-primary shadow-lg">
            Download CV
          </a>
          <a href="#about" className="btn-outline">
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
