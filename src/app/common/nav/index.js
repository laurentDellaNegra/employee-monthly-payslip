// modules import
import angular from 'angular';
import NavComponent from './nav.component';

// module creation
const nav = angular
  .module('nav', [])
  .component('nav', NavComponent)
  .name;

// export
export default nav;
