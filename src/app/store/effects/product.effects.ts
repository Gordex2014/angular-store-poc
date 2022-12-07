import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { combineLatest, mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Product } from '../../models';
import { PartsService, ProductsService } from '../../services';
import { productActions } from '../actions';

interface ProductCache {
  all: Product[];
  byId: Map<number, Product>;
}

const productsCache: ProductCache = {
  all: [],
  byId: new Map<number, Product>(),
};

@Injectable()
export class ProductEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly productsService: ProductsService,
    private readonly partsService: PartsService
  ) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadproducts),
      mergeMap(() => {
        if (productsCache.all.length > 0) {
          return of(
            productActions.loadproductssuccess({
              products: [...productsCache.all],
            })
          );
        } else {
          return this.productsService.getProducts().pipe(
            map(products => {
              productsCache.all = [...products];
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

  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(productActions.loadproduct),
      mergeMap(action => {
        const productId = action.id;
        if (productsCache.byId.has(productId)) {
          return of(
            productActions.loadproductsuccess({
              product: productsCache.byId.get(productId)!,
            })
          );
        }

        const product$ = this.productsService.getProductById(productId);
        const parts$ = this.partsService.getPartsByProductId(productId);

        return combineLatest([product$, parts$]).pipe(
          map(([product, parts]) => {
            product.parts = parts;
            productsCache.byId.set(productId, product);
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
            productsCache.all = [];
            productsCache.byId.set(product.id, product);
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
