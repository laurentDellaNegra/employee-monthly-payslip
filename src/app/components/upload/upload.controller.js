import angular from 'angular';

class UploadController {
  constructor($timeout, PayslipService) {
    this.$timeout = $timeout;
    this.payslipService = PayslipService;
  }

  loadEmployees(employees) {
    this.$timeout(() => {
      this.employeesVM = employees;
      this.payslipsVM = this.payslipService.getPayslips(employees);
    });
  }

  cleanEmployees() {
    this.employeesVM = [];
    this.payslipsVM = [];
    //TODO try to not use jquery
    //Clean file uploaded
    $('#inputFile').val(null);
  }
}

UploadController.$inject = ['$timeout', 'PayslipService'];

export default UploadController;
