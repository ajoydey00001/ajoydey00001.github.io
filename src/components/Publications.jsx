import { useState, useEffect } from 'react'
import SectionHeader from './SectionHeader'

// function playFaaaah() {
//   try {
//     new Audio('/img/faaah.mp3').play()
//   } catch (_) {}
// }

export default function Publications() {
  // const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   playFaaaah()
  //   const timer = setTimeout(() => setLoading(false), 5000)
  //   return () => clearTimeout(timer)
  // }, [])

  // if (loading) {
  //   return (
  //     <div className="flex items-center justify-center py-32">
  //       <img src="/img/Loading_icon.gif" alt="Loading…" className="w-32 h-32" />
  //     </div>
  //   )
  // }

  return (
    <section id="publications" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Publications" />

        <div className="mt-12 flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-5">
            <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-slate-700 mb-2">No Publications Yet</h3>
          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            I'm currently in the early stages of my Ph.D. research. Publications will appear here once available.
          </p>
        </div>
      </div>
    </section>
  )
}
