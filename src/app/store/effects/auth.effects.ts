import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, of } from 'rxjs';

import { AuthService } from '../../services';
import { authActions } from '../actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}

  loadAuth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.loadauth),
      mergeMap(() =>
        of(this.authService.getAuth()).pipe(
          map(auth => authActions.loadauthsuccess({ auth }))
        )
      )
    )
  );

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.login),
      mergeMap(() =>
        of(this.authService.login()).pipe(
          map(auth => authActions.loginsuccess({ auth }))
        )
      )
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(authActions.logout),
      mergeMap(() =>
        of(this.authService.logout()).pipe(
          map(auth => authActions.logoutsuccess({ auth }))
        )
      )
    )
  );
}
