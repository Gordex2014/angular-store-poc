import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil, tap } from 'rxjs';

import { AppState } from '../../../store/app.reducers';
import { Part, Product } from '../../../models';
import { productActions, partsActions } from '../../../store/actions';
import { selectPartsPerProduct } from '../../../store/selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  #destroy$ = new Subject<void>();
  #productId: number = 0;

  product: Product | undefined = undefined;
  parts: Part[] = [];
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
    this.store.dispatch(
      partsActions.loadpartsbyproductid({ id: this.#productId })
    );

    this.store
      .select(selectPartsPerProduct)
      .pipe(
        takeUntil(this.#destroy$),
        tap(({ error }) => {
          error && this.goHome();
        })
      )
      .subscribe(({ product, parts }) => {
        this.product = product;
        this.parts = parts;
      });
  }

  ngOnDestroy(): void {
    this.#destroy$.next();
    this.#destroy$.complete();
  }

  get partsExist(): boolean {
    return this.parts.length > 0;
  }

  get columns(): number {
    // 2 columns if parts exist, 1 column if not
    return this.partsExist ? 2 : 1;
  }

  get rowHeight(): string {
    // 1:1 if parts exist, 2:1 if not
    return this.partsExist ? '1:1' : '2:1';
  }

  goHome(): void {
    this.router.navigate(['/shop']);
  }
}
