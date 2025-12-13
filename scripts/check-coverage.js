const fs = require('fs')
const path = require('path')

const THRESHOLDS = {
  statements: 90,
  branches: 85,
  functions: 90,
  lines: 90,
}

function readCoverage() {
  const coveragePath = path.resolve(process.cwd(), 'coverage', 'coverage-final.json')
  if (!fs.existsSync(coveragePath)) {
    console.error('Coverage file not found; run `npm run test:coverage` first')
    process.exit(1)
  }
  const raw = fs.readFileSync(coveragePath, 'utf8')
  return JSON.parse(raw)
}

function getTotals(coverage) {
  // coverage-final.json has a top-level key 'total'
  const total = coverage.total || coverage
  return {
    statements: total.statements.pct,
    branches: total.branches.pct,
    functions: total.functions.pct,
    lines: total.lines.pct,
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
