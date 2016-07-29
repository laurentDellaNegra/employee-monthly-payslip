
class PayslipService {

  constructor(PayslipFactory, EmployeeFactory) {
    this.payslipFactory = PayslipFactory;
    this.employeeFactory = EmployeeFactory;
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
    const employee = this.employeeFactory.createEmployee(employeeVM);
    //pass to the payslip factory
    return this.payslipFactory.createPayslip(employee);
  }
}
PayslipService.$inject = ['PayslipFactory', 'EmployeeFactory'];

export default PayslipService;
