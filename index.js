const path = require('path');
const partials = require('hof-template-partials');

const partialsTranslations = path.join(path.dirname(require.resolve('hof-template-partials')), 'translations');

module.exports = {
  views: [path.resolve(__dirname, 'views'), partials.views],
  translations: [path.resolve(__dirname, 'translations'), partialsTranslations]
};
