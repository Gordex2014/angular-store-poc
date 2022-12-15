import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  template: `
    <div class="page__wrapper">
      <app-header></app-header>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent {
  constructor() {}
}
