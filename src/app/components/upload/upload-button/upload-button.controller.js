// modules import
import angular from 'angular';

/**
 * Upload button controller
 */
class UploadButtonController {

  /**
   * constructor
   * @param  $element [description]
   * @param  $filter  [description]
   */
  constructor($element, $filter) {
    // ngAnnotate
    'ngInject';
    this.$element = $element;
    this.$filter = $filter;

    // we check if the input file change
    this.$element.bind('change', (changeEvent) => {
      // we take only the first file
      var file = changeEvent.target.files[0];
      var reader = new FileReader();
      reader.onload = (loadEvent) => {
        // Use the callback function to update the parent component data
        this.onLoadEmployees({ employees: this.parseFile(loadEvent.target.result) });
      };
      // csv format
      reader.readAsText(file);
    });
  }

  /**
   * Use the custom csvToObj filter to parse the file
   * @param  object data    csv file
   * @return object         employee raw object
   */
  parseFile(data) {
    return this.$filter('csvToObj')(data);
  }
}

// export
export default UploadButtonController;
