// modules import
import angular from 'angular';

/**
 * Upload controller
 */
class UploadController {
  constructor($timeout, PayslipService) {
    // ngAnnotate
    'ngInject';
    this.$timeout = $timeout;
    this.payslipService = PayslipService;
  }

  /**
   * Call the payslip service to update the VM
   * @param  object employees   data from the csv file
   * @return void               update the view model
   */
  loadEmployees(employees) {
    // Check if we are in the digest loop
    // Can be replaced by $digest
    this.$timeout(() => {
      this.employeesVM = employees;

      const payslips = this.payslipService.getPayslips(employees);
      this.status = this.createStatus(payslips.statusArray);
      this.payslipsVM = payslips.dataArray;
    });
  }

  createStatus(statusArray) {
    let s = { isValid: true, message: '' };
    // we can create custom message, but we will do simple
    for (const status of statusArray) {
      if (!status.isValid) {
        s.isValid = false;
        s.message.concat(`Error employee is not valid: ${employee}\n`);
      }
    }
    return s;
  }

  /**
   * Reset view model
   */
  cleanEmployees() {
    this.employeesVM = [];
    this.payslipsVM = [];
    //Clean file uploaded button
    $('#inputFile').val(null);
  }
}

// export
export default UploadController;
