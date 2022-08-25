import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitouxRoutingModule } from './uitoux-routing.module';
import { UitouxComponent } from './uitoux.component';
import { BannerComponent } from './banner/banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrandsComponent } from './brands/brands.component';
import { CarouselComponent } from './carousel/carousel.component';


@NgModule({
  declarations: [
    UitouxComponent,
    BannerComponent,
    BrandsComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    UitouxRoutingModule,
    NgbModule,
  ]
})
export class UitouxModule { }
