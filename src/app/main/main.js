class MainController {
  constructor($stateParams, $scope) {
    'ngInject';
    angular.extend(this, { $stateParams, $scope });
  }
  $onInit() {
  }
  current() {
    return this.meta[ this.$stateParams.index || 0 ]
  }
}

angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController,
    bindings: {
      meta: '<'
    }
  });
