import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { CartToProcess } from 'src/app/shared/types';
import { cartActions } from 'src/app/store/actions';

import { Cart } from '../../../models';
import { AppState } from '../../../store/app.reducers';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.scss'],
})
export class CartCardComponent implements OnInit, OnDestroy {
  #destroy = new Subject<void>();
  cart: Cart | undefined = undefined;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('cart')
      .pipe(takeUntil(this.#destroy))
      .subscribe(cart => (this.cart = cart.cart));
  }

  ngOnDestroy(): void {
    this.#destroy.next();
    this.#destroy.complete();
  }

  addProductToCart(productId: number): void {
    this.store.dispatch(cartActions.addproductquantity({ productId }));
  }

  removeProductFromCart(productId: number): void {
    this.store.dispatch(cartActions.removeproductfromcart({ productId }));
  }

  processCart(): void {
    const cartToProcess: CartToProcess = {
      products:
        this.cart?.products.map(product => ({
          productId: product.productId,
          quantity: product.quantity,
        })) ?? [],
    };
    this.store.dispatch(cartActions.processcart({ cartToProcess }));
  }

  get cartTotal(): number {
    let total = 0;
    if (this.cart) {
      this.cart.products.forEach(product => {
        total += product.quantity;
      });
    }
    return total;
  }

  get cartExists(): boolean {
    return this.cartTotal > 0;
  }
}
