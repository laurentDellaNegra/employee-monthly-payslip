// modules import
import angular from 'angular';
import CalculatorEmployeeComponent from './calculator-employee.component';

// Upload button nested component
const calculatorEmployee = angular
  .module('calculator.employee', [])
  .component('calculatorEmployee', CalculatorEmployeeComponent)
  .name;

// export
export default calculatorEmployee;
