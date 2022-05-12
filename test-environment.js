const { TestEnvironment } = require('jest-environment-jsdom');

/**
 * TODO: get rid of enzyme
 * This is a workaround to get enzyme working with React 18.
 * See these issues:
 * https://github.com/enzymejs/enzyme/issues/2524
 * https://stackoverflow.com/questions/57712235/referenceerror-textencoder-is-not-defined-when-running-react-scripts-test/72109612#72109612
 */
class EnzymeTestEnvironment extends TestEnvironment {
  constructor({ globalConfig, projectConfig }, context) {
    super({ globalConfig, projectConfig }, context);
    if (typeof this.global.TextEncoder === 'undefined') {
      const { TextEncoder } = require('util');
      this.global.TextEncoder = TextEncoder;
    }
  }
}

module.exports = EnzymeTestEnvironment;
