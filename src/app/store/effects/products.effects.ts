import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from '../../models';
import { ProductsService } from '../../services';
import { productsActions } from '../actions';

let productsCache: Product[] = [];

@Injectable()
export class ProductsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productsActions.loadproducts),
      mergeMap(() => {
        if (productsCache.length > 0) {
          return of(
            productsActions.loadproductssuccess({
              products: [...productsCache],
            })
          );
        } else {
          return this.productsService.getProducts().pipe(
            map(products => {
              productsCache = [...products];
              return productsActions.loadproductssuccess({ products });
            }),
            catchError(error =>
              of(productsActions.loadproductsfailure({ error }))
            )
          );
        }
      })
    )
  );
}
