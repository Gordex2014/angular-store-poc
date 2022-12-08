import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Product } from 'src/app/models';
import { productsActions } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  #destroy$ = new Subject<void>();

  products: Product[] = [];
  loading: boolean = true;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(productsActions.loadproducts());

    this.store
      .select('products')
      .pipe(takeUntil(this.#destroy$))
      .subscribe(productState => {
        this.products = productState.products;
        this.loading = productState.loading;
      });
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }
}
