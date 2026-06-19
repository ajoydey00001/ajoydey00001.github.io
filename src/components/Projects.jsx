import { useState } from 'react'
import SectionHeader from './SectionHeader'

const PROJECTS = [
  {
    title: 'Sentence-level Bangla Spell Error Corrector',
    description:
      'Undergraduate thesis using a seq2seq transformer model fine-tuned on 3.8M sentence pairs, with synthetic Bengali error generation and knowledge distillation.',
    tags: ['NLP', 'Transformers', 'Bangla', 'Python'],
    link: 'https://github.com/ajoydey00001/CSE-400-Thesis',
    course: 'Thesis',
  },
  {
    title: 'Handwritten Bangla Word Recognition',
    description:
      'EfficientNet-B0 based model for Bangla word recognition on the Zilla-64 dataset, achieving 93.3% accuracy.',
    tags: ['Machine Learning', 'Computer Vision', 'Python'],
    link: 'https://github.com/ajoydey00001/CSE-472',
    course: 'CSE 472',
  },
  {
    title: 'ML Course Projects',
    description:
      'Implemented data preprocessing, logistic regression with bagging and stacking, neural networks, PCA, and EM algorithm assignments.',
    tags: ['Machine Learning', 'Scikit-learn', 'Python'],
    link: 'https://github.com/ajoydey00001/CSE-472',
    course: 'CSE 472',
  },
  {
    title: 'Food Bear',
    description:
      'MERN stack food delivery platform with real-time order tracking, restaurant analytics, and Google Maps integration.',
    tags: ['MERN', 'React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ajoydey00001',
    course: 'Software Project',
  },
  {
    title: 'Football Player Database System',
    description:
      'Java and JavaFX server-client application for managing football players, clubs, and transfers.',
    tags: ['Java', 'JavaFX', 'Socket Programming'],
    link: 'https://github.com/ajoydey00001',
    course: 'CSE 108',
  },
  {
    title: 'AI Offlines',
    description:
      'Implemented n-Puzzle search, adversarial search, GRASP optimization, and decision tree learning assignments.',
    tags: ['Artificial Intelligence', 'Search', 'Optimization'],
    link: 'https://github.com/ajoydey00001',
    course: 'AI',
  },
  {
    title: 'Cybersecurity Projects',
    description:
      'Worked on Elliptic Curve Diffie-Hellman key exchange, XSS demonstrations, and buffer overflow attack demonstrations.',
    tags: ['Cybersecurity', 'Cryptography', 'C'],
    link: 'https://github.com/ajoydey00001',
    course: 'Security',
  },
  {
    title: 'Computer Graphics Assignments',
    description:
      'OpenGL assignments covering raster graphics pipeline concepts, ray tracing, and illumination.',
    tags: ['OpenGL', 'C++', 'Graphics'],
    link: 'https://github.com/ajoydey00001',
    course: 'Graphics',
  },
  {
    title: 'Operating Systems Assignments',
    description:
      'Shell scripting, Xv6 system calls, scheduling, and inter-process communication assignments.',
    tags: ['Operating Systems', 'Shell', 'Xv6'],
    link: 'https://github.com/ajoydey00001',
    course: 'OS',
  },
]

export default function Projects() {
  const [selectedTag, setSelectedTag] = useState('')

  const allTags = [...new Set(PROJECTS.flatMap(p => p.tags))].sort()
  const filtered = selectedTag ? PROJECTS.filter(p => p.tags.includes(selectedTag)) : PROJECTS

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Projects" />

        {/* Tag filter dropdown */}
        <div className="mt-8 flex items-center gap-3">
          <label className="text-xs font-medium text-slate-500 shrink-0">Filter by tag:</label>
          <select
            value={selectedTag}
            onChange={e => setSelectedTag(e.target.value)}
            className="text-sm border border-slate-200 rounded-lg px-3 py-1.5 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 cursor-pointer"
          >
            <option value="">All Projects</option>
            {allTags.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
          {selectedTag && (
            <button
              onClick={() => setSelectedTag('')}
              className="text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              ✕ Clear
            </button>
          )}
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(({ title, description, tags, link, course }) => (
            <a
              key={title}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="card p-6 flex flex-col gap-3 group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors">
                  {title}
                </h3>
                <svg
                  className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>

              {course && (
                <span className="text-xs text-slate-400 font-medium">{course}</span>
              )}

              <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
