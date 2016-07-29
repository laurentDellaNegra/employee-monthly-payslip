import angular from 'angular';
import Upload from './upload';
import Calculator from './calculator';

const components = angular
  .module('app.components', [
    Upload,
    Calculator,
  ])
  .name;

export default components;
