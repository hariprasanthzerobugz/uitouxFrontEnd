import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitouxRoutingModule } from './uitoux-routing.module';
import { UitouxComponent } from './uitoux.component';


@NgModule({
  declarations: [
    UitouxComponent,
  ],
  imports: [
    CommonModule,
    UitouxRoutingModule
  ]
})
export class UitouxModule { }
