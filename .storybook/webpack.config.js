const IgnoreNotFoundExportPlugin = require("ignore-not-found-export-webpack-plugin");
const baseConfig = require("../webpack.config");

module.exports = ({ config }) => {
  config.resolve.extensions.push(...baseConfig.resolve.extensions);

  config.resolve.alias = {
    ...config.resolve.alias,
    ...baseConfig.resolve.alias
  };

  config.module.rules.push(...baseConfig.module.rules);

  config.plugins.push(
    ...[
      // Webpack doesn't export type definitions so any types we choose to export
      // which are actually built using `tsc` can be ignored in this webpack configuration
      new IgnoreNotFoundExportPlugin()
    ]
  );
  return config;
};
