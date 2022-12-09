import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CartToProcess } from 'src/app/shared/types';

import { Cart, Product } from '../../models';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    loadCart: emptyProps(),
    loadCartSuccess: props<{ cart: Cart }>(),
    addProductToCart: props<{ product: Product }>(),
    addProductToCartSuccess: props<{ cart: Cart }>(),
    addProductQuantity: props<{ productId: number }>(),
    addProductQuantitySuccess: props<{ cart: Cart }>(),
    removeProductFromCart: props<{ productId: number }>(),
    removeProductFromCartSuccess: props<{ cart: Cart }>(),
    processCart: props<{ cartToProcess: CartToProcess }>(),
    processCartSuccess: props<{ cart: Cart }>(),
    processCartFailure: props<{ error: string }>(),
  },
});
