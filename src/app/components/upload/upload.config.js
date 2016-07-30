import UploadComponent from './upload.component';

export default function config($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('upload', {
      url: '/upload',
      template: '<upload></upload>'
    });
  $urlRouterProvider.otherwise('/');
}
