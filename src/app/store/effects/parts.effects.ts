import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Part } from '../../models';
import { PartsService } from '../../services';
import { partsActions } from '../actions';

let partsCache = new Map<number, Part[]>();

@Injectable()
export class PartsEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly partsService: PartsService
  ) {}

  loadParts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(partsActions.loadpartsbyproductid),
      mergeMap(action => {
        const productId = action.id;
        if (partsCache.has(productId)) {
          return of(
            partsActions.loadpartsbyproductidsuccess({
              parts: partsCache.get(productId)!,
            })
          );
        }

        return this.partsService.getPartsByProductId(productId).pipe(
          map(parts => {
            partsCache.set(productId, parts);
            return partsActions.loadpartsbyproductidsuccess({ parts });
          }),
          catchError(error =>
            of(partsActions.loadpartsbyproductidfailure({ error }))
          )
        );
      })
    )
  );
}
