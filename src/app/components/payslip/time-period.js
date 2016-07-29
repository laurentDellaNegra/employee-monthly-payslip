class TimePeriod {

  constructor(startDate) {

    this.monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];
    this.startDate = startDate ? startDate : new Date();
    this.day = this.startDate.getDate();
    this.monthIndex = this.startDate.getMonth();
    this.year = this.startDate.getFullYear();
    this.numberOfDays = this.getNumberOfDays();
    this.numberOfworkingDays = this.getNumberOfworkingDays();
    this.payPeriod = this.getStringPeriod(this.startDate, this.numberOfDays);
  }

  getNumberOfDays() {
    //TODO not very clear, use moment.js
    // we put monthIndex - 1 because months begin at 0
    return new Date(this.year, this.monthIndex - 1, 0).getDate();
  }

  getNumberOfworkingDays() {
    const currentDay = 1; // we count the current day of work
    return (this.numberOfDays - this.day) + currentDay;
  }

  getStringPeriod() {
    return (this.day + ' ' + this.monthNames[this.monthIndex] + ' - ' + this.numberOfDays + ' ' + this.monthNames[this.monthIndex]);
  }
}

export default TimePeriod;
