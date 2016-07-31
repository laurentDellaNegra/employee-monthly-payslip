// modules import
import angular from 'angular';

/**
 * Calculator controller
 */
class CalculatorController {

  /**
   * Calculator controller constructor
   * @param PayslipService  service called when you compute employee's data
   */
  constructor(PayslipService, TimeService) {
    //dependency injection with ngAnnotate
    'ngInject';
    this.payslipService = PayslipService;
    this.timeService = TimeService;
  }

  /**
   * Launch the computation
   * @return void Update the view model payslip
   */
  compute(employeeVM) {
    // we create a copy of the object model before send it
    const employeeCopy = angular.copy(employeeVM);
    // we convert the date into a string of type "01 March – 31 March"
    employeeCopy.startDate = this.timeService.convertDateToString(employeeVM.startDate);
    // we launch the computation
    const payslip = this.payslipService.getPayslip(employeeCopy);
    // refresh view model
    this.status = payslip.status;
    this.payslipVM = payslip.data;
  }
}

export default CalculatorController;
