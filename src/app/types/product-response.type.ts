import { Product } from '../models';

export interface GetProductsResponse {
  succeeded: boolean;
  data: Product[];
  errors: any[];
}
