class MainController {
  constructor($http) {
    'ngInject';
    // Preload meta for the next step
    $http.get('data/meta.json', {cache: true}).then(r => r.data);
  }
}

angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
