import angular from 'angular';
import MonthsConstant from './months.constant';

const constants = angular
  .module('constants', [])
  .constant('MONTHS_NAME', MonthsConstant)
  .name;

export default constants;
