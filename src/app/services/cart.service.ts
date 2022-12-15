import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart, Product } from '../models';
import { CartToProcess, CartProcessResponse } from '../shared/types';
import { ApiGenericResponse } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #LOCAL_STORAGE_KEY = 'cart';

  #defaultCart: Cart = {
    products: [],
  };

  constructor(private readonly http: HttpClient) {}

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
        productImage:
          !!product.images && product.images.length > 0
            ? product.images[0].url
            : '',
      };
      cart.products.push(productInCart);
    }

    this.saveCart(cart);

    return cart;
  }

  /**
   * Adds a quantity of a product to the cart
   * @param productId The product id to add to the cart
   * @param quantity The quantity to add to the cart, default is 1
   * @returns The cart
   */
  addProductQuantityToCart(productId: number, quantity: number = 1): Cart {
    const cart = this.getStoredCart();

    // Search for the product in the cart
    let productInCart = cart.products.find(
      cartProduct => cartProduct.productId === productId
    );

    if (productInCart) {
      productInCart.quantity += quantity;
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

    if (productInCart.quantity > 1) {
      productInCart.quantity--;
    } else {
      const productIndex = cart.products.indexOf(productInCart);
      cart.products.splice(productIndex, 1);
    }

    this.saveCart(cart);
    return cart;
  }

  /**
   * Empties the cart
   */
  emptyCart(): Cart {
    localStorage.setItem(
      this.#LOCAL_STORAGE_KEY,
      JSON.stringify(this.#defaultCart)
    );

    return this.#defaultCart;
  }

  /**
   * Processes the cart
   * @param cartToProcess The cart to process
   * @returns An observable with the response
   */
  processCart(
    cartToProcess: CartToProcess
  ): Observable<ApiGenericResponse<CartProcessResponse>> {
    return this.http.post<ApiGenericResponse<CartProcessResponse>>(
      `${environment.apiUrl}/products/cart`,
      cartToProcess
    );
  }

  /**
   * Saves the cart to the local storage
   * @param cart The cart to be saved
   */
  private saveCart(cart: Cart): void {
    localStorage.setItem(this.#LOCAL_STORAGE_KEY, JSON.stringify(cart));
  }
}
