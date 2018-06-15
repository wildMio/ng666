import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleDirective } from './toggle/toggle.directive';
import { WithToggleDirective } from './toggle/with-toggle.directive';
import { SwitchComponent } from './irrelevant-implementation-details/switch.component';
import { ToggleButtonComponent } from './toggle/toggle-button/toggle-button.component';
import { ToggleOnComponent } from './toggle/toggle-on/toggle-on.component';
import { ToggleOffComponent } from './toggle/toggle-off/toggle-off.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    WithToggleDirective,
    ToggleDirective,
    ToggleButtonComponent,
    ToggleOnComponent,
    ToggleOffComponent
  ],
  declarations: [WithToggleDirective, ToggleDirective, SwitchComponent, ToggleButtonComponent, ToggleOnComponent, ToggleOffComponent]
})
export class WidgetModule { }
