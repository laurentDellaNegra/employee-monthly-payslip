// modules import
import angular from 'angular';
import EmployeeValidatorService from './employee-validator.service';
import EmployeeFactoryService from './employee-factory.service';

// module definition
const employee = angular
  .module('employee', [])
  .service('EmployeeValidator', EmployeeValidatorService)
  .service('EmployeeFactory', EmployeeFactoryService)
  .name;

// export
export default employee;
