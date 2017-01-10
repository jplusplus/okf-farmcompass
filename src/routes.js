angular
  .module('app')
  .config(routesConfig)
  .run(gaRun);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(false);
  $urlRouterProvider.otherwise('/en_BE');

  $stateProvider
    .state('main', {
      url: '/:language',
      component: 'main',
      resolve: {
        use: ($translate, $stateParams) => {
          'ngInject';
          return $translate.use($stateParams.language);
        }
      }
    })
    .state('main.about', {
      component: 'main.about',
      url: '/about'
    })
    .state('main.step', {
      component: 'main.step',
      // url: 'playing/:index',
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
      //url: '/outro'
    });
}

/** @ngInject */
function gaRun($transitions, $window, $location) {
  // Redirect to login if route requires auth and you're not logged in
  $transitions.onSuccess({}, function(transition, state) {
    const identifier = transition.targetState().identifier();
    // Build parameters string
    const uri = _.reduce(transition.targetState().params(), (uri, value, key)=> {
      return uri.addQueryParam(key, value);
    }, new Uri($location.url()));
    // Send 'pageview' to Google Analytics
    $window.ga('send', 'pageview', {
      name: identifier.name || identifier,
      page: uri.toString()
    });
  });
}
