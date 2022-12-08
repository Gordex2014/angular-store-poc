import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../../store/app.reducers';
import { Product } from '../../../models';
import { cartActions } from '../../../store/actions';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss'],
})
export class ProductDisplayComponent {
  @Input() product!: Product;
  addToCartLoading = false;

  #ONE_SECOND = 1000;

  constructor(private readonly store: Store<AppState>) {}

  addToCart() {
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
