module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-typescript'],
  overrides: [
    {
      test: /\.(jsx|tsx)$/,
      presets: ['@babel/preset-react']
    }
  ]
};
