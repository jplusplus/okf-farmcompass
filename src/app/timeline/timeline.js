function timeline() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    link: (scope, element, attrs) => {
    }
  };
}

angular
  .module('app')
  .directive('timeline', timeline);
