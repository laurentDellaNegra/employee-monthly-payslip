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

    //Test data
    // employee from the view model
    this.employeeVM = {
      firstName: 'Laurent',
      lastName: 'Della-Negra',
      annualSalary: 60050,
      superRate: 9,
      startDate: new Date('03/01/2016')
    };
  }

  /**
   * Launch the computation
   * @return void Update the view model payslip
   */
  compute() {
    // we create acopy ofthe object model before sending
    const employeeCopy = angular.copy(this.employeeVM);
    // we convert the date into a string of type "01 March – 31 March"
    employeeCopy.startDate = this.timeService.convertDateToString(this.employeeVM.startDate);
    const payslip = this.payslipService.getPayslip(employeeCopy);
    this.status = payslip.status;
    this.payslipVM = payslip.data;
  }
}

export default CalculatorController;
