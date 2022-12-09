import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProductsService } from '../../services';
import { productActions } from '../actions';

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService
  ) {}

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadproduct),
      mergeMap(action => {
        const productId = action.id;
        return this.productsService.getProductById(productId).pipe(
          map(product => {
            return productActions.loadproductsuccess({ product });
          }),
          catchError(error => of(productActions.loadproductfailure({ error })))
        );
      })
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.createproduct),
      mergeMap(action => {
        return this.productsService.createProduct(action.product).pipe(
          map(product => {
            return productActions.createproductsuccess({ product });
          }),
          catchError(error =>
            of(productActions.createproductfailure({ error }))
          )
        );
      })
    )
  );
}
