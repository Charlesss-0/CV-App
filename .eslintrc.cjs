module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react', 'react-hooks', 'react-refresh'],
  rules: {
    'react/prop-types': 'off', // Enable prop-types rule
    'react/display-name': 'off', // Disable display-name rule
    'react/jsx-key': 'warn', // Warn about missing keys in JSX elements
    'react/jsx-no-undef': 'warn', // Disallow undeclared variables in JSX
    'react/jsx-no-useless-fragment': 'warn', // Warn about unnecessary fragments
    'react-hooks/rules-of-hooks': 'error', // Enforce rules of hooks
    'react-hooks/exhaustive-deps': 'warn', // Warn about missing dependencies in useEffect
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true }
    ]
  }
}
