// modules import
import controller from './calculator-employee.controller';
import calculatorEmployeeTemplate from './calculator-employee.template.html';

// calculator component
const CalculatorEmployeeComponent = {
  bindings: {
    onCompute: '&',
  },
  controller,
  template: calculatorEmployeeTemplate,
};
export default CalculatorEmployeeComponent;
