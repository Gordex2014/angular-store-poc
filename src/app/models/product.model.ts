import { Currency } from './enums';
import { Image } from './image.model';
import { Part } from './part.model';

export interface Product extends ProductBase {
  id: number;
}

export interface ProductBase {
  currency: Currency;
  description?: string;
  price: number;
  slug?: string;
  stock: number;
  title: string;
  images?: Image[];
  parts?: Part[];
}
