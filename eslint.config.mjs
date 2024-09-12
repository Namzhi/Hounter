export default [
  {
    files: ['src/**/*.js'],
    ignores: ['**/*.config.js', '!**/eslint.config.js', '.node_modules/', '.dist/', '.build/'],

    rules: {
      indent: ['warn', 2],

      'linebreak-style': [0, 'unix'],
      quotes: ['warn', 'single'],
      semi: ['warn', 'never'],
      strict: 0,
      endOfLine: 'off',
    },
  },
]
