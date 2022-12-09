import { Action, createReducer, on } from '@ngrx/store';

import { Cart } from '../../models';
import { cartActions } from '../actions';

export interface CartState {
  cart: Cart | undefined;
  loading: boolean;
  loaded: boolean;
  error: any;
}

export const initialCartState: CartState = {
  cart: undefined,
  loading: false,
  loaded: false,
  error: null,
};

const _cartReducer = createReducer(
  initialCartState,
  on(cartActions.loadcart, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(cartActions.loadcartsuccess, (state, { cart }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    cart,
  })),
  on(cartActions.addproducttocart, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(cartActions.addproducttocartsuccess, (state, { cart }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    cart,
  })),
  on(cartActions.addproductquantity, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(cartActions.addproductquantitysuccess, (state, { cart }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    cart,
  })),
  on(cartActions.removeproductfromcart, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(cartActions.removeproductfromcartsuccess, (state, { cart }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    cart,
  })),
  on(cartActions.processcart, state => ({
    ...state,
    loading: true,
    loaded: false,
    error: null,
  })),
  on(cartActions.processcartsuccess, (state, { cart }) => ({
    ...state,
    loading: false,
    loaded: true,
    error: null,
    cart,
  })),
  on(cartActions.processcartfailure, (state, { error }) => ({
    ...state,
    loading: false,
    loaded: false,
    error,
  }))
);

export function cartReducer(state: CartState | undefined, action: Action) {
  return _cartReducer(state, action);
}
