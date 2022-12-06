import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { ImageSliderComponent } from './components/image-slider/image-slider.component';

@NgModule({
  declarations: [ImageSliderComponent],
  imports: [CommonModule, NgImageSliderModule],
  exports: [ImageSliderComponent],
})
export class SharedModule {}
