import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatDividerModule,
    MatButtonModule,
    LayoutModule,
    MatIconModule,
    MatRippleModule,
    MatProgressBarModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
