module.exports = {
  linters: {
    "**/*.+(js|md|json)": ["prettier --write", "eslint .", "git add"]
  }
};
