// Resolves relative import specifiers to files on disk and builds a reachability
// graph from an entry point, so the generator can tell live code from dead code.

import fs from 'node:fs'
import path from 'node:path'

const EXTENSIONS = ['.jsx', '.js', '.tsx', '.ts']

function resolveImport(fromFile, specifier) {
  if (!specifier.startsWith('.')) return null // external package, not part of the graph
  const base = path.resolve(path.dirname(fromFile), specifier)
  if (fs.existsSync(base) && fs.statSync(base).isFile()) return base
  for (const ext of EXTENSIONS) {
    if (fs.existsSync(base + ext)) return base + ext
  }
  return null
}

// parsedFiles: Map<absolutePath, { imports: [{ source }] }>
export function buildGraph(parsedFiles, entryFile) {
  const importedBy = new Map()
  for (const file of parsedFiles.keys()) importedBy.set(file, new Set())

  for (const [file, data] of parsedFiles) {
    for (const imp of data.imports) {
      const resolved = resolveImport(file, imp.source)
      if (resolved && importedBy.has(resolved)) {
        importedBy.get(resolved).add(file)
      }
    }
  }

  const reachable = new Set()
  const queue = [entryFile]
  while (queue.length) {
    const current = queue.shift()
    if (reachable.has(current)) continue
    reachable.add(current)
    const data = parsedFiles.get(current)
    if (!data) continue
    for (const imp of data.imports) {
      const resolved = resolveImport(current, imp.source)
      if (resolved && parsedFiles.has(resolved) && !reachable.has(resolved)) {
        queue.push(resolved)
      }
    }
  }

  const result = new Map()
  for (const file of parsedFiles.keys()) {
    result.set(file, {
      reachable: reachable.has(file),
      importedBy: [...importedBy.get(file)],
    })
  }
  return result
}
