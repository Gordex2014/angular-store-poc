import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Part } from '../models';
import { GenericResponse } from '../shared/types';

@Injectable({
  providedIn: 'root',
})
export class PartsService {
  constructor(private readonly http: HttpClient) {}

  getPartsByProductId(id: number): Observable<Part[]> {
    return this.http
      .get<GenericResponse<Part[]>>(`${environment.apiUrl}/parts/product/${id}`)
      .pipe(map(response => response.data));
  }
}
