import angular from 'angular';
import UploadButtonComponent from './upload-button.component';
import UploadButtonFilter from './upload-button.filter';

const UploadButton = angular
  .module('upload.button', [])
  .component('uploadButton', UploadButtonComponent)
  .filter('csvToObj', UploadButtonFilter)
  .name;

export default UploadButton;
