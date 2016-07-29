import angular from 'angular';
import EmployeeFactoryService from './employee-factory.service';
import Constants from '../constants';

const employee = angular
  .module('employee', [Constants])
  .service('EmployeeFactory', EmployeeFactoryService)
  .name;

export default employee;
