import { Action, createReducer, on } from '@ngrx/store';
import { Product } from 'src/app/models';
import { productsActions } from '../actions';

export interface ProductsState {
  products: Product[];
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialProductsState: ProductsState = {
  products: [],
  loading: false,
  loaded: false,
  error: null,
};

const _productsReducer = createReducer(
  initialProductsState,
  on(productsActions.loadproducts, state => ({
    ...state,
    error: null,
    loaded: false,
    loading: true,
  })),
  on(productsActions.loadproductssuccess, (state, { products }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    products,
  })),
  on(productsActions.loadproductsfailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function productsReducer(
  state: ProductsState | undefined,
  action: Action
) {
  return _productsReducer(state, action);
}
