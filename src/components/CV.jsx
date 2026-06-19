import SectionHeader from './SectionHeader'

function TimelineItem({ title, subtitle, period, institution, children, link, linkLabel }) {
  return (
    <div className="relative pl-6 pb-8 border-l-2 border-slate-200 last:pb-0 last:border-transparent">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-600 border-2 border-white shadow" />
      <div className="mb-1">
        <span className="inline-block px-2.5 py-0.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
          {period}
        </span>
      </div>
      <h3 className="font-semibold text-slate-800 text-base mt-1">{title}</h3>
      <p className="text-sm text-slate-500 mb-2">{institution}</p>
      {subtitle && (
        <p className="text-sm font-medium text-slate-600 italic mb-2">{subtitle}</p>
      )}
      <div className="text-sm text-slate-500 leading-relaxed space-y-1">{children}</div>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 mt-3 text-xs text-blue-600 hover:text-blue-700 font-medium"
        >
          {linkLabel}
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}
    </div>
  )
}

export default function CV() {
  return (
    <section id="cv" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <SectionHeader title="Curriculum Vitae" />
          <a href="/img/CV.pdf" download className="btn-primary flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download CV
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Education
            </h3>

            <TimelineItem
              title="M.Sc. in Computer Science & Engineering"
              institution="Bangladesh University of Engineering & Technology (BUET)"
              period="Part-time"
            >
              <p>Continuing graduate study in the CSE department while working as a software engineer.</p>
            </TimelineItem>

            <TimelineItem
              title="B.Sc. in Computer Science & Engineering"
              institution="Bangladesh University of Engineering & Technology (BUET)"
              period="Completed"
              link="/BUET-Curriculum.html"
              linkLabel="Curriculum Overview"
            >
              <p>CGPA: <strong className="text-slate-700">3.89 / 4.00</strong></p>
              <ul className="mt-2 space-y-1 list-none">
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">▸</span>
                  <span><strong className="text-slate-600">BUET Merit List</strong>: 2023</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-500 mt-0.5">▸</span>
                  <span><strong className="text-slate-600">Dean's List</strong>: 2021, 2022</span>
                </li>
              </ul>
            </TimelineItem>

            <TimelineItem
              title="Higher Secondary Certificate (HSC)"
              institution="Bangladesh Education Board"
              period="2019"
            >
              <p>Board General Scholarship.</p>
            </TimelineItem>

            <TimelineItem
              title="Secondary School Certificate (SSC)"
              institution="Bangladesh Education Board"
              period="2017"
            >
              <p>Board General Scholarship.</p>
            </TimelineItem>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">
              Experience
            </h3>

            <TimelineItem
              title="Software Engineer I"
              institution="Pathao"
              period="May 2025 – Present"
              link="https://pathao.com/"
              linkLabel="Company Website"
            >
              <p>Implemented a new routing algorithm in backend ride service, improving route reliability to <strong className="text-slate-700">90%</strong> for over 100,000 daily rides.</p>
              <p>Developed and deployed an MLOps pipeline for ride ETA prediction, achieving <strong className="text-slate-700">85%</strong> accuracy in production.</p>
              <p>Built an autonomous pipeline for daily reporting and analysis, and optimized backend systems for large-scale ride data processing.</p>
            </TimelineItem>

            <TimelineItem
              title="Undergraduate Thesis"
              institution="BUET CSE"
              period="Final Year"
              link="https://github.com/ajoydey00001/CSE-400-Thesis"
              linkLabel="GitHub Repository"
            >
              <p>Developed a sentence-level Bangla spell error corrector using MarianMT, synthetic error generation, and knowledge distillation.</p>
            </TimelineItem>
          </div>
        </div>
      </div>
    </section>
  )
}
