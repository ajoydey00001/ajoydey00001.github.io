const INTERESTS = [
  {
    title: 'AI & LLM Security',
    desc: 'Trust, provenance, and attribution integrity in frontier large language models — currently studying source attribution bias with Prof. Lin Tan at Purdue.',
    icon: '🔐',
  },
  {
    title: 'ML for Security',
    desc: 'Learning-based threat and anomaly detection on large-scale system data, including fraud detection models running in production over live ride and delivery traffic.',
    icon: '🛡️',
  },
  {
    title: 'Systems & Network Security',
    desc: 'Low-level systems and protocol security: kernel internals and scheduling in xv6, congestion control and link-layer analysis in ns-3, and applied cryptography, XSS, and buffer overflow exploitation.',
    icon: '⚙️',
  },
  {
    title: 'Machine Learning & NLP',
    desc: 'Transformer and seq2seq modelling at scale — a 3.8M sentence-pair Bangla correction model — as the technical foundation for language-model security research.',
    icon: '🧠',
  },
]

const SKILL_GROUPS = [
  { category: 'Security', icon: '🔐', skills: ['Applied Cryptography', 'Elliptic Curve Diffie–Hellman', 'Buffer Overflow', 'XSS', 'Anomaly & Fraud Detection', 'Wireshark', 'Network Analysis'] },
  { category: 'Systems & Networks', icon: '⚙️', skills: ['xv6 Kernel', 'System Calls', 'MLFQ Scheduling', 'ns-3', 'TCP Congestion Control', 'POSIX Threads', 'Linux'] },
  { category: 'ML & Data Science', icon: '📊', skills: ['PyTorch', 'Transformers', 'Scikit-learn', 'XGBoost', 'Pandas', 'NumPy', 'MLOps', 'NLP'] },
  { category: 'Programming Languages', icon: '💻', skills: ['Python', 'Golang', 'C', 'C++', 'Java', 'SQL', 'Bash', 'Assembly'] },
  { category: 'Infrastructure & Data', icon: '🗄️', skills: ['Docker', 'Kubernetes', 'GCP', 'BigQuery', 'PostgreSQL', 'MongoDB', 'Redis', 'ETL Pipelines'] },
  { category: 'Academic Areas', icon: '🎓', skills: ['Computer Security', 'Operating Systems', 'Computer Networks', 'Compiler Construction', 'Machine Learning'] },
]

const NEWS = {
  2026: [
    { month: 'Jun', text: 'Started research with Prof. Lin Tan (Purdue University) on source attribution and institutional bias in frontier LLMs.' },
    { month: 'Aug', text: 'Applying to CS PhD programs for Fall 2027, focusing on security and privacy.' },
  ],
  2025: [
    { month: 'May', text: 'Joined Pathao as Software Engineer I, working on fraud detection, MLOps pipelines, and routing algorithms for production ride and delivery systems.' },
    { month: 'Mar', text: 'Completed B.Sc. in CSE at BUET (CGPA 3.89/4.00).' },
  ],
  2023: [
    { month: 'Jul', text: 'Recognized on the BUET Merit List for outstanding academic performance.' },
  ],
  2022: [
    { month: 'Jan', text: "Achieved Dean's List academic standing at BUET." },
  ],
}

function SectionTitle({ children }) {
  return (
    <h2 className="text-lg font-bold text-slate-800 border-b border-slate-200 pb-2 mb-5">
      {children}
    </h2>
  )
}

export default function About() {
  return (
    <div className="space-y-12">
      <section>
        <SectionTitle>About Me</SectionTitle>
        <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
          <p>
            Hello! I'm <strong className="text-slate-800">Ajoy Dey</strong>, a Software Engineer I at{' '}
            <a href="https://pathao.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Pathao
            </a>{' '}
            and a part-time M.Sc. student in the{' '}
            <a href="https://cse.buet.ac.bd/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              CSE Department at BUET
            </a>
            .
          </p>
          <p>
            I am applying for <strong className="text-slate-800">CS PhD programs starting Fall 2027</strong>, with
            research interests in <strong className="text-slate-800">security and privacy</strong> — particularly
            the security of machine learning systems, trust and provenance in large language models, and
            learning-based threat detection on real system data.
          </p>
          <p>
            I completed my B.Sc. in Computer Science and Engineering from Bangladesh University of Engineering
            and Technology with a CGPA of <strong className="text-slate-800">3.89/4.00</strong>. I currently work
            with <strong className="text-slate-800">Prof. Lin Tan</strong>{' '}
            at Purdue University on source attribution and institutional bias in frontier LLMs — how these models
            assign credit, and where that attribution can be distorted.
          </p>
          <p>
            At Pathao, I build and operate production systems at scale: fraud detection models over live ride and
            delivery traffic, large-scale ETL and analytics pipelines, and an MLOps pipeline for ETA prediction
            serving 100,000+ rides per day. Working on abuse and fraud in a live system is what moved my interest
            from building systems toward securing them.
          </p>
        </div>
      </section>

      <section>
        <SectionTitle>Interests</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {INTERESTS.map(({ title, desc, icon }) => (
            <div key={title} className="card p-5 flex gap-3">
              <span className="text-2xl shrink-0">{icon}</span>
              <div>
                <h3 className="font-semibold text-slate-800 text-sm mb-1">{title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Technical Skills</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {SKILL_GROUPS.map(({ category, icon, skills }) => (
            <div key={category} className="card p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-lg">{icon}</span>
                <h3 className="font-semibold text-slate-700 text-xs uppercase tracking-wide">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills.map(skill => (
                  <span key={skill} className="tag text-xs">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionTitle>Recent News</SectionTitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(NEWS)
            .sort(([a], [b]) => Number(b) - Number(a))
            .map(([year, items]) => (
              <div key={year} className="card p-5 flex flex-col gap-3">
                <span className="text-l font-black text-purple-500 uppercase tracking-widest border-b border-slate-200 pb-2">
                  {year}
                </span>
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="shrink-0 font-medium text-slate-400 text-xs w-8 mt-0.5">{item.month}</span>
                      <span className="text-sm text-slate-700 leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}
