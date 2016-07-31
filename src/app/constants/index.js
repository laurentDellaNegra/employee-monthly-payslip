// modules import
import angular from 'angular';
import MonthsConstant from './months.constant';
import TaxTableConstant from './tax-table.constant';

// module definition
const constants = angular
  .module('constants', [])
  .constant('MONTHS_NAME', MonthsConstant)
  .constant('TAX_TABLE', TaxTableConstant)
  .name;

// export
export default constants;
