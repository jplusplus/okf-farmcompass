function timeline() {
  return {
    restrict: 'E',
    scope: {
      meta: '='
    },
    link: (scope, element, attrs) => {
    }
  };
}

angular
  .module('app')
  .directive('timeline', timeline);
