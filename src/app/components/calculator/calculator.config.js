/**
 * config of the module is an exported function
 * @param  $stateProvider       angular service
 * @param  $urlRouterProvider   angular service
 * @return void
 */
export default function config($stateProvider, $urlRouterProvider) {
  //dependency injection with ngAnnotate
  'ngInject';
  $stateProvider
    .state('calculator', {
      url: '/calculator',
      template: '<calculator></calculator>'
    });
  $urlRouterProvider.otherwise('/');
}
