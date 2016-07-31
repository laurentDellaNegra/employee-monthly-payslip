/**
 * Employee model
 */
class Employee {

  /**
   * Constructor
   * @param  {string} firstName
   * @param  {string} lastName
   * @param  {number} annualSalary positive number
   * @param  {number} superRate    positive number inferior than 51%
   * @param  {string} startDate    date
   */
  constructor(firstName, lastName, annualSalary, superRate, startDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.annualSalary = annualSalary;
    this.superRate = superRate;
    this.startDate = startDate;
  }
}

// export
export default Employee;
