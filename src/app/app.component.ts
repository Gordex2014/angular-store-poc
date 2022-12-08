import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cartActions } from './store/actions';
import { AppState } from './store/app.reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frontend-training';

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(cartActions.loadcart());
  }
}
