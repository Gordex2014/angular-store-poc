import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../../app/models';
import { productActions } from '../actions';

export interface ProductState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialProductState: ProductState = {
  products: [],
  loading: false,
  loaded: false,
  error: null,
};

const _productReducer = createReducer(
  initialProductState,
  on(productActions.loadproducts, state => ({ ...state, loading: true })),
  on(productActions.loadproductssuccess, (state, { products }) => ({
    ...state,
    loading: false,
    loaded: true,
    products,
  })),
  on(productActions.loadproductsfailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function productReducer(state: ProductState | undefined, action: Action) {
  return _productReducer(state, action);
}
