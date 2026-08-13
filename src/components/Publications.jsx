import SectionHeader from './SectionHeader'

export default function Publications() {
  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Research" />

        <p className="mt-8 text-sm text-slate-600 leading-relaxed max-w-3xl">
          I am interested in the security and privacy of machine learning systems — how large language models
          can be trusted, attributed, and attacked, and how learning-based methods detect abuse in real
          deployed systems. My work sits between machine learning and systems: transformer modelling at scale
          on one side, kernel, network, and production infrastructure on the other.
        </p>

        {/* Featured: ongoing collaboration */}
        <div className="mt-10 card p-6 border-l-4 border-purple-500">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-base font-semibold text-slate-800">
                Source Attribution Bias in Frontier Large Language Models
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                with Prof. Lin Tan, Purdue University · Jun 2026 – present
              </p>
            </div>
            <span className="tag shrink-0">LLM Security</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed mt-4">
            Studying how frontier LLMs assign credit to sources and institutions when reasoning about computer
            science research, and where that attribution becomes distorted. I designed the benchmarking
            methodology, using CORE and CSRankings conference rankings as ground truth against which to measure
            each model's perception of academic impact, and ran the statistical analysis quantifying
            institutional bias across multiple models.
          </p>
          <p className="text-sm text-slate-500 leading-relaxed mt-3">
            Attribution integrity is a trust problem: as these models are increasingly used to summarise and
            recommend technical work, systematic bias in what they credit becomes a channel for
            misinformation and manipulation. I am currently extending this work toward its security
            implications.
          </p>
          <a href="https://github.com/ajoydey00001/uiuc_assignment" target="_blank" rel="noreferrer" className="inline-flex mt-4 text-sm font-medium text-blue-600 hover:underline">
            View repository
          </a>
        </div>

        <div className="mt-6 grid md:grid-cols-2 gap-5">
          <div className="card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  Applied Security in Production Systems
                </h3>
                <p className="text-xs text-slate-400 mt-1">Pathao · May 2025 – present</p>
              </div>
              <span className="tag shrink-0">ML for Security</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              I build and operate fraud detection models over live ride and delivery traffic, alongside
              large-scale ETL and analytics pipelines and an MLOps pipeline for ETA prediction serving
              100,000+ rides per day. Detecting abuse in a live adversarial system — where the attackers adapt
              and the cost of a false positive is a real user — is what moved my interest from building
              systems toward securing them.
            </p>
          </div>

          <div className="card p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-base font-semibold text-slate-800">
                  Sentence-level Bangla Spell Error Corrector
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Undergraduate Thesis · supervised by Dr. Muhammad Abdullah Adnan, BUET
                </p>
              </div>
              <span className="tag shrink-0">NLP</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mt-4">
              Built a seq2seq transformer (MarianMT) fine-tuned on 3.8M synthetically generated sentence
              pairs, using an error-generation algorithm that mimics real Bengali writing patterns, and
              reaching 97% character-level accuracy. Transfer from Bangla grammatical error correction
              checkpoints and knowledge distillation were used to improve performance.
            </p>
            <p className="text-sm text-slate-500 leading-relaxed mt-3">
              This work gave me hands-on depth in transformer training, data generation, and model
              distillation — the same toolkit that language-model security research is built on.
            </p>
            <a href="https://github.com/ajoydey00001/CSE-400-Thesis" target="_blank" rel="noreferrer" className="inline-flex mt-4 text-sm font-medium text-blue-600 hover:underline">
              View repository
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
