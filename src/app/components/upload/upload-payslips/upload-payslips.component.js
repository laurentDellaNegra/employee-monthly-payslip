// modules import
import uploadPayslipsTemplate from './upload-payslips.template.html';

// calculator component
const uploadPayslipsComponent = {
  bindings: {
    payslips: '<',
  },
  template: uploadPayslipsTemplate,
};
export default uploadPayslipsComponent;
