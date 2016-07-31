// modules import
import angular from 'angular';
import EmployeeValidatorService from './employee-validator.service';
import EmployeeFactoryService from './employee-factory.service';
import Constants from 'src/app/constants';

// module definition
const employee = angular
  .module('employee', [Constants])
  .service('EmployeeValidator', EmployeeValidatorService)
  .service('EmployeeFactory', EmployeeFactoryService)
  .name;

// export
export default employee;
