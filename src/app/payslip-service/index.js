// modules import
import angular from 'angular';
import PayslipService from './payslip.service';
import Employee from 'src/app/employee';
import Payslip from 'src/app/payslip';

//module definition
const payslipService = angular
  .module('payslipService', [Employee, Payslip])
  .service('PayslipService', PayslipService)
  .name;

// export
export default payslipService;
