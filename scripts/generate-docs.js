#!/usr/bin/env node
// Reads .js/.jsx files under src/ and generates per-file markdown docs plus an
// index README. Run with `npm run docs`; re-run after source changes to refresh.
//
// Orchestrator only — extraction lives in docgen/parse.js, reachability
// analysis in docgen/graph.js, markdown rendering in docgen/render.js.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { extractFileDescription, extractImports, extractComponents, extractDataConstants, extractSectionId } from './docgen/parse.js'
import { buildGraph } from './docgen/graph.js'
import { renderFileDoc, renderIndex } from './docgen/render.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const SRC_DIR = path.join(ROOT, 'src')
const DOCS_DIR = path.join(ROOT, 'docs')
const ENTRY_FILE = path.join(SRC_DIR, 'main.jsx')

function walk(dir) {
  const results = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      results.push(...walk(full))
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      results.push(full)
    }
  }
  return results
}

function main() {
  const files = walk(SRC_DIR)
  const parsedFiles = new Map()

  for (const filePath of files) {
    const source = fs.readFileSync(filePath, 'utf-8')
    parsedFiles.set(filePath, {
      description: extractFileDescription(source),
      imports: extractImports(source),
      components: extractComponents(source),
      dataConstants: extractDataConstants(source),
      sectionId: extractSectionId(source),
    })
  }

  const graph = buildGraph(parsedFiles, ENTRY_FILE)

  const entries = []
  for (const [filePath, data] of parsedFiles) {
    const rel = path.relative(ROOT, filePath)
    const graphInfo = graph.get(filePath)
    const entry = { rel, ...data, reachable: graphInfo.reachable, importedBy: graphInfo.importedBy }
    entries.push(entry)

    const md = renderFileDoc({ ...entry, root: ROOT })
    const outPath = path.join(DOCS_DIR, `${rel}.md`)
    fs.mkdirSync(path.dirname(outPath), { recursive: true })
    fs.writeFileSync(outPath, md)
  }

  fs.writeFileSync(path.join(DOCS_DIR, 'README.md'), renderIndex(entries))

  console.log(`Generated docs for ${entries.length} file(s) in ${path.relative(ROOT, DOCS_DIR)}/`)
}

main()
