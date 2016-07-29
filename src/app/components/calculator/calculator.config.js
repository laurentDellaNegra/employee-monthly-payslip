//import CalculatorComponent from './calculator.component';

export default function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('calculator', {
      url: '/calculator',
      template: '<calculator></calculator>'
    });
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
