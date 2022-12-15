export interface Cart {
  products: CartProduct[];
}

export interface CartProduct {
  productId: number;
  name: string;
  productImage?: string;
  quantity: number;
}
