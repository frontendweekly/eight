const path = require('path');
const d8yConfig = path.join(
  __dirname,
  './packages/stylelint-config-d8y/index.js'
);

module.exports = {
  extends: [d8yConfig],
};
