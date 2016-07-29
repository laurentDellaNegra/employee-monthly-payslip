/* @flow */
// this is a factory responsible to create a valid employee
import Employee from './employee';
//import TimePeriod from './employee';

class EmployeeValidator {

  constructor(MONTHS_NAME: Array<string>) {
    this.MONTHS_NAME = MONTHS_NAME;
  }

  createEmployee(employeeVM): any {
    return {
      firstName: this.checkFirstName(employeeVM.firstName),
      lastName: this.checkLastName(employeeVM.lastName),
      annualSalary: this.checkAnnualSalary(employeeVM.annualSalary),
      superRate: this.checkSuperRate(employeeVM.superRate),
      startDate: this.checkStartDate(employeeVM.startDate)
    }
  }

  //Other tests can be applied here
  checkFirstName(firstNameVM: string = '') {
    return firstNameVM.trim();
  }

  checkLastName(lastNameVM: string = '') {
    return lastNameVM.trim();
  }

  // Can be string or number
  checkAnnualSalary(annualSalaryVM: string | number = 0) {
    let annualSalary = 0;
    // Check type and convert
    if (typeof annualSalaryVM === 'string') {
      annualSalary = Number.parseInt(annualSalaryVM)
    } else if (typeof annualSalaryVM === 'number') {
        annualSalary = annualSalaryVM;
    }
    // Check business logic
    if (annualSalary < 0 || annualSalary > 9999999999999) {
      annualSalary = 0;
    }
    return annualSalary;
  }

  checkSuperRate(superRateVM: string | number = 0) {
    let superRate = 0;
    // Check type and convert
    if (typeof superRateVM === 'string') {
      superRate = Number.parseInt(superRateVM.replace('%', '').trim()); //remove percentage, trim and convert
    } else if (typeof superRateVM === 'number') {
      superRate = superRateVM;
    }
    // Check business logic
    if (superRate < 0 || superRate > 50) {
      superRate = 0;
    }
    return superRate;
  }

  checkStartDate(startDateVM: any = new Date()) {
    let startDate = new Date();
    if (typeof startDateVM === "string") {
      // test if format is '01 March – 31 March';
      const regex = /^([0-9]+)\s(\w+)\s.\s([0-9]+)\s(\w+)$/;
      let startDateVMTrimed = startDateVM.trim();
      if (regex.test(startDateVMTrimed)) {
        const arr = regex.exec(startDateVMTrimed);
        const day = arr[1];
        const month = arr[2];
        // We only need the first day and month
        startDate = new Date(startDate.getFullYear(), this.MONTHS_NAME.indexOf(month), day);
      } else {
        startDate = startDateVM;
      }
    } else {
      startDate = startDateVM;
    }
    return startDate;
  }
}

EmployeeValidator.$inject = ['MONTHS_NAME']

export default EmployeeValidator;
