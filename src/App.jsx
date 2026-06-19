import { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import About from './components/About'
import Publications from './components/Publications'
import Projects from './components/Projects'
import CV from './components/CV'
import Footer from './components/Footer'

const TABS = [
  { id: 'about',        label: 'About' },
  { id: 'publications', label: 'Publications' },
  { id: 'projects',     label: 'Projects' },
  { id: 'cv',           label: 'CV' },
]

export default function App() {
  const [activeTab, setActiveTab] = useState('about')

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 pt-24 pb-16">

        {/* Tab bar — full width above columns */}
        <div className="flex gap-2 bg-purple-100 rounded-xl p-1.5 border border-purple-200 mb-8 overflow-x-auto">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex-1 px-4 py-2.5 text-sm font-semibold rounded-lg whitespace-nowrap transition-all duration-200 ${
                activeTab === id
                  ? 'bg-purple-500 text-white shadow-md'
                  : 'text-purple-700 hover:bg-purple-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">

          {/* Persistent left sidebar */}
          <Sidebar />

          {/* Right: tab content */}
          <main className="flex-1 min-w-0">
            {activeTab === 'about'        && <About />}
            {activeTab === 'publications' && <Publications />}
            {activeTab === 'projects'     && <Projects />}
            {activeTab === 'cv'           && <CV />}
          </main>

        </div>
      </div>

      <Footer />
    </div>
  )
}
