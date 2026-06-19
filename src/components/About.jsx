const INTERESTS = [
  {
    title: 'Backend Systems',
    desc: 'Optimizing production services, routing workflows, and large-scale data processing for reliable user-facing systems.',
    icon: '⚙️',
  },
  {
    title: 'Machine Learning & MLOps',
    desc: 'Building practical ML pipelines, model deployment workflows, and evaluation loops for production prediction systems.',
    icon: '🧠',
  },
  {
    title: 'Natural Language Processing',
    desc: 'Working on Bangla NLP, including sentence-level spell correction with transformer models and synthetic error generation.',
    icon: '📝',
  },
  {
    title: 'Cybersecurity',
    desc: 'Exploring applied security through cryptography, protocol concepts, XSS, buffer overflow, and secure systems coursework.',
    icon: '🔐',
  },
]

const SKILL_GROUPS = [
  { category: 'Programming Languages', icon: '💻', skills: ['Golang', 'Java', 'Python', 'JavaScript', 'C', 'C++', 'Bash', 'SQL'] },
  { category: 'Web & Backend', icon: '🧩', skills: ['React', 'Node.js', 'HTML5', 'CSS3', 'System Design', 'Backend Optimization'] },
  { category: 'ML & Data Science', icon: '📊', skills: ['Scikit-learn', 'Pandas', 'Matplotlib', 'MLOps', 'NLP'] },
  { category: 'Databases', icon: '🗄️', skills: ['MongoDB', 'Oracle', 'SQL'] },
  { category: 'Tools & Platforms', icon: '🛠️', skills: ['Docker', 'Git', 'GitHub', 'VS Code', 'IntelliJ', 'Wireshark'] },
  { category: 'Academic Areas', icon: '🎓', skills: ['Operating Systems', 'Computer Graphics', 'AI Search', 'Cybersecurity'] },
]

const NEWS = {
  2025: [
    { month: 'May', text: 'Joined Pathao as Software Engineer I.' },
    { month: 'May', text: 'Started working on backend optimization, MLOps pipelines, and ride service routing algorithms.' },
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
            I completed my B.Sc. in Computer Science and Engineering from Bangladesh University of Engineering
            and Technology with a CGPA of <strong className="text-slate-800">3.89/4.00</strong>. My interests
            span computer systems, cybersecurity, machine learning, natural language processing, and system design.
          </p>
          <p>
            At Pathao, I work on backend optimization, MLOps pipelines, and ride service routing algorithms.
            I enjoy solving complex engineering problems and building scalable systems that can hold up in
            production.
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
