module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:react-hooks/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error']
  },
  overrides: [
    {
      files: ['*.e2e.js'],
      env: {
        jest: true,
        'jest/globals': true
      }
    }
  ]
}
