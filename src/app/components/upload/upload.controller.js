// modules import
import angular from 'angular';

/**
 * Upload controller
 */
class UploadController {
  constructor($timeout, PayslipService, $q) {
    // ngAnnotate
    'ngInject';
    this.$timeout = $timeout;
    this.payslipService = PayslipService;
    this.$q = $q;
  }

  /**
   * Call the payslip service to update the VM
   * @param  object employees   data from the csv file
   * @return void               update the view model
   */
  loadEmployees(employees) {

      // assigning to employees table
      this.employeesVM = employees;

      // async computation
      const promise = this.getPayslipsAsync(employees).then((payslips) => {
        this.status = this.createStatus(payslips.statusArray);
        this.payslipsVM = payslips.dataArray;
        //TODO don't use jquery
        $('#spin').html('Browse...');
      }, (reason) => {
        alert('Failed: ' + reason);
        //TODO don't use jquery
        $('#spin').html('Browse...');
      });
  }

  getPayslipsAsync(employees) {

    var deferred = this.$q.defer();
    const payslips = this.payslipService.getPayslips(employees);
    if (payslips) {
      deferred.resolve(payslips);
    } else {
      deferred.reject('Error in computation');
    }
    return deferred.promise;
  }

  createStatus(statusArray) {
    let s = { isValid: true, message: 'Error, employee is not valid in lines' };
    // we can create custom message, but we will do simple
    for (let i = 0; i < statusArray.length; i++) {
      if (!statusArray[i].isValid) {
        s.isValid = false;
        s.message += ` ${i};`;
      }
    }
    return s;
  }

  /**
   * Reset view model
   */
  clean() {
    this.employeesVM = [];
    this.payslipsVM = [];
    this.status = {isValid: true, message: ''};
    //Clean file uploaded button
    $('#inputFile').val(null);
  }
}

// export
export default UploadController;
