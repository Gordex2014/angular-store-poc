import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Currency } from 'src/app/models/enums';

import { Product } from '../../../models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  images: string[] = [];

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    if (!this.product.images) {
      return;
    }

    this.images = this.product.images.map(image => image.url);
  }

  get currency(): string {
    return Currency[this.product.currency];
  }

  goToProductDetails(): void {
    this.router.navigate(['/shop/products', this.product.id]);
  }
}
