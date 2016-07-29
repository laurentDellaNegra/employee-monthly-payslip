import UploadComponent from './upload.component';

export default function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('upload', {
      url: '/upload',
      template: '<upload></upload>'
    });
  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
