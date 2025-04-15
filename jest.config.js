module.exports = {
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '@moda/icons': '<rootDir>/src/__mocks__/Icon.tsx'
  },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx|mjs)?$': 'babel-jest'
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!(color-string|color-name)/)']
};
