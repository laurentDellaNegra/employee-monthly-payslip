// modules import
import angular from 'angular';
import TimeService from './time.service';
import PayslipService from './payslip.service';
import MonthsConstant from './months.constant';
import payslip from 'src/app/payslip';
import employee from 'src/app/employee';

//module definition
const services = angular
  .module('services', [payslip, employee])
  .service('TimeService', TimeService)
  .service('PayslipService', PayslipService)
  .constant('MONTHS_NAME', MonthsConstant)
  .name;

// export
export default services;
