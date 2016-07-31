// modules import
import angular from 'angular';

/**
 * Calculator employee controller
 */
class CalculatorEmployeeController {

  constructor() {
    // employee from the view model
    this.employeeVM = {
      firstName: 'Laurent',
      lastName: 'Della-Negra',
      annualSalary: 60050,
      superRate: 9,
      startDate: new Date('03/01/2016')
    };
  }

  compute() {
    this.onCompute({ employeeVM: this.employeeVM });
  }
}

export default CalculatorEmployeeController;
