import { CustomForm } from '../../../shared/types';

export const productsAddForm: CustomForm[] = [
  {
    label: 'Title',
    type: 'text',
    placeholder: 'Enter product title',
    formControlName: 'title',
  },
  {
    label: 'Price',
    type: 'number',
    placeholder: 'Enter product price',
    formControlName: 'price',
  },
  {
    label: 'Stock',
    type: 'number',
    placeholder: 'Enter product initial stock',
    formControlName: 'stock',
  },
  {
    label: 'Description',
    type: 'text',
    placeholder: 'Enter product description',
    formControlName: 'description',
  },
];
