import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MatDividerModule,
    MatButtonModule,
    LayoutModule,
    MatIconModule
  ],
  declarations: []
})
export class SharedMaterialModule { }
