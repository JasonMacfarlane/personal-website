module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended',
    'plugin:vue/vue3-strongly-recommended',
    '@vue/typescript/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // Airbnb with a couple of minor tweaks
    'object-shorthand': ['error', 'always'],
    indent: ['error', 2],
    'linebreak-style': 'off',
    'eol-last': ['error', 'always'],
    'max-len': ['error', { code: 450 }],
    'space-before-function-paren': ['error', 'always'],

    'vue/html-indent': ['error', 2, {
      attribute: 1,
      closeBracket: 0,
      alignAttributesVertically: true,
      ignores: [],
    }],

    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'always',
    }],

    'vue/multi-word-component-names': 'off',
    'vue/no-template-target-blank': 'off',
    'vue/max-attributes-per-line': 1,
    'vue/no-v-html': 'off',

    // These are weird inconsistencies between eslint and typescript
    // eslint integration. Need to make some GitHub issues.
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
