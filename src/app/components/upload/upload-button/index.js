// modules import
import angular from 'angular';
import UploadButtonComponent from './upload-button.component';
import UploadButtonFilter from './upload-button.filter';

// Upload button nested component
const UploadButton = angular
  .module('upload.button', [])
  .component('uploadButton', UploadButtonComponent)
  .filter('csvToObj', UploadButtonFilter)
  .name;

// export
export default UploadButton;
