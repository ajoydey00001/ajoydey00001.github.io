export default function SectionHeader({ title, subtitle }) {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      <div className="section-accent-line" />
      {subtitle && (
        <p className="mt-4 text-slate-500 max-w-2xl leading-relaxed">{subtitle}</p>
      )}
    </div>
  )
}
