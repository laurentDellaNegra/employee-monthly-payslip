// modules import
import angular from 'angular';
import UploadPayslipsComponent from './upload-payslips.component';

// table payslips nested component
const uploadPayslips = angular
  .module('upload.payslips', [])
  .component('uploadPayslips', UploadPayslipsComponent)
  .name;

// export
export default uploadPayslips;
