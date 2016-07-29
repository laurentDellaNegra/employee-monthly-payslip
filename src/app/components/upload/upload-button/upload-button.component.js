import controller from './upload-button.controller';
import uploadButtonTemplate from './upload-button.template.html';

const UploadButtonComponent = {
  bindings: {
    onLoadEmployees: '&',
  },
  controller,
  template: uploadButtonTemplate,
};

export default UploadButtonComponent;
