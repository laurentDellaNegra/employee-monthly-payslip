// modules import
import controller from './upload-button.controller';
import uploadButtonTemplate from './upload-button.template.html';

// Build component
const UploadButtonComponent = {
  bindings: {
    onLoadEmployees: '&',
  },
  controller,
  template: uploadButtonTemplate,
};

//export
export default UploadButtonComponent;
