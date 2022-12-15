import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { authActions } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}

  goToShop(): void {
    this.router.navigate(['/shop']);
  }

  goToAdmin(): void {
    this.store.dispatch(authActions.login());
    this.router.navigate(['/admin']);
  }
}
