class Payslip {

  constructor(name, payPeriod, numberOfworkingDays, grossIncome, incomeTax, netIncome, superA) {
    this.name = name;
    this.payPeriod = payPeriod;
    this.numberOfworkingDays = numberOfworkingDays;
    this.grossIncome = grossIncome;
    this.incomeTax = incomeTax;
    this.netIncome = netIncome;
    this.superA = superA;
  }
}

export default Payslip;
