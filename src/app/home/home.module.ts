import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DetailsComponent } from './modals/details/details.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SliderImageComponent } from './components/slider-image/slider-image.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule,
    LazyLoadImageModule
  ],
  declarations: [
    HomePage,
    DetailsComponent,
    FiltersComponent,
    SliderImageComponent
  ]
})
export class HomePageModule {}
