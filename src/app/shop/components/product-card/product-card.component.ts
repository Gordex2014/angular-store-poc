import { Component, Input, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/enums';

import { Product } from '../../../models';
import { ImageObject } from '../../../types';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  images: string[] = [];

  constructor() {}

  ngOnInit(): void {
    if (!this.product.images) {
      return;
    }

    this.images = this.product.images.map(image => image.url);
  }

  get currency(): string {
    return Currency[this.product.currency];
  }
}
