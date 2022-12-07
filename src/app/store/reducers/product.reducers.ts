import { Action, createReducer, on } from '@ngrx/store';
import { Product } from '../../../app/models';
import { productActions } from '../actions';

export interface ProductState {
  products: Product[];
  product: Product | undefined;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialProductState: ProductState = {
  products: [],
  product: undefined,
  loading: false,
  loaded: false,
  error: null,
};

const _productReducer = createReducer(
  initialProductState,
  on(productActions.loadproducts, state => ({
    ...state,
    error: null,
    loaded: false,
    loading: true,
  })),
  on(productActions.loadproductssuccess, (state, { products }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    products,
  })),
  on(productActions.loadproductsfailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  })),
  on(productActions.loadproduct, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(productActions.loadproductsuccess, (state, { product }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    product,
  })),
  on(productActions.loadproductfailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function productReducer(
  state: ProductState | undefined,
  action: Action
) {
  return _productReducer(state, action);
}
