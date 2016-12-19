class MainController {
  constructor($stateParams) {
    'ngInject';
    angular.extend(this, { $stateParams });
  }
  $onInit() {
    console.log(this.meta);
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
      meta: '<',
      data: '<'
    }
  });
