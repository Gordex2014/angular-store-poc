import { ActionReducerMap } from '@ngrx/store';
import {
  ProductState,
  productReducer,
  ProductsState,
  productsReducer,
  PartsState,
  partsReducer,
  CartState,
  cartReducer,
} from './reducers';

export interface AppState {
  readonly cart: CartState;
  readonly product: ProductState;
  readonly products: ProductsState;
  readonly parts: PartsState;
}

export const appReducers: ActionReducerMap<AppState> = {
  cart: cartReducer,
  product: productReducer,
  products: productsReducer,
  parts: partsReducer,
};
