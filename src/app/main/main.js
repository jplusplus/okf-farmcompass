class MainController {
  constructor() {
    this.text = 'Vegetables in tons';
  }
}

angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
