module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write', 'jest --findRelatedTests'],
  '*.{scss}': ['prettier --write']
};
