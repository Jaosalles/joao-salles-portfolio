module.exports = {
  extends: ['@commitlint/config-conventional'],
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
    'scope-empty': [2, 'never'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case']
    ]
  }
};
