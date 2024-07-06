module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true,
  },
  parserOptions: {
    'ecmaVersion': 2023,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'import/extensions': [
      'error',
      'always',
    ],
    'vue/multi-word-component-names': ['warn'],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'max-len': 'off',
    'vue/max-len': [
      'error',
      {
        code: 120,
        template: 180,
        tabWidth: 2,
        comments: 180,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'vue/v-on-event-hyphenation': [
      'error',
      'always',
      {
        autofix: true,
        ignore: ['modelValue'],
      },
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'key-spacing': ['error', { afterColon: true }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': ['error', { int32Hint: false }],
    'keyword-spacing': ['error', { before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'quotes': ['error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  overrides: [
    {
      files: ['**/*.{test,spec}.js'],
      env: {
        jest: true,
      },
    },
  ],
};
