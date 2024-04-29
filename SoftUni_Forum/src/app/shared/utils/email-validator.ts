import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    // [A-Za-z0-9]+@gmail.(com|bg)

    return (control) => {
      console.log('controlValue:', control.value);
      
      return null;
    }
}