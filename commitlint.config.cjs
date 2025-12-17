module.exports = {
  extends: ['@commitlint/config-conventional'],
  defaultIgnores: true,
  ignores: [(message) => message.startsWith('Merge ')],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'deps'
      ]
    ],
    'scope-enum': [
      2,
      'always',
      [
        'components',
        'hooks',
        'pages',
        'lib',
        'utils',
        'styles',
        'config',
        'e2e',
        'tests',
        'docs',
        'deps',
        'ci'
      ]
    ],
    // Permite commits sem escopo (evita falhas em histórico/PRs externos)
    'scope-empty': [0],
    // Não força casing do assunto (usa padrão do preset convencional)
    'subject-case': [0]
  }
};
