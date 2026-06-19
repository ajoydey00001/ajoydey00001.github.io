import SectionHeader from './SectionHeader'

const INTERESTS = [
  {
    title: 'Computer Systems',
    desc: 'Designing and optimizing backend systems that process large-scale operational data reliably.',
    icon: '⚙️',
  },
  {
    title: 'Cybersecurity',
    desc: 'Exploring secure systems, cryptography, web attacks, and low-level vulnerability demonstrations.',
    icon: '🔐',
  },
  {
    title: 'Machine Learning',
    desc: 'Building practical ML models and production-oriented MLOps pipelines for prediction tasks.',
    icon: '🧠',
  },
  {
    title: 'Natural Language Processing',
    desc: 'Working on Bangla NLP, especially sentence-level spell correction and synthetic data generation.',
    icon: '📝',
  },
]

export default function Research() {
  return (
    <section id="research" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader
          title="Research Interests"
          subtitle="My interests span computer systems, cybersecurity, machine learning, and natural language processing."
        />

        <div className="mt-10 mb-12 flex flex-wrap items-center gap-3 text-sm text-slate-600">
          <span className="font-medium text-slate-700">Current focus:</span>
          <a
            href="https://pathao.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
          >
            Backend Optimization at Pathao
          </a>
          <span>·</span>
          <a href="https://cse.buet.ac.bd/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium">
            BUET CSE
          </a>
        </div>

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
