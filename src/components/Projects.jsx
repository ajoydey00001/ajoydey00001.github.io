import { useState } from 'react'
import SectionHeader from './SectionHeader'

const PROJECTS = [
  {
    title: 'Encrypted File System',
    description:
      'Designed a simulated version of Encrypted File System (EFS) using AES encryption. Implemented file encryption/decryption, key management, and access control to ensure data confidentiality and integrity.',
    tags: ['Network Security', 'Cryptography', 'Python'],
    link: 'https://github.com/JohoraAva/CS6324-Information-Security/tree/main/Assignment-01',
    course: 'CS 6324',
  },
  {
    title: 'Secure Relay-Based Chat System',
    description:
      'Designed a relay-based communication system ensuring confidentiality, integrity, and authentication. Addressed replay attacks, message tampering, and forward secrecy using a keyed-hash-based encryption scheme.',
    tags: ['Network Security', 'Cryptography', 'Python'],
    link: 'https://github.com/JohoraAva/CS-6349-Network-Security',
    course: 'CS 6349',
  },
  {
    title: 'PixelShare',
    description:
      'A Svelte-based media-sharing platform with group uploads and efficient tag-based search powered by the CLIP model. Three-person team project.',
    tags: ['Svelte', 'SvelteKit', 'Machine Learning'],
    link: 'https://github.com/risenfromashes/pixelshare',
    course: 'CSE 408',
  },
  {
    title: 'Kidney Anomaly Detection',
    description:
      'Deep learning system to detect kidney anomalies by merging predictions from multiple CNN models for enhanced accuracy.',
    tags: ['PyTorch', 'Deep Learning', 'Computer Vision'],
    link: 'https://github.com/JohoraAva/ML-Project',
    course: 'CSE 472',
  },
  {
    title: 'Compiler Design',
    description:
      'Partial C compiler using C++. Utilized Lex and Yacc for lexical analysis and parsing, with a backend targeting Intel 8086 assembly.',
    tags: ['C++', 'Lex', 'Yacc', 'Assembly 8086'],
    link: 'https://github.com/JohoraAva/CSE-310-Compiler-Sessional',
    course: 'CSE 310',
  },
  {
    title: 'Securus Domas',
    description:
      'Automated Home & Security system with Bluetooth-controlled access, gas/flame alerts via Telegram, intruder detection, and automated subsystems.',
    tags: ['ATMega32', 'IoT', 'Embedded Systems'],
    link: 'https://youtu.be/O2aVEYXrsXY?si=5vfjqRPYSswEIqL-',
    course: 'CSE 316',
  },
  {
    title: "Sherlock's Eye",
    description:
      'A Case Management System with real-time tracking and secure communication, built using Node.js and HTML/CSS.',
    tags: ['Node.js', 'HTML/CSS'],
    link: 'https://github.com/JohoraAva/Sherlocks-Eye-Project-2-2',
    course: 'CSE 216',
  },
  {
    title: 'Football Player Database System',
    description:
      'Manages players, clubs, and transfers using JavaFX and a server-client model. Solo project.',
    tags: ['Java', 'JavaFX', 'Socket-Programming'],
    link: 'https://github.com/JohoraAva/CSE-108-Object-Oriented-Programming-Language-/tree/main/Term%20Project-2/1905022',
    course: 'CSE 108',
  },
  {
    title: 'Velociraptor Analysis',
    description:
      'In-depth exploration of the Velociraptor digital forensics and incident response tool, with comprehensive findings report.',
    tags: ['Security', 'Velociraptor'],
    link: 'https://github.com/JohoraAva/CSE-406-Computer-Security-Sessional/tree/main/Velociraptor(Project%20Report)',
    course: 'CSE 406',
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
