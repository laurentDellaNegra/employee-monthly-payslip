/**
 * config of the module is an exported function
 * @param  $stateProvider       angular service
 * @param  $urlRouterProvider   angular service
 * @return void
 */
export default function config($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('upload', {
      url: '/upload',
      template: '<upload></upload>'
    });
  $urlRouterProvider.otherwise('/');
}
