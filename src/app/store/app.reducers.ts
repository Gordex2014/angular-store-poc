import { ActionReducerMap } from '@ngrx/store';
import {
  AuthState,
  CartState,
  PartsState,
  ProductState,
  ProductsState,
  authReducer,
  cartReducer,
  partsReducer,
  productReducer,
  productsReducer,
} from './reducers';

export interface AppState {
  readonly auth: AuthState;
  readonly cart: CartState;
  readonly product: ProductState;
  readonly products: ProductsState;
  readonly parts: PartsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  cart: cartReducer,
  product: productReducer,
  products: productsReducer,
  parts: partsReducer,
};
