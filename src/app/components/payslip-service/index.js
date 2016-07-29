import angular from 'angular';
import PayslipService from './payslip.service';
import Employee from '../employee';
import Payslip from '../payslip';

const payslipService = angular
  .module('payslipService', [Employee, Payslip])
  .service('PayslipService', PayslipService)
  .name;

export default payslipService;
