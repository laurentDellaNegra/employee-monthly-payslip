/* @flow */
//  modules import
import Employee from './employee';

/**
 * Fqctory responsible to create an employee
 * We use FLow to type this javascript code and reduce tests
 */
class EmployeeFactory {

  constructor(TimeService) {
    'ngInject';
    this.timeService = TimeService;
  }

  createEmployee(employeeVM): any {

    const firstName = this.createFirstName(employeeVM.firstName);
    const lastName = this.createLastName(employeeVM.lastName);
    const annualSalary = this.createAnnualSalary(employeeVM.annualSalary);
    const superRate = this.createSuperRate(employeeVM.superRate);
    const startDate = this.createStartDate(employeeVM.startDate);

    return new Employee(firstName, lastName, annualSalary, superRate, startDate);
  }

  //Other tests can be applied here
  createFirstName(firstName: string): string {
    return firstName.trim();
  }

  createLastName(lastName: string): string {
    return lastName.trim();
  }

  // Can be string or number
  createAnnualSalary(annualSalary: string | number): number {
    let as;
    // Check type and convert
    if (typeof annualSalary === 'string') {
      as = Number.parseInt(annualSalary)
    } else {
        as = annualSalary;
    }
    return as;
  }

  createSuperRate(superRate: string | number): number {
    let sr = 0;
    // Check type and convert
    if (typeof superRate === 'string') {
      //remove percentage if exist, trim and convert
      sr = Number.parseInt(superRate.replace('%', '').trim());
    } else {
      sr = superRateVM;
    }
    return sr;
  }

  createStartDate(startDate: string): any {
    return this.timeService.convertStringToDate(startDate);
  }
}

export default EmployeeValidator;
