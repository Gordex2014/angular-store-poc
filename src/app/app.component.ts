import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { authActions, cartActions } from './store/actions';
import { AppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styles: [],
})
export class AppComponent implements OnInit {
  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadcart());
    this.store.dispatch(authActions.loadauth());
  }
}
