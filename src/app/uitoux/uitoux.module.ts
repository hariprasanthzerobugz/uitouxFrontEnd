import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UitouxRoutingModule } from './uitoux-routing.module';
import { UitouxComponent } from './uitoux.component';
import { BannerComponent } from './banner/banner.component';
import { BrandsComponent } from './brands/brands.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FeaturedProducComponent } from './featured-produc/featured-produc.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerImageComponent } from './banner/banner-image/banner-image.component';


@NgModule({
  declarations: [
    UitouxComponent,
    BannerComponent,
    BrandsComponent,
    CarouselComponent,
    FeaturedProducComponent,
    BannerImageComponent,
  ],
  imports: [
    CommonModule,
    UitouxRoutingModule,
    HttpClientModule,
  ],
})
export class UitouxModule { }
