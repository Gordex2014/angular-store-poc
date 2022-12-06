import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from '../../models';
import { ProductsService } from '../../services';
import { productActions } from '../actions';

interface ProductCache {
  all: Product[];
  byId: Map<number, Product>;
}

@Injectable()
export class ProductEffects {
  #productsCache: ProductCache = {
    all: [],
    byId: new Map<number, Product>(),
  };

  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadproducts),
      mergeMap(() => {
        if (this.#productsCache.all.length > 0) {
          return of(
            productActions.loadproductssuccess({
              products: { ...this.#productsCache.all },
            })
          );
        } else {
          return this.productsService.getProducts().pipe(
            map(products => {
              this.#productsCache.all = { ...products };
              return productActions.loadproductssuccess({ products });
            }),
            catchError(error =>
              of(productActions.loadproductsfailure({ error }))
            )
          );
        }
      })
    )
  );
}
