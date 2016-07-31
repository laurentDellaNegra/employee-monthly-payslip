// modules import
import uploadEmployeesTemplate from './upload-employees.template.html';

// calculator component
const uploadEmployeesComponent = {
  bindings: {
    employees: '<',
  },
  template: uploadEmployeesTemplate,
};
export default uploadEmployeesComponent;
