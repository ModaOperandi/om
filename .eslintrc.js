module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'prettier',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    'no-loops',
    '@typescript-eslint',
    'eslint-plugin-import',
    'react-hooks',
    'jest-dom',
    'testing-library'
  ],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        argsIgnorePattern: '^_'
      }
    ],
    'no-console': 'warn',
    radix: 'error',
    'no-loops/no-loops': 'error',
    'import/order': 'error',
    'import/no-self-import': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: false
        }
      },
      {
        selector: ['method', 'accessor'],
        format: ['camelCase']
      },
      {
        selector: ['function'],
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase']
      },
      {
        selector: 'variable',
        types: ['function'],
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'property',
        format: ['camelCase', 'UPPER_CASE', 'PascalCase', 'snake_case'],
        filter: {
          regex: '^(.*[- \\[\\]/]+.*)|(__.*)|([0-9]*)$',
          match: false
        }
      },
      {
        selector: 'parameter',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'parameterProperty',
        format: ['camelCase', 'PascalCase']
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: ['typeLike', 'enumMember'],
        format: ['PascalCase']
      },
      {
        selector: 'typeParameter',
        format: ['PascalCase'],
        custom: {
          regex: '^(T.*)|([A-Z]{1,2})$',
          match: true
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-magic-numbers': 'off',
    '@typescript-eslint/no-magic-numbers': [
      'error',
      { ignore: [-1, 0, 1, 2], ignoreEnums: true, ignoreDefaultValues: true }
    ],
    '@typescript-eslint/typedef': 'off',
    '@typescript-eslint/no-namespace': ['error', { allowDeclarations: true }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/prefer-stateless-function': 'error',
    'react/jsx-boolean-value': ['error', 'never', { always: ['showWhenValueIs'] }],
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
        readonly: 'array'
      }
    ],
    'require-await': 'error',
    'no-implicit-coercion': 'error',
    'id-length': ['error', { properties: 'never', exceptions: ['_'] }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
