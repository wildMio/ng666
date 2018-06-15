import { Component, OnInit, Input } from '@angular/core';
import { WithToggleDirective } from '../with-toggle.directive';


@Component({
  selector: 'app-toggle-off',
  template: '<ng-content *ngIf="!withToggle.toggle?.on"></ng-content>'
})
export class ToggleOffComponent implements OnInit {

  constructor(
    public withToggle: WithToggleDirective
  ) { }

  ngOnInit() {
  }

}
