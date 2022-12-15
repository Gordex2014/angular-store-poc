import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, Observable, tap } from 'rxjs';
import { AppState } from 'src/app/store/app.reducers';

@Injectable({
  providedIn: 'root',
})
export class IsAdminGuard implements CanActivate, CanLoad {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  canActivate(): Observable<boolean> | boolean {
    return this.store.select('auth').pipe(
      tap(auth => {
        if (!auth.isLogged) {
          this.router.navigate(['/guest']);
        }
      }),
      map(auth => auth.isLogged)
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.store.select('auth').pipe(
      tap(auth => {
        if (!auth.isLogged) {
          this.router.navigate(['/guest']);
        }
      }),
      map(auth => auth.isLogged)
    );
  }
}
