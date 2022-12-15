import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';

import { AppState } from '../../../store/app.reducers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  #destroy$ = new Subject<void>();
  isLogged = false;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('auth')
      .pipe(takeUntil(this.#destroy$))
      .subscribe(authState => {
        this.isLogged = authState.isLogged;
      });
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}
