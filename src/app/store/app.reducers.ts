import { ActionReducerMap } from '@ngrx/store';
import { ProductState, productReducer } from './reducers';

export interface AppState {
  readonly products: ProductState;
}

export const appReducers: ActionReducerMap<AppState> = {
  products: productReducer,
};
