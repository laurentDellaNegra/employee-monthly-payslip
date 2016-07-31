//modules importation
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component';
import Components from './components/components';
import Common from './common/common';

//bootstrap css & js
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';

//custom style
import 'src/style/app.css';

// root module
const root = angular
  .module('app', [
    Components,
    Common,
    uiRouter,
  ])
  .component('app', AppComponent);

//Manual bootstrap app : replaces ng-app="appName"
angular.element(document).ready(function () {
  angular.bootstrap(document, ['app']);
});

export default root;
