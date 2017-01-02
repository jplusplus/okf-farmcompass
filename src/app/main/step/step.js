class MainStepController {
  constructor($stateParams, $translate, $state, $scope, hotkeys, $sce) {
    'ngInject';
    angular.extend(this, {$state, $scope, $sce});
    // Initialize
    this.uiOnParamsChanged($stateParams);
    // Copy translate's use method
    this.use = $translate.use;
    // Bind local method to this
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.current = this.current.bind(this);
    this.isFirst = this.isFirst.bind(this);
    this.isLast = this.isLast.bind(this);
    this.progress = this.progress.bind(this);
    this.current = this.current.bind(this);
    // Bind hot keys
    hotkeys.add({combo: ['left'], callback: this.previous});
    hotkeys.add({combo: ['space', 'right'], callback: this.next});
  }
  get step() {
    return this._step;
  }
  uiOnParamsChanged(params) {
    this._step = Number(params.index || 0);
  }
  next() {
    if (this.isLast()) {
      this.$state.go('main.step.outro');
    } else {
      this.$state.go('main.step', {index: this.step + 1});
    }
  }
  previous() {
    if (this.isOutro()) {
      this.$state.go('main.step');
    } else if (this.isFirst()) {
      this.$state.go('main');
    } else if (this.step > 0) {
      this.$state.go('main.step', {index: this.step - 1});
    }
  }
  isFirst() {
    return this.step === 0;
  }
  isLast() {
    return this.step === this.meta.length - 1;
  }
  isOutro() {
    return this.$state.is('main.step.outro');
  }
  current() {
    return this.meta[this.step];
  }
  progress() {
    return (this.step + this.isOutro()) / this.meta.length * 100;
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
