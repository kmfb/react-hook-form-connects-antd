module.exports = {
  extends: ['react-app', 'prettier'],
  "plugins": ["@typescript-eslint"],
  rules: {
    'jsx-a11y/anchor-is-valid': ['off'],
    'import/no-anonymous-default-export': ['off'],
    'no-unused-vars': [
      'warn',
      { varsIgnorePattern: '[iI]gnored', argsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { varsIgnorePattern: '[iI]gnored', argsIgnorePattern: '^_' },
    ],
  },
};
