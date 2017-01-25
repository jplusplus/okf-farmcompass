class MainController {
  constructor($http, $translate, tmhDynamicLocale) {
    'ngInject';
    // Preload meta for the next step
    $http.get('data/meta.json', {cache: true}).then(r => r.data);
    // Change locale once
    tmhDynamicLocale.set($translate.use().slice(0, 2));
    // Get all links markup
    const links = angular.element(`head link[type='text/css']`);
    // Current stylesheet
    const currentLink = links.filter(`[title='index@${$translate.use()}']`);
    // Load the right stylesheet
    links.not(currentLink).prop('disabled', true);
    currentLink.prop('disabled', false);
  }
}

angular
  .module('app')
  .component('main', {
    templateUrl: 'app/main/main.html',
    controller: MainController
  });
