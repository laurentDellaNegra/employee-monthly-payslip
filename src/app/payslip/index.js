// modules import
import angular from 'angular';
import PayslipFactoryService from './payslip-factory.service';

// module definition
const payslip = angular
  .module('payslip', [])
  .service('PayslipFactory', PayslipFactoryService)
  .name;

// export
export default payslip;
