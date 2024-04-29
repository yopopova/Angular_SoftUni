import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {
    // Here with RegEx we validate the input
    // [A-Za-z0-9]+@gmail\.(com|bg)

    const domainString = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]+@gmail\.(${domainString})`);

    return (control) => {
        const isEmailInvalid = control.value === '' || regExp.test(control.value);

        // console.log('Test Regex ', isEmailInvalid);
        // console.log('controlValue:', control.value);
      
        return isEmailInvalid ? null: { emailValidator: true };
    }
}