import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay, of } from 'rxjs';
import { cartActions } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

import { Product } from '../../../models';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;
  addToCartLoading = false;

  #ONE_SECOND = 1000;

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    if (!this.product.images) {
      return;
    }
  }

  goToProductDetails(): void {
    this.router.navigate(['/shop/products', this.product.id]);
  }

  addProductToCart(): void {
    this.store.dispatch(
      cartActions.addproducttocart({ product: this.product })
    );

    this.addToCartLoading = true;
    of(true)
      .pipe(delay(this.#ONE_SECOND))
      .subscribe(() => {
        this.addToCartLoading = false;
      });
  }
}
