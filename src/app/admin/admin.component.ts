import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';

import { authActions } from '../store/actions';
import { AppState } from '../store/app.reducers';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private readonly store: Store<AppState>) {}

  onLogout() {
    this.store.dispatch(authActions.logout());
  }

  onSidenavClick() {
    this.sidenav.toggle();
  }

  onSidenavClose() {
    this.store.dispatch(authActions.logout());
    this.sidenav.toggle();
  }
}
