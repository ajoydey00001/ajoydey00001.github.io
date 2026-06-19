import SectionHeader from './SectionHeader'

const NEWS = [
  {
    date: 'May 2025',
    text: 'Joined Pathao as Software Engineer I.',
    tag: 'Milestone',
  },
  {
    date: '2023',
    text: 'Recognized on the BUET Merit List for outstanding academic performance.',
    tag: 'Award',
  },
]

const TAG_COLORS = {
  Event:     'bg-purple-50 text-purple-600',
  Milestone: 'bg-green-50 text-green-600',
  Award:     'bg-amber-50 text-amber-600',
  Paper:     'bg-blue-50 text-blue-600',
}

export default function News() {
  return (
    <section id="news" className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Recent News" />

        <div className="mt-8 max-w-3xl mx-auto space-y-3">
          {NEWS.map((item, i) => (
            <div
              key={i}
              className="flex gap-4 items-start bg-white rounded-xl border border-slate-100 shadow-sm px-5 py-4 hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-3 py-1 whitespace-nowrap mt-0.5 shrink-0">
                {item.date}
              </span>
              <p className="text-sm text-slate-700 leading-relaxed flex-1">{item.text}</p>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 mt-0.5 ${TAG_COLORS[item.tag] ?? 'bg-slate-100 text-slate-500'}`}>
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
