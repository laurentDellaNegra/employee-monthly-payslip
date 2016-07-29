//Router component
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UploadComponent from './upload.component';
import config from './upload.config';
import UploadButtonComponent from './upload-button';

const upload = angular
  .module('upload', [uiRouter, UploadButtonComponent])
  .component('upload', UploadComponent)
  .config(config)
  .name;

export default upload;
