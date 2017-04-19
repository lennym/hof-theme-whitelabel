const path = require('path');
const partials = require('hof-template-partials');
const merge = require('lodash').merge;
const compile = require('./lib/compile');

module.exports = () => {
  return (req, res, next) => {
    next();
  };
};

module.exports.views = [path.resolve(__dirname, 'views'), partials.views];
module.exports.translations = merge(partials.resources(), compile(path.resolve(__dirname, 'translations/src')));
