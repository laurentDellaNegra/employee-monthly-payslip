import angular from 'angular';

class UploadButtonController {

  constructor($element, $filter) {
    'ngInject';
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
}

export default UploadButtonController;
