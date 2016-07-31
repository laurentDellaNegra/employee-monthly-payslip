/**
 * Payslip
 */
class Payslip {

  /**
   * [constructor description]
   * @param  {[type]} name                [description]
   * @param  {[type]} payPeriod           [description]
   * @param  {[type]} grossIncome         [description]
   * @param  {[type]} incomeTax           [description]
   * @param  {[type]} netIncome           [description]
   * @param  {[type]} superA              [description]
   * @return {[type]}                     [description]
   */
  constructor(name, payPeriod, grossIncome, incomeTax, netIncome, superA) {
    this.name = name;
    this.payPeriod = payPeriod;
    this.grossIncome = grossIncome;
    this.incomeTax = incomeTax;
    this.netIncome = netIncome;
    this.superA = superA;
  }
}

// export
export default Payslip;
