//Router component
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import CalculatorComponent from './calculator.component';
import config from './calculator.config';
import PayslipService from 'src/app/payslip-service';
import Employee from 'src/app/employee';

const calculator = angular
  .module('calculator', [uiRouter, ngMessages, PayslipService])
  .component('calculator', CalculatorComponent)
  .config(config)
  .name;

export default calculator;
