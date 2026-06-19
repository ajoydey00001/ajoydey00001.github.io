import SectionHeader from './SectionHeader'

const SKILL_GROUPS = [
  {
    category: 'Programming Languages',
    icon: '💻',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Assembly 8086', 'Bash', 'TeX'],
  },
  {
    category: 'Frameworks & Libraries',
    icon: '🧩',
    skills: ['React', 'Spring Boot', 'Svelte', 'SvelteKit', 'Node.js', 'NumPy', 'Pandas', 'PyTorch', 'Scikit-Learn'],
  },
  {
    category: 'Web & Styling',
    icon: '🎨',
    skills: ['HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    skills: ['MySQL', 'Oracle', 'PostgreSQL'],
  },
  {
    category: 'Formal Methods & Security Tools',
    icon: '🔬',
    skills: ['ProVerif', 'nuXmv', 'Rocq Prover', 'Picinae', 'Velociraptor'],
  },
  {
    category: 'Dev Tools & Others',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'JavaFX', 'Flex', 'Bison', 'ATMega32', 'OpenGL'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <SectionHeader title="Technical Skills" />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map(({ category, icon, skills }) => (
            <div key={category} className="card p-6">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="text-xl">{icon}</span>
                <h3 className="font-semibold text-slate-700 text-sm">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
