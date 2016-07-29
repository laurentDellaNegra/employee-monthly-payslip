
class PayslipService {

  constructor(PayslipFactory, EmployeeValidator) {
    this.payslipFactory = PayslipFactory;
    this.employeeValidator = EmployeeValidator;
  }

  getPayslips(employees) {
    const payslips = []
    for(const employee of employees) {
      payslips.push(this.getPayslip(employee));
    }
    return payslips;
  }

  getPayslip(employeeVM) {
    //validate the employee object
    const employee = this.employeeValidator.createEmployee(employeeVM);
    //pass to the payslip factory
    return this.payslipFactory.createPayslip(employee);
  }
}
PayslipService.$inject = ['PayslipFactory', 'EmployeeValidator'];

export default PayslipService;
