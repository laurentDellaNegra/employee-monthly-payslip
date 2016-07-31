/* @flow */
/**
 * Time service
 * Everything linked to the date and format
 */
class TimeService {

  constructor(MONTHS_NAME: Array<string>) {
    //ngAnnotate
    'ngInject';
    // format: 01 March – 31 March
    this.regex = /^([0-9]+)\s(\w+)\s.\s([0-9]+)\s(\w+)$/;
    this.MONTHS_NAME = MONTHS_NAME;
  }

  convertDateToString(date: any): string {
    // we check if the date is a date
    if (typeof date.getMonth !== 'function') {
      return;
    }
    const day: number = date.getDate();
    const monthIndex: number = date.getMonth();
    const year: number = date.getFullYear();
    const numberOfDaysInMonth: number = this.getNumberOfDaysInMonth(year, monthIndex);
    return `${day} ${this.MONTHS_NAME[monthIndex]} - ${numberOfDaysInMonth} ${this.MONTHS_NAME[monthIndex]}`
  }

  convertStringToDate(date: string): any {
    let d = date.trim();
    if (this.isGoodFormat(d)) {
      const arr = this.regex.exec(d);
      const day = arr[1];
      const month = arr[2];
      // We only need the first day and month
      d = new Date(new Date().getFullYear(), this.MONTHS_NAME.indexOf(month), day);
    }
    return d;
  }

  isGoodFormat(date: string): boolean {
    return this.regex.test(date);
  }

  /**
   * Return the total of days in a specific month in a specific year
   */
  getNumberOfDaysInMonth(year: number, monthIndex: number): number {
    //TODO why -1 ?
    return new Date(year, monthIndex - 1, 0).getDate();
  }

  /**
   * Return the total of days from a date
   */
  getNumberOfDaysInMonthFromDate(date): number {
    const monthIndex: number = date.getMonth();
    const year: number = date.getFullYear();

    return this.getNumberOfDaysInMonth(year, monthIndex);
  }

  /**
   * Return the total of days worked
   */
  getNumberOfworkingDays(numberOfDaysInMonth: number, startDate: any): number {
    const startDay = startDate.getDate();
    const currentDay = 1; // we count the current day of work
    return (numberOfDaysInMonth - startDay) + currentDay;
  }
}

//export
export default TimeService;
