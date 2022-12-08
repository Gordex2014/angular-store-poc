import { Product, ProductBase } from '../../models';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const productActions = createActionGroup({
  source: 'Product',
  events: {
    loadProduct: props<{ id: number }>(),
    loadProductSuccess: props<{ product: Product }>(),
    loadProductFailure: props<{ error: Error }>(),
    createProduct: props<{ product: ProductBase }>(),
    createProductSuccess: props<{ product: Product }>(),
    createProductFailure: props<{ error: Error }>(),
    updateProduct: props<{ product: Product }>(),
    updateProductSuccess: props<{ product: Product }>(),
    updateProductFailure: props<{ error: Error }>(),
    deleteProduct: props<{ id: number }>(),
    deleteProductSuccess: props<{ id: number }>(),
    deleteProductFailure: props<{ error: Error }>(),
  },
});
