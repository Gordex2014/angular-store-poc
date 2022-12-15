import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Currency } from '../../../models/enums';
import { productActions } from '../../../store/actions';
import { AppState } from '../../../store/app.reducers';

import { productsAddForm } from './products-add.form';

@Component({
  selector: 'app-products-add',
  templateUrl: './products-add.component.html',
  styleUrls: ['./products-add.component.scss'],
})
export class ProductsAddComponent implements OnInit {
  addProductForm!: FormGroup;
  productsAddForm = productsAddForm;

  constructor(private readonly store: Store<AppState>) {}

  ngOnInit(): void {
    this.addProductForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl(''),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      stock: new FormControl('', [Validators.required, Validators.min(0)]),
      currency: new FormControl('', [Validators.required]),
    });
  }

  get currenciesKeys() {
    return Object.keys(Currency).filter(key => isNaN(Number(key)));
  }

  get currenciesValues() {
    return Object.values(Currency).filter(
      value => !isNaN(Number(value))
    ) as number[];
  }

  get formInValid(): boolean {
    return this.addProductForm.invalid;
  }

  onSubmit() {
    this.store.dispatch(
      productActions.createproduct({ product: this.addProductForm.value })
    );

    this.addProductForm.reset();
  }
}
