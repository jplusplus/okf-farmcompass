class MainStepController {
  constructor($stateParams, $state, $scope, hotkeys, $sce) {
    'ngInject';
    angular.extend(this, {$state, $scope, $sce});
    // Initialize
    this.uiOnParamsChanged($stateParams);
    // Bind local method to this
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.current = this.current.bind(this);
    this.isFirst = this.isFirst.bind(this);
    this.isLast = this.isLast.bind(this);
    this.progress = this.progress.bind(this);
    this.current = this.current.bind(this);
    // Bind hot keys
    hotkeys.add({combo: ['left', 'p'], callback: this.previous});
    hotkeys.add({combo: ['space', 'right', 'n'], callback: this.next});
  }
  get step() {
    return this._step;
  }
  uiOnParamsChanged(params) {
    this._step = Number(params.index || 0);
  }
  next() {
    if (this.step < this.meta.length - 1) {
      this.$state.go('main.step', {index: this.step + 1});
    }
  }
  previous() {
    if (this.step > 0) {
      this.$state.go('main.step', {index: this.step - 1});
    }
  }
  isFirst() {
    return this.step === 0;
  }
  isLast() {
    return this.step === this.meta.length - 1;
  }
  current() {
    return this.meta[this.step];
  }
  progress() {
    return this.step / (this.meta.length - 1) * 100;
  }
  trustAs(type = 'HTML', value) {
    return this.$sce.trustAs(this.$sce[type], value);
  }
}

angular
  .module('app')
  .component('main.step', {
    templateUrl: 'app/main/step/step.html',
    controller: MainStepController,
    bindings: {
      meta: '<'
    }
  });
