module.exports = {
  moduleNameMapper: { '\\.(scss)$': 'identity-obj-proxy' },
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/enzyme.config.js'],
  testEnvironment: 'node'
};
