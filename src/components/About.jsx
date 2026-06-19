const INTERESTS = [
  {
    title: 'Protocol Security',
    desc: 'Analyzing and improving the security of communication protocols, with a focus on cellular 4G/5G network standards.',
    icon: '🔒',
  },
  {
    title: 'Formal Methods',
    desc: 'Applying formal verification techniques — model checking, theorem proving, and automata-based reasoning — to prove security properties.',
    icon: '📐',
  },
  {
    title: 'Cellular Network Security',
    desc: 'Identifying vulnerabilities in 4G/5G protocols and designing mitigations that strengthen real-world network infrastructure.',
    icon: '📡',
  },
  {
    title: 'Automata-Based Reasoning',
    desc: 'Using automata theory to model and analyze protocol state machines for correctness and security guarantees.',
    icon: '⚙️',
  },
]

const SKILL_GROUPS = [
  { category: 'Programming Languages', icon: '💻', skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Assembly 8086', 'Bash', 'TeX'] },
  { category: 'Frameworks & Libraries', icon: '🧩', skills: ['React', 'Spring Boot', 'Svelte', 'SvelteKit', 'Node.js', 'NumPy', 'Pandas', 'PyTorch', 'Scikit-Learn'] },
  { category: 'Web & Styling',          icon: '🎨', skills: ['HTML', 'CSS', 'Tailwind CSS'] },
  { category: 'Databases',              icon: '🗄️', skills: ['MySQL', 'Oracle', 'PostgreSQL'] },
  { category: 'Formal Methods & Security Tools', icon: '🔬', skills: ['ProVerif', 'nuXmv', 'Rocq Prover', 'Picinae', 'Velociraptor', 'WireShark', 'Packet Tracer', 'NS-3'] },
  { category: 'Dev Tools & Others',     icon: '🛠️', skills: ['Git', 'GitHub', 'JavaFX', 'Flex', 'Bison', 'ATMega32', 'OpenGL'] },
]

const NEWS = {
  2026: [
    {month: 'May', text: 'Served as a reviewer for IEEE ransactions on Dependable and Secure Computing(TDSC) [External].' },
    { month: 'Mar', text: 'Attended the NAIRR Pilot Annual Meeting as a Resource Awardee Representative.' },
    { month: 'Feb', text: 'Served as a reviewer for IEEE Transactions on Networking (TON) [External].' },
  ],
  2025: [
    {
      month: 'Aug',
      text: (
        <>
          Joined the{' '}
          <a href="https://sysnets.github.io/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            SysNetS Lab
          </a>{' '}
          at UT Dallas as a Ph.D. student under Prof. Imtiaz Karim.
        </>
      ),
    },
    {
      month: 'Apr',
      text: (
        <>
          Joined the{' '}
          <a href="https://synesisitltd.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
            Synesis IT
          </a>{' '}
          as a Software Engineer.
        </>
      ),
    },
    {month: 'Mar', text: 'Graduated From BUET.'},
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

      {/* ── About Me ── */}
      <section>
        <SectionTitle>About Me</SectionTitle>
        <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
          <p>
            Hello! I'm <strong className="text-slate-800">Fatema Tuj Johora</strong>, though I go by{' '}
            <strong className="text-blue-600">Ava</strong>. I'm a Ph.D. student in Computer Science at the{' '}
            <a href="https://www.utdallas.edu/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              University of Texas at Dallas (UTD)
            </a>
            , working in the{' '}
            <a href="https://sysnets.github.io/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              SysNetS Lab
            </a>{' '}
            (Fall '25–present) under the supervision of Professor{' '}
            <a href="https://www.imtiazkarim.net/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Imtiaz Karim
            </a>
            .
          </p>
          <p>
            My research focuses on <strong className="text-slate-800">cybersecurity</strong>, using formal
            methods to make network protocols, especially in cellular 4G/5G systems, safer and more
            reliable. I aim to develop rigorous methods that bridge theoretical foundations with practical
            security applications.
          </p>
          <p>
            I completed my B.Sc. in CSE from the{' '}
            <a href="https://cse.buet.ac.bd/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              CSE Department of BUET
            </a>{' '}
            with a CGPA of 3.94/4.00. Prior to my Ph.D., I worked as a Software Engineer at{' '}
            <a href="https://synesisitltd.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Synesis IT
            </a>
            , contributing to the{' '}
            <a href="https://convay.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
              Convay
            </a>{' '}
            video conferencing platform as a Full Stack Engineer. I currently serve as a Graduate Teaching
            Assistant at UTD.
          </p>
        </div>
      </section>

      {/* ── Research Interests ── */}
      <section>
        <SectionTitle>Research Interests</SectionTitle>
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

      {/* ── Technical Skills ── */}
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

      {/* ── Recent News ── */}
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
