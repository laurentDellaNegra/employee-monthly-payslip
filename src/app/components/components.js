// modules import
import angular from 'angular';
import Upload from './upload';
import Calculator from './calculator';

// Build the components module
const components = angular
  .module('app.components', [
    Upload,
    Calculator,
  ])
  .name;

// export
export default components;
