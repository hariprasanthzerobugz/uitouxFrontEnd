import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitouxRoutingModule } from './uitoux-routing.module';
import { UitouxComponent } from './uitoux.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    UitouxComponent,
    BannerComponent,
  ],
  imports: [
    CommonModule,
    UitouxRoutingModule,
    NgbModule,
  ]
})
export class UitouxModule { }
