/* @flow */
//  modules import
import Employee from './employee';

/**
 * this is a validator responsible to validate an employee
 * We use FLow to type this javascript code and reduce tests
 */
class EmployeeValidator {

  constructor(TimeService) {
    'ngInject';
    this.timeService = TimeService;
  }

  checkEmployee(employee: any): any {
    const employeeIsOk = {
      firstNameIsOk: this.checkFirstName(employee.firstName),
      lastNameIsOk: this.checkLastName(employee.lastName),
      annualSalaryIsOk: this.checkAnnualSalary(employee.annualSalary),
      superRateIsOk: this.checkSuperRate(employee.superRate),
      startDateIsOk: this.checkStartDate(employee.startDate),
    }
    return this.createValidationStatus(employee, employeeIsOk);
  }

  createValidationStatus(employee, employeeIsOk) {
    let validationStatus = { isValid: true, message: '' };
    // we can create custom message, but we will do simple
    for (let memberIsOK in employeeIsOk) {
      if (!employeeIsOk[memberIsOK]) {
        validationStatus.isValid = false;
        validationStatus.message = `Error, employee is not valid`;
        break;
      }
    }
    return validationStatus;
  }

  //Other tests can be applied here
  checkFirstName(firstName: string) {
    return (firstName === '') ? false : true;
  }

  checkLastName(lastName: string = '') {
    return (lastName === '') ? false : true;
  }

  checkAnnualSalary(annualSalary: number) {
    let isOk = true;
    if (annualSalary < 0 || annualSalary > 9999999999999) {
      isOk = false;
    }
    return isOk;
  }

  checkSuperRate(superRate: number) {
    let isOk = true;
    if (superRate < 0 || superRate > 50) {
      isOk = false;
    }
    return isOk;
  }

  checkStartDate(startDate: any) {
    return this.timeService.isGoodFormat(startDate);
  }
}

export default EmployeeValidator;
