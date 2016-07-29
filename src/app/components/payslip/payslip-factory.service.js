import TimePeriod from './time-period';
import Payslip from './payslip';

class PayslipService {

  constructor() {

    this.taxTable = [
      { min:0, max:18200, base:0, tax:0 },
      { min:18201, max:37000, base:0, tax:0.19 },
      { min:37001, max:80000, base: 3572, tax: 0.325 },
      { min:80001, max:180000, base: 17545, tax: 0.37 },
      { min:180001, max:999999999999, base: 54547, tax: 0.45 }
    ];
  }

  createPayslip(employee) {

    const timePeriod = new TimePeriod(employee.startDate);

    const name = this.computeName(employee.firstName, employee.lastName);
    const payPeriod = timePeriod.payPeriod;
    const numberOfworkingDays = timePeriod.numberOfworkingDays;
    const grossIncome = this.computeGrossIncome(employee.annualSalary, timePeriod);
    const incomeTax = this.computeIncomeTax(employee.annualSalary);
    const netIncome = this.computeNetIncome(grossIncome, incomeTax);
    const superA = this.computeSuperA(grossIncome, employee.superRate);


    return new Payslip(name, payPeriod, numberOfworkingDays, grossIncome, incomeTax, netIncome, superA);
  }

  computeName(firstName, name) {
    //TODO use es6 string
    return firstName + ' ' + name;
  }

  computeGrossIncome(annualSalary, timePeriod) {
    const monthSalary = (annualSalary / 12);
    const numberOfDaysInThisMonth = timePeriod.numberOfDays;
    const daySalaryInThisMonth = monthSalary / numberOfDaysInThisMonth;
    return Math.round(daySalaryInThisMonth * timePeriod.numberOfworkingDays);
  }

  computeIncomeTax(annualSalary) {
    var incomeTax = 0;
    for (const taxItem of this.taxTable) {
      if(taxItem.min < annualSalary && annualSalary <= taxItem.max  ){
        incomeTax = (taxItem.base + (annualSalary - taxItem.min) * taxItem.tax) / 12;
      }
    }
    return Math.round(incomeTax);
  }

  computeNetIncome(grossIncome, incomeTax){
    return grossIncome - incomeTax;
  }

  computeSuperA(grossIncome, superRate) {
    return Math.round(grossIncome * (superRate / 100));
  }
}

// PayslipFactory.$inject = [''];

export default PayslipService;
