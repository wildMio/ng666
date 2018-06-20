import { WithToggleDirective } from './with-toggle.directive';
import { ToggleDirective } from './toggle.directive';

describe('WithToggleDirective', () => {
  it('should create an instance', () => {
    const directive = new WithToggleDirective(new ToggleDirective());
    expect(directive).toBeTruthy();
  });
});
