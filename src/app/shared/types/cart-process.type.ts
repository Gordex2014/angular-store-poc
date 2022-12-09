export interface CartToProcess {
  products: ProductProcess[];
}

export interface ProductProcess {
  productId: number;
  quantity: number;
}
