import { Product } from '../../models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const productsActions = createActionGroup({
  source: 'Products',
  events: {
    loadProducts: emptyProps(),
    loadProductsSuccess: props<{ products: Product[] }>(),
    loadProductsFailure: props<{ error: Error }>(),
  },
});
