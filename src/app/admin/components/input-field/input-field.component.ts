import {
  Component,
  DoCheck,
  Input,
  OnInit,
  Optional,
  Self,
} from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';
import { tap } from 'rxjs';

import { CustomErrorStateMatcher } from '../../../shared/utils';
import { InputType } from '../../../shared/types';

@Component({
  selector: 'app-input-field[type][placeholder][label]',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    { provide: ErrorStateMatcher, useClass: CustomErrorStateMatcher },
  ],
})
export class InputFieldComponent
  implements ControlValueAccessor, OnInit, DoCheck
{
  #onChange = (val: any) => {};
  #onTouched = () => {};
  #pristine: boolean | null = true;

  @Input() type: InputType = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';

  fc = new FormControl('');

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }
  writeValue(obj: any): void {
    this.fc.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.#onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.#onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.fc.disable() : this.fc.enable();
  }

  get hasErrors(): boolean {
    const isControlInvalid = this.control ? this.control.invalid : false;
    return this.fc.touched && !!isControlInvalid;
  }

  ngOnInit(): void {
    this.fc.valueChanges
      .pipe(
        tap(val => {
          this.#onChange(val);
          this.#onTouched();
        })
      )
      .subscribe();
  }

  ngDoCheck(): void {
    if (this.#pristine !== this.control.pristine) {
      this.#pristine = this.control.pristine;
      if (this.#pristine) {
        this.fc.markAsPristine();
        this.fc.markAsUntouched();
      }
    }
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.control.hasError('min')) {
      return 'Value must be greater than 0';
    }

    return 'Invalid value';
  }
}
