import angular from 'angular';
import PayslipFactoryService from './payslip-factory.service';

const payslip = angular
  .module('payslip', [])
  .service('PayslipFactory', PayslipFactoryService)
  .name;

export default payslip;
