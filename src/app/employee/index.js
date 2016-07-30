import angular from 'angular';
import EmployeeValidatorService from './employee-validator.service';
import Constants from 'src/app/constants';

const employee = angular
  .module('employee', [Constants])
  .service('EmployeeValidator', EmployeeValidatorService)
  .name;

export default employee;
