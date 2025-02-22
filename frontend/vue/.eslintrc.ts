module.exports = {
  extends: [
    '../../.eslintrc.js',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-vars': 'error',
    'vue/script-setup-uses-vars': 'error',
    'vue/no-mutating-props': 'error',
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
}
