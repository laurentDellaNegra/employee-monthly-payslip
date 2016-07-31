/**
 * Payslip service
 */
class PayslipService {

  /**
   * [constructor description]
   * @param  {[type]} PayslipFactory    [description]
   * @param  {[type]} EmployeeValidator [description]
   * @return {[type]}                   [description]
   */
  constructor(PayslipFactory, EmployeeValidator) {
    'ngInject';
    this.payslipFactory = PayslipFactory;
    this.employeeValidator = EmployeeValidator;
  }

  /**
   * [getPayslips description]
   * @param  {[type]} employees [description]
   * @return {[type]}           [description]
   */
  getPayslips(employeesVM) {
    const payslips = { statusArray: [], dataArray:[]};
    for(const employeeVM of employeesVM) {
      const employee = this.getPayslip(employeeVM);
      payslips.statusArray.push(employee.status);
      payslips.dataArray.push(employee.data);
    }
    return payslips;
  }

  /**
   * [getPayslip description]
   * @param  {[type]} employeeVM [description]
   * @return {[type]}            [description]
   */
  getPayslip(employeeVM) {

    //validate the employee object
    const payslip = {
      status: this.employeeValidator.checkEmployee(employeeVM),
      data: {}
    }

    // if employee is valid, we create the employee
    if (payslip.status.isValid) {
      payslip.data = this.payslipFactory.createPayslip(employeeVM);
    }

    //pass to the payslip factory
    return payslip;
  }
}

//export
export default PayslipService;
