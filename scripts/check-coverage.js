import fs from 'fs'
import path from 'path'

const THRESHOLDS = {
  statements: 90,
  branches: 85,
  functions: 90,
  lines: 90,
}

function readCoverage() {
  // Prefer coverage-summary.json when available (contains `total`)
  const summaryPath = path.resolve(process.cwd(), 'coverage', 'coverage-summary.json')
  const finalPath = path.resolve(process.cwd(), 'coverage', 'coverage-final.json')

  if (fs.existsSync(summaryPath)) {
    const raw = fs.readFileSync(summaryPath, 'utf8')
    return JSON.parse(raw)
  }
  if (fs.existsSync(finalPath)) {
    const raw = fs.readFileSync(finalPath, 'utf8')
    return JSON.parse(raw)
  }

  console.error('Coverage file not found; run `npm run test:coverage` first')
  process.exit(1)
}

function getTotals(coverage) {
  // If a top-level `total` key exists (as in coverage-summary.json), use it directly.
  if (coverage && coverage.total) {
    const total = coverage.total
    return {
      statements: total.statements.pct,
      branches: total.branches.pct,
      functions: total.functions.pct,
      lines: total.lines.pct,
    }
  }

  // Otherwise, aggregate from per-file Istanbul JSON (coverage-final.json format)
  const acc = {
    statements: { covered: 0, total: 0 },
    branches: { covered: 0, total: 0 },
    functions: { covered: 0, total: 0 },
    lines: { covered: 0, total: 0 },
  }

  for (const file of Object.keys(coverage || {})) {
    const data = coverage[file]
    if (!data) continue
    // Each of these has shape { total, covered, skipped, pct }
    for (const key of ['statements', 'branches', 'functions', 'lines']) {
      const s = data[key]
      if (s && typeof s.total === 'number' && typeof s.covered === 'number') {
        acc[key].total += s.total
        acc[key].covered += s.covered
      }
    }
  }

  function pct(covered, total) {
    if (!total || total === 0) return 100
    return (covered / total) * 100
  }

  return {
    statements: pct(acc.statements.covered, acc.statements.total),
    branches: pct(acc.branches.covered, acc.branches.total),
    functions: pct(acc.functions.covered, acc.functions.total),
    lines: pct(acc.lines.covered, acc.lines.total),
  }
}

function main() {
  const coverage = readCoverage()
  const totals = getTotals(coverage)
  console.log('Coverage totals', totals)
  let ok = true
  for (const key of Object.keys(THRESHOLDS)) {
    const actual = totals[key]
    const expected = THRESHOLDS[key]
    if (actual < expected) {
      console.error(`Coverage for ${key} (${actual}%) is below threshold (${expected}%)`)
      ok = false
    }
  }
  if (!ok) process.exit(2)
}

main()
