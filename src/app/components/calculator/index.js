// modules import
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import CalculatorComponent from './calculator.component';
import config from './calculator.config';
import services from 'src/app/services';
import CalculatorPayslipComponent from './calculator-payslip';
import CalculatorEmployeeComponent from './calculator-employee';

/**
 * View Calculator
 */
const calculator = angular
  .module('calculator', [
    uiRouter,
    ngMessages,
    services,
    CalculatorPayslipComponent,
    CalculatorEmployeeComponent
  ])
  .component('calculator', CalculatorComponent)
  .config(config)
  .name;

//export
export default calculator;
