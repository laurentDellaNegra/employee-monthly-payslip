// modules import
import angular from 'angular';
import PayslipFactoryService from './payslip-factory.service';
import taxTable from './tax-table.constant';

// module definition
const payslip = angular
  .module('payslip', [])
  .service('PayslipFactory', PayslipFactoryService)
  .constant('TAX_TABLE', taxTable)
  .name;

// export
export default payslip;
