class MainController {
  constructor($stateParams, $state, $scope) {
    'ngInject';
    angular.extend(this, { $state, $scope });
    // Initialize
    this.uiOnParamsChanged($stateParams);
    // Bind local method to this
    this.next = this.next.bind(this);
    this.current = this.current.bind(this);
  }
  get step() {
    return this._step;
  }
  uiOnParamsChanged(params) {
    this._step = 1 * (params.index || 0);
  }
  next() {
    if(this.step < this.meta.length - 1) {
      this.$state.go('main.step', { index: this.step + 1 })
    }
  }
  current() {
    return this.meta[this.step];
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
