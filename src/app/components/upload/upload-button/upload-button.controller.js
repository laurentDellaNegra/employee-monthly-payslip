import angular from 'angular';

class UploadButtonController {

  constructor($element, $filter) {
    this.$element = $element;
    this.$filter = $filter;

    this.$element.bind('change', (changeEvent) => {
      var file = changeEvent.target.files[0];
      var reader = new FileReader();
      reader.onload = (loadEvent) => {
        this.onLoadEmployees({ employees: this.parseFile(loadEvent.target.result) });
      };

      reader.readAsText(file);
    });
  }

  parseFile(data) {
    const rawArray = this.$filter('csvToObj')(data);
    // return this.formatArray(rawArray);
    return rawArray;
  }

  // formatArray(rawArray) {
  //   const arr = [];
  //   for (const item of rawArray) {
  //     arr.push({
  //       firstName: item.firstName,
  //       lastName: item.lastName,
  //       annualSalary: Number.parseInt(item.annualSalary),
  //       superRate: Number.parseInt(item.superRate),
  //       startDate: new Date(item.startDate),
  //     })
  //   }
  //   return arr;
  // }
}
UploadButtonController.$inject = ['$element', '$filter'];

export default UploadButtonController;
