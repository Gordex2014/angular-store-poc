import { InputType } from './input-type.type';

export interface CustomForm {
  label: string;
  type: InputType;
  placeholder: string;
  formControlName: string;
}
