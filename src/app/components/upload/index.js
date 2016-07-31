// modules import
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import UploadComponent from './upload.component';
import config from './upload.config';
import UploadButtonComponent from './upload-button';
import UploadEmployeesComponent from './upload-employees';
import UploadPayslipsComponent from './upload-payslips';

// Upload view: Router component
const upload = angular
  .module('upload', [
    uiRouter,
    UploadButtonComponent,
    UploadEmployeesComponent,
    UploadPayslipsComponent
  ])
  .component('upload', UploadComponent)
  .config(config)
  .name;

// export
export default upload;
