import angular from 'angular';

class CalculatorController {
  
  constructor(PayslipService) {
    'ngInject';
    this.payslipService = PayslipService;
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

  compute() {
    this.payslip = this.payslipService.getPayslip(this.employeeVM);
  }
}

export default CalculatorController;
