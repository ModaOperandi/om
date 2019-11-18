module.exports = {
  moduleNameMapper: {
    '\\.(scss)$': 'identity-obj-proxy',
    '@moda/icons': '<rootDir>/src/__mocks__/Icon.tsx'
  },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'node'
};
