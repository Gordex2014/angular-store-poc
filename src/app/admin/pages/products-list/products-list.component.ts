import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Subject, takeUntil } from 'rxjs';

import { AppState } from '../../../store/app.reducers';
import { Product } from '../../../models';
import { productsActions } from '../../../store/actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  #destroy$ = new Subject<void>();
  displayedColumns: string[] = ['id', 'title', 'price', 'stock', 'description'];
  products: Product[] = [];

  constructor(
    private readonly store: Store<AppState>,
    private readonly router: Router
  ) {}
  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  ngOnInit(): void {
    this.store.dispatch(productsActions.loadproducts());

    this.store
      .select('products')
      .pipe(
        takeUntil(this.#destroy$),
        map(productsState => productsState.products)
      )
      .subscribe(products => {
        this.products = products;
      });
  }

  rowClicked(row: Product) {
    this.router.navigate(['admin', 'product', row.id]);
  }
}
