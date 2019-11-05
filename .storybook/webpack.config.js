const baseConfig = require("../webpack.config");

module.exports = ({ config }) => {
  config.resolve.extensions.push(...baseConfig.resolve.extensions);
  config.module.rules.push(...baseConfig.module.rules);
  return config;
};
