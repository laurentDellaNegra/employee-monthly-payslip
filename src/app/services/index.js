// modules import
import angular from 'angular';
import TimeService from './time.service';
import MonthsConstant from './months.constant';

//module definition
const services = angular
  .module('services', [])
  .service('TimeService', TimeService)
  .constant('MONTHS_NAME', MonthsConstant)
  .name;

// export
export default services;
