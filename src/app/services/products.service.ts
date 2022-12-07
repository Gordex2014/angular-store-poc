import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product, ProductBase } from '../models';
import { GenericResponse } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private readonly http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http
      .get<GenericResponse<Product[]>>(`${environment.apiUrl}/products`)
      .pipe(map(response => response.data));
  }

  getProductById(id: number): Observable<Product> {
    return this.http
      .get<GenericResponse<Product>>(`${environment.apiUrl}/products/${id}`)
      .pipe(map(response => response.data));
  }

  createProduct(productBase: ProductBase): Observable<Product> {
    return this.http
      .post<GenericResponse<Product>>(
        `${environment.apiUrl}/products`,
        productBase
      )
      .pipe(map(response => response.data));
  }
}
