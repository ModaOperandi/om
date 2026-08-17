// Replaces the unmaintained `ignore-not-found-export-webpack-plugin`, whose only functionality
// is filtering out "export was not found" warnings — its `require('webpack/lib/ModuleDependencyWarning')`
// deep-import breaks on newer webpack 5 versions, where that module moved under `lib/errors/`.
// Matching on `constructor.name` avoids importing the class at all.
const EXPORT_NOT_FOUND = /export.*was not found in/;

module.exports = class IgnoreNotFoundExportWarningsPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('IgnoreNotFoundExportWarningsPlugin', stats => {
      stats.compilation.warnings = stats.compilation.warnings.filter(
        warning =>
          !(warning.constructor.name === 'ModuleDependencyWarning' && EXPORT_NOT_FOUND.test(warning.message))
      );
    });
  }
};
