// modules import
import angular from 'angular';
import Nav from './nav';

// module creation: include all submodules
const common = angular
  .module('app.common', [
    Nav,
  ])
  .name;

// export
export default common;
