// config ofthe module is an exported function
export default function config($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('calculator', {
      url: '/calculator',
      template: '<calculator></calculator>'
    });
  $urlRouterProvider.otherwise('/');
}
