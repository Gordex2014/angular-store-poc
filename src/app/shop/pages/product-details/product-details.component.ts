import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';

import { Product } from '../../../models';
import { productActions } from '../../../store/actions';
import { AppState } from '../../../store/app.reducers';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  #destroy$ = new Subject<void>();
  #productId: number = 0;

  product: Product | undefined = undefined;
  error: any;
  loading: boolean = true;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.#productId = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(this.#productId)) {
      this.goHome();
    }

    this.store.dispatch(productActions.loadproduct({ id: this.#productId }));

    this.store
      .select('product')
      .pipe(
        takeUntil(this.#destroy$),
        tap(({ error }) => error && this.goHome())
      )
      .subscribe(productState => {
        this.product = productState.product;
        this.loading = productState.loading;
      });
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  goHome(): void {
    this.router.navigate(['/shop']);
  }
}
