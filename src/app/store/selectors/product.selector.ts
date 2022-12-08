import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducers';

const selectProduct = (state: AppState) => state.product;
const selectPartsByProduct = (state: AppState) => state.parts;

export const selectPartsPerProduct = createSelector(
  selectProduct,
  selectPartsByProduct,
  (productState, partsState) => {
    return {
      product: productState.product,
      parts: partsState.parts,
      loaded: productState.loaded && partsState.loaded,
      error: productState.product === null && partsState.parts === null,
    };
  }
);
