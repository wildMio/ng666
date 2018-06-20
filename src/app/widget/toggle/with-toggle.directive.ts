import { Directive, Input, Optional, Host, OnChanges, SimpleChanges } from '@angular/core';

import { ToggleDirective } from './toggle.directive';

@Directive({
  exportAs: 'withToggle',
  selector: 'appToggle, [appToggle], [withToggle]',
})
export class WithToggleDirective implements OnChanges {
  @Input()
  withToggle: ToggleDirective;
  @Input() withToggleLabel: string;

  toggle: ToggleDirective = this.toggleDirective;

  constructor(
    @Host() @Optional() private toggleDirective: ToggleDirective,
  ) {
    console.log('with toggle');
  }

  ngOnChanges(changes: SimpleChanges) {
    const { withToggle, withToggleLabel } = changes;
    if (withToggle) {
      this.toggle = this.withToggle || this.toggleDirective;
    }
    if (withToggleLabel) {
      console.log(this.withToggleLabel);
    }
  }
}
