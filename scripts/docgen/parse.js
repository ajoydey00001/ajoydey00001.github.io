// Per-file extraction. Regex-based, not an AST parser — good enough for this
// codebase's plain function-component style, not a general JS/JSX parser.

export function extractFileDescription(source) {
  const match = source.match(/^\s*\/\*\*([\s\S]*?)\*\//)
  if (!match) return null
  return match[1]
    .split('\n')
    .map(line => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)
    .join(' ')
}

export function extractImports(source) {
  const imports = []
  const re = /import\s+(.+?)\s+from\s+['"](.+?)['"]/g
  let m
  while ((m = re.exec(source))) {
    imports.push({ clause: m[1].trim(), source: m[2] })
  }
  return imports
}

export function parseProps(paramStr) {
  const trimmed = paramStr.trim()
  if (!trimmed) return { names: [], destructured: false }
  const destructureMatch = trimmed.match(/^\{([\s\S]*)\}$/)
  if (!destructureMatch) {
    return { names: [trimmed.split(/\s*=\s*/)[0]], destructured: false }
  }
  const names = destructureMatch[1]
    .split(',')
    .map(p => p.trim())
    .filter(Boolean)
    .map(p => p.split('=')[0].split(':')[0].trim())
  return { names, destructured: true }
}

export function extractComponents(source) {
  const components = []
  const seen = new Set()

  const patterns = [
    { re: /export\s+default\s+function\s+(\w+)\s*\(([^)]*)\)/g, exported: true },
    { re: /export\s+function\s+(\w+)\s*\(([^)]*)\)/g, exported: true },
    { re: /export\s+const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>/g, exported: true },
    { re: /(?:^|\n)\s*function\s+(\w+)\s*\(([^)]*)\)/g, exported: false },
    { re: /(?:^|\n)\s*const\s+(\w+)\s*=\s*\(([^)]*)\)\s*=>/g, exported: false },
  ]

  for (const { re, exported } of patterns) {
    let m
    while ((m = re.exec(source))) {
      const [, name, params] = m
      if (seen.has(name)) continue
      seen.add(name)
      components.push({ name, props: parseProps(params), exported })
    }
  }
  return components
}

export function extractDataConstants(source) {
  const consts = []
  const re = /(?:^|\n)const\s+([A-Z][A-Z0-9_]*)\s*=/g
  let m
  while ((m = re.exec(source))) {
    consts.push(m[1])
  }
  return consts
}

export function extractSectionId(source) {
  const match = source.match(/\bid=["']([\w-]+)["']/)
  return match ? match[1] : null
}
