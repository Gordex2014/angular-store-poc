import { ActionReducerMap } from '@ngrx/store';
import { ProductState, productReducer } from './reducers';

export interface AppState {
  readonly product: ProductState;
}

export const appReducers: ActionReducerMap<AppState> = {
  product: productReducer,
};
