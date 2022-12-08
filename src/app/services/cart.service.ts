import { Injectable } from '@angular/core';
import { Cart, Product } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #LOCAL_STORAGE_KEY = 'cart';

  #defaultCart: Cart = {
    products: [],
  };

  /**
   * Gets the cart from the local storage, if it doesn't exist, it creates a new one
   * @returns The cart from the local storage
   */
  getStoredCart(): Cart {
    // TODO: Delete unavailable products from the cart
    const storedCart = localStorage.getItem(this.#LOCAL_STORAGE_KEY);
    if (storedCart) {
      return JSON.parse(storedCart) as Cart;
    }

    localStorage.setItem(
      this.#LOCAL_STORAGE_KEY,
      JSON.stringify(this.#defaultCart)
    );
    return this.#defaultCart;
  }

  /**
   * Adds a product to the cart
   * @param product The product to add to the cart
   */
  addProductToCart(product: Product): Cart {
    const cart = this.getStoredCart();

    // Search for the product in the cart
    let productInCart = cart.products.find(
      cartProduct => cartProduct.productId === product.id
    );

    if (productInCart) {
      productInCart.quantity++;
    } else {
      productInCart = {
        productId: product.id,
        quantity: 1,
        name: product.title,
        productImage: product.images ? product.images[0].url : '',
      };
      cart.products.push(productInCart);
    }

    this.saveCart(cart);

    return cart;
  }

  /**
   * Removes a product from the cart
   * @param productId The product id to remove from the cart
   */
  removeProductFromCart(productId: number): Cart {
    const cart = this.getStoredCart();

    // Check if the product is in the cart
    const productInCart = cart.products.find(
      cartProduct => cartProduct.productId === productId
    );

    if (!productInCart) {
      return cart;
    }

    const productIndex = cart.products.indexOf(productInCart);
    cart.products.splice(productIndex, 1);

    this.saveCart(cart);
    return cart;
  }

  /**
   * Saves the cart to the local storage
   * @param cart The cart to be saved
   */
  private saveCart(cart: Cart): void {
    localStorage.setItem(this.#LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }
}
