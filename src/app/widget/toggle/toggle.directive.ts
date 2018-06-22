import { Directive, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Directive({
  exportAs: 'toggle',
  selector: 'appToggle, [appToggle]'
})
export class ToggleDirective implements OnChanges {
  @Input() on: boolean;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  @Input() toggleLabel: string;

  constructor(
    private cd: ChangeDetectorRef
  ) {
    console.log('toggle');
    console.log(cd);
  }

  setOnState(on: boolean) {
    this.on = on;
    this.toggle.emit(this.on);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    const { toggleLabel } = changes;
    if (toggleLabel) {
      console.log(this.toggleLabel);
    }
  }
}
