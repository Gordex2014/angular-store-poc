import { createActionGroup, emptyProps, props } from '@ngrx/store';

import { Cart, Product } from '../../models';

export const cartActions = createActionGroup({
  source: 'Cart',
  events: {
    loadCart: emptyProps(),
    loadCartSuccess: props<{ cart: Cart }>(),
    addProductToCart: props<{ product: Product }>(),
    addProductToCartSuccess: props<{ cart: Cart }>(),
    removeProductFromCart: props<{ productId: number }>(),
    removeProductFromCartSuccess: props<{ cart: Cart }>(),
  },
});
