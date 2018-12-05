import { Validator, NG_VALIDATORS, AbstractControl } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
    selector: '[appConfirmEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    validate(passwordGroup: AbstractControl): {
        [key: string]: any
    } | null {
        const passwordField = passwordGroup.get('password');
        const confirmPasswordField = passwordGroup.get('confirmPassword');
        console.log(passwordField.value);
        console.log(confirmPasswordField.value);
        console.log(passwordField.value !== confirmPasswordField.value);
        return passwordField && confirmPasswordField && 
        passwordField.value !== confirmPasswordField.value ? { 'notEqual': true } : null;
    }
}