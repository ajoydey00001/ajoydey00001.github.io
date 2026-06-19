import SectionHeader from './SectionHeader'

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Research & Thesis" />

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">Sentence-level Bangla Spell Error Corrector</h3>
                <p className="text-xs text-slate-400 mt-1">Undergraduate Thesis</p>
              </div>
              <span className="tag">NLP</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Developed a seq2seq transformer model using MarianMT, fine-tuned on 3.8M sentence pairs.
              The project included synthetic error dataset generation for Bengali writing patterns and
              achieved 97% character-level accuracy using knowledge distillation.
            </p>
            <a href="https://github.com/ajoydey00001/CSE-400-Thesis" target="_blank" rel="noreferrer" className="inline-flex mt-4 text-sm font-medium text-blue-600 hover:underline">
              View repository
            </a>
          </div>

          <div className="card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">Current Engineering Focus</h3>
                <p className="text-xs text-slate-400 mt-1">Pathao</p>
              </div>
              <span className="tag">Systems</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              I currently work on backend optimization, MLOps pipelines, ETA prediction, and ride
              service routing algorithms, with an emphasis on reliable production systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
