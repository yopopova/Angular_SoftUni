import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { emailValidator } from '../utils/email-validator';

@Directive({
  selector: '[appEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailDirective,
      multi: true,
    }
  ]
})

export class EmailDirective implements Validator, OnChanges {
  @Input() appEmail: string[] = [];
  validator: ValidatorFn = () => null;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {    
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Here we receive the input data
    const {currentValue} = changes['appEmail'];
    // console.log('changes', changes['appEmail']);

    if(currentValue?.length) {
      // Give the data to 'emailValidator()' function
      this.validator = emailValidator(currentValue);
    }
  }
}
