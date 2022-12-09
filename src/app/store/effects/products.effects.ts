import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ProductsService } from '../../services';
import { productsActions } from '../actions';

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
        return this.productsService.getProducts().pipe(
          map(products => {
            return productsActions.loadproductssuccess({ products });
          }),
          catchError(error =>
            of(productsActions.loadproductsfailure({ error }))
          )
        );
      })
    )
  );
}
