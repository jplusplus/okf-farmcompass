angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/en_BE/');

  $stateProvider
    .state('main', {
      url: '/:language/',
      component: 'main',
      resolve: {
        use: ($translate, $stateParams) => {
          'ngInject';
          return $translate.use($stateParams.language);
        }
      }
    })
    .state('main.step', {
      component: 'main.step',
      url: 'playing/:index',
      params: {
        index: {
          value: null,
          dynamic: true
        }
      },
      resolve: {
        meta: $http => {
          'ngInject';
          return $http.get('data/meta.json', {cache: true}).then(r => r.data);
        }
      }
    })
    .state('main.step.outro', {
      url: '/outro'
    });
}
