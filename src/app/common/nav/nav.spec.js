import mod from './index.js';

describe('component: nav', () => {
  let ctrl;
  let location;

  beforeEach(angular.mock.module(mod));
  beforeEach(angular.mock.inject(($componentController, $location) => {
    ctrl = $componentController(mod, null, {});
    location = $location;
  }));

  it(`should return 'active'`, () => {
    spyOn(location, 'path').and.returnValue('http://localhost:8080/#/calculator');
    expect(ctrl.getClass('http://localhost:8080/#/calculator')).toBe('active');
  });

  it(`should return ''`, () => {
    spyOn(location, 'path').and.returnValue('http://localhost:8080/#/asdas');
    expect(ctrl.getClass('http://localhost:8080/#/calculator')).toBe('');
  });
});
