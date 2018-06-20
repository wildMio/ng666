import { Component, OnInit, Input, Output, EventEmitter, ContentChild, TemplateRef } from '@angular/core';

@Component({
  exportAs: 'mio-toggle',
  selector: 'mio-toggle',
  template: `
    <ng-container *ngTemplateOutlet="layoutTemplate; context: { on: this.on, toggle: this.toggle, fns: { toggle: this.toggle } }">
    </ng-container>
  `
})
export class MioToggleComponent implements OnInit {
  @Input() on: boolean;
  @Output() toggled: EventEmitter<boolean> = new EventEmitter();

  @ContentChild(TemplateRef) @Input() layoutTemplate: TemplateRef<any>;

  constructor() { }

  ngOnInit() {
  }

  toggle = () => {
    this.setOnState(!this.on);
  };

  setOnState(on: boolean) {
    this.on = on;
    this.toggled.emit(this.on);
  }

}
