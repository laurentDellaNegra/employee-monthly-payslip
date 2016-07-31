// modules import
import angular from 'angular';
import CalculatorPayslipComponent from './calculator-payslip.component';

// Upload button nested component
const calculatorPayslip = angular
  .module('calculator.payslip', [])
  .component('calculatorPayslip', CalculatorPayslipComponent)
  .name;

// export
export default calculatorPayslip;
