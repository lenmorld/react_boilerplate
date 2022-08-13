module.exports = {
    env: {
      browser: true,
    },
    extends: [
      'plugin:react/recommended',
      'airbnb',
      'plugin:prettier/recommended',
      'plugin:react-hooks/recommended',
    ],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: ['react', 'prettier'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': 'off',
      'react/prop-types': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/no-danger': 'off',
      'react/no-unescaped-entities': 'off',
      // "arrow-parens": ["error", "as-needed"],
    },
  }
  