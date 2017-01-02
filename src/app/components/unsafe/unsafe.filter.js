angular
  .module('app')
  .filter('unsafe', unsafeFilter);

/** @ngInject */
function unsafeFilter($sce) {
  return $sce.trustAsHtml;
}
