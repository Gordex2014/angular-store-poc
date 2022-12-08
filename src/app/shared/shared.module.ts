import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgImageSliderModule } from 'ng-image-slider';

import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { CurrencyEnumToStringPipe } from './pipes';

@NgModule({
  declarations: [ImageSliderComponent, CurrencyEnumToStringPipe],
  imports: [CommonModule, NgImageSliderModule],
  exports: [ImageSliderComponent, CurrencyEnumToStringPipe],
})
export class SharedModule {}
