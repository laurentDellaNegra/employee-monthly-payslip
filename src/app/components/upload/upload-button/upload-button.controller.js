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
  constructor($element, $filter, $q) {
    // ngAnnotate
    'ngInject';
    this.$element = $element;
    this.$filter = $filter;
    this.$q = $q;
    // we check if the input file change
    this.$element.bind('change', (changeEvent) => {
      //TODO don't use jquery
      $('#spin').html('Loading...');
      const promise = this.loadFile(changeEvent).then((data) => {
        this.onLoadEmployees({ employees: data });
        //TODO don't use jquery
        $('#spin').html('Browse...');
      }, (reason) => {
        //TODO don't use jquery
        $('#spin').html('Browse...');
        alert('Failed: ' + reason);
      });
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

  /**
   * [loadFile description]
   * @param  {[type]} changeEvent [description]
   * @return {[type]}             [description]
   */
  loadFile(changeEvent) {
    const deferred = this.$q.defer();
          this.buttonState = 'Downloading...';
    // we take only the first file
    const file = changeEvent.target.files[0];
    const reader = new FileReader();
    reader.onload = (loadEvent) => {
      // Use the callback function to update the parent component data
      if (loadEvent.target.result.length > 0) {
        deferred.resolve(this.parseFile(loadEvent.target.result));
      } else {
        deferred.reject('File corrupted');
      }
    };
    // csv format
    reader.readAsText(file);
    return deferred.promise;
  }
}

// export
export default UploadButtonController;
