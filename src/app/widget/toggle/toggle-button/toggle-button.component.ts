import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WithToggleDirective } from '../with-toggle.directive';


@Component({
  selector: 'app-toggle-button',
  template: '<app-switch [on]="withToggle.toggle?.on" (click)="onClick()" ></app-switch>'
})
export class ToggleButtonComponent implements OnInit {
  constructor(
    public withToggle: WithToggleDirective
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.withToggle.toggle.setOnState(!this.withToggle.toggle.on);
  }
}
