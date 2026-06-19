export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <img
            src="/img/profile_pic.jpg"
            alt="Ajoy Dey"
            className="w-8 h-8 rounded-full object-cover ring-2 ring-blue-400/60"
          />
          <span className="font-semibold text-sm tracking-wide text-slate-800">Ajoy Dey</span>
        </a>

        <div className="flex items-center gap-3">
          <a href="https://pathao.com/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-slate-600 hover:text-blue-600">
            Pathao
          </a>
          <a href="https://cse.buet.ac.bd/" target="_blank" rel="noreferrer" className="text-xs font-semibold text-slate-600 hover:text-blue-600">
            BUET CSE
          </a>
        </div>
      </div>
    </header>
  )
}
