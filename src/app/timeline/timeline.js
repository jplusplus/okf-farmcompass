function timeline() {
  return {
    restrict: 'E',
    scope: {
      data: '='
    },
    link: (scope, element, attrs) => {
      console.log(scope.data)
    }
  };
}

angular
  .module('app')
  .directive('timeline', timeline);
