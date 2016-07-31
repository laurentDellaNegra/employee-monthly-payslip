// modules import
import angular from 'angular';
import UploadEmployeesComponent from './upload-employees.component';

// Upload button nested component
const uploadEmployees = angular
  .module('upload.employees', [])
  .component('uploadEmployees', UploadEmployeesComponent)
  .name;

// export
export default uploadEmployees;
