'use strict';

const fs = require('fs');
const path = require('path');

const babelrc = fs.readFileSync(path.resolve(__dirname, '../.babelrc'));
let config;

try {
  config = JSON.parse(babelrc);
} catch (err) {
  console.error('Error parsing your .babelrc.');
  console.error(err);
}
require('babel-core/register')(config);
// require('babel-register')(config);
