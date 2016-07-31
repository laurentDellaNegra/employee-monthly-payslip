// modules import
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMessages from 'angular-messages';
import CalculatorComponent from './calculator.component';
import config from './calculator.config';
import PayslipService from 'src/app/payslip-service';
import services from 'src/app/services';

/**
 * View Calculator
 */
const calculator = angular
  .module('calculator', [uiRouter, ngMessages, PayslipService, services])
  .component('calculator', CalculatorComponent)
  .config(config)
  .name;

//export
export default calculator;
