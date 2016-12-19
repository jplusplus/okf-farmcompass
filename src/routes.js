angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'main',
      resolve: {
        meta: ($http) =>{
          'ngInject';
          return $http.get('data/meta.json').then(r => r.data);
        }
      }
    })
    .state('main.step', {
      params: {
        index: {
          value: null
        }
      }
    });
}
