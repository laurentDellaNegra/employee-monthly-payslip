/* @flow */
// import
import Employee from 'src/app/employee/employee';
import Payslip from './payslip';

/**
 * Factory responsible to create a payslip
 */
class PayslipFactory {

  constructor(TAX_TABLE: Array<T>, TimeService: any) {
    'ngInject';
    this.taxTable = TAX_TABLE;
    this.timeService = TimeService;
  }

  /**
   * Create a valid Payslip
   * @param  {Employee}
   * @return {Payslip}
   */
  createPayslip(employee: Employee): Payslip {

    const name = this.createName(employee.firstName, employee.lastName);
    const payPeriod = this.createPayPeriod(employee.startDate);
    const grossIncome = this.createGrossIncome(employee.annualSalary, employee.startDate);
    const incomeTax = this.createIncomeTax(employee.annualSalary);
    const netIncome = this.createNetIncome(grossIncome, incomeTax);
    const superA = this.createSuperA(grossIncome, employee.superRate);

    return new Payslip(name, payPeriod, grossIncome, incomeTax, netIncome, superA);
  }

  createName(firstName: string, name: string): string {
    return `${firstName} ${name}`;
  }

  createPayPeriod(startDate: any): string {
    return this.timeService.convertDateToString(startDate);
  }

  createGrossIncome(annualSalary: number, startDate: string): number {
    const monthSalary = (annualSalary / 12);
    const numberOfDaysInThisMonth = this.timeService.getNumberOfDaysInMonthFromDate(startDate);
    const daySalaryInThisMonth = monthSalary / numberOfDaysInThisMonth;
    const numberOfworkingDays = this.timeService.getNumberOfworkingDays(numberOfDaysInThisMonth, startDate);
    return Math.round(daySalaryInThisMonth * numberOfworkingDays);
  }

  createIncomeTax(annualSalary: number): number {
    var incomeTax = 0;
    for (const taxItem of this.taxTable) {
      if(taxItem.min < annualSalary && annualSalary <= taxItem.max  ){
        incomeTax = (taxItem.base + (annualSalary - taxItem.min) * taxItem.tax) / 12;
      }
    }
    return Math.round(incomeTax);
  }

  createNetIncome(grossIncome: number, incomeTax: number): number{
    return grossIncome - incomeTax;
  }

  createSuperA(grossIncome: number, superRate: number): number {
    return Math.round(grossIncome * (superRate / 100));
  }
}

// export
export default PayslipFactory;
