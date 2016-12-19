angular
  .module('app')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'main',
      resolve: {
        meta: ($http) =>{
          'ngInject';
          return $http.get('data/meta.json').then(r => r.data);
        },
        data: (meta, $http, $q) =>{
          'ngInject';
          // Create an object where every key is a request
          let targets = meta.reduce( function(hash, step){
            hash[step.slug] = $http.get(step.filename).then(r => r.data);
            return hash;
          }, {});
          return $q.all(targets);
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
