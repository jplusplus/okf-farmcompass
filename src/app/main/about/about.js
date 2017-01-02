class MainAboutController {
  constructor() {
    'ngInject';
  }
}

angular
  .module('app')
  .component('main.about', {
    templateUrl: 'app/main/about/about.html',
    controller: MainAboutController
  });
