class MainController {
  constructor() {
    'ngInject';
    // Default options for the video
    this.playerVars = { controls: 0, autoplay: 1 };
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
