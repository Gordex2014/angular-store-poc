import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { CartService } from '../../services';
import { cartActions } from '../actions';

@Injectable()
export class CartEffects {
  constructor(private actions$: Actions, private cartService: CartService) {}

  loadCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.loadcart),
      mergeMap(() =>
        of(this.cartService.getStoredCart()).pipe(
          map(cart => cartActions.loadcartsuccess({ cart }))
        )
      )
    )
  );

  addProductToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.addproducttocart),
      mergeMap(({ product }) =>
        of(this.cartService.addProductToCart(product)).pipe(
          map(cart => cartActions.addproducttocartsuccess({ cart }))
        )
      )
    )
  );

  addProductQuantity$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.addproductquantity),
      mergeMap(({ productId }) =>
        of(this.cartService.addProductQuantityToCart(productId)).pipe(
          map(cart => cartActions.addproductquantitysuccess({ cart }))
        )
      )
    )
  );

  removeProductFromCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.removeproductfromcart),
      mergeMap(({ productId }) =>
        of(this.cartService.removeProductFromCart(productId)).pipe(
          map(cart => cartActions.removeproductfromcartsuccess({ cart }))
        )
      )
    )
  );

  processCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(cartActions.processcart),
      mergeMap(({ cartToProcess }) =>
        this.cartService.processCart(cartToProcess).pipe(
          switchMap(() =>
            of(this.cartService.emptyCart()).pipe(
              map(cart => cartActions.processcartsuccess({ cart }))
            )
          ),
          catchError(error =>
            of(cartActions.processcartfailure({ error: error.message }))
          )
        )
      )
    )
  );
}
