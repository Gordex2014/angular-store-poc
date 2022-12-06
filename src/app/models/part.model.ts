import { Currency } from './enums';

export interface Part extends PartBase {
  id: number;
}

export interface PartBase {
  currency: Currency;
  description?: string;
  name: string;
  price: number;
  stock: number;
  unit: string;
}
