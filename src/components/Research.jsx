import SectionHeader from './SectionHeader'

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

export default function Research() {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Research"
          subtitle="My work sits at the intersection of formal methods and network security, aiming to bring rigorous theoretical frameworks to bear on practical protocol vulnerabilities."
        />

        {/* Lab affiliation */}
        <div className="mt-10 mb-12 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="font-medium text-slate-700">Current Lab:</span>
          <a
            href="https://sysnets.github.io/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            SysNetS Lab
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <span>·</span>
          <span>
            Advised by{' '}
            <a href="https://www.imtiazkarim.net/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">
              Prof. Imtiaz Karim
            </a>
          </span>
        </div>

        {/* Interest cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INTERESTS.map(({ title, desc, icon }) => (
            <div key={title} className="card p-6 flex flex-col gap-3">
              <div className="text-3xl">{icon}</div>
              <h3 className="font-semibold text-slate-800 text-base">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
