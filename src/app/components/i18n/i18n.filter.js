angular
  .module('app')
  .filter('i18n', i18nFilter);

/** @ngInject */
function i18nFilter($translate) {
  return hash => hash[$translate.use()] || _(hash).values().first();
}
