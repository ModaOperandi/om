module.exports = {
  presets: [
    '@babel/preset-env',
    // Babel 8 defaults onlyRemoveTypeImports to true, so it only
    // elides `import type {...}` and stops auto-detecting plain
    // `import {...}` of type-only bindings, which can leave imports
    // of type-only modules in the compiled output.
    ['@babel/preset-typescript', { onlyRemoveTypeImports: false }]
  ],
  overrides: [
    {
      test: /\.(jsx|tsx)$/,
      presets: ['@babel/preset-react']
    }
  ]
};
