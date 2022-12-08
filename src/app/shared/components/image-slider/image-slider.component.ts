import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';
import { Image } from '../../../models';

import { ImageObject } from '../../types';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss'],
})
export class ImageSliderComponent implements OnInit {
  @ViewChild('slider', { static: true }) slider!: NgImageSliderComponent;

  imageObject: ImageObject[] = [];

  @Input() imagesTitle: string = '';
  @Input() images: Image[] = [];

  constructor() {}

  ngOnInit(): void {
    this.images.forEach(image => {
      this.imageObject.push({
        image: image.url,
        thumbImage: image.url,
        title: this.imagesTitle,
      });
    });
  }

  prevImageClick() {
    this.slider.prev();
  }

  nextImageClick() {
    this.slider.next();
  }
}
