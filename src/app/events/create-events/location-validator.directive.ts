import { Validator, FormGroup, NG_VALIDATORS } from "@angular/forms";
import { Directive } from "@angular/core";

@Directive({
  selector: "[validateLocation]",
  providers: [
    {
      // Adds one more validator to the NG_VALIDATOR by setting multi to true
      provide: NG_VALIDATORS,
      useExisting: LocationValidator,
      multi: true
    }
  ]
})
export class LocationValidator implements Validator {
  constructor() {}

  validate(formGroup: FormGroup): { [key: string]: any } {
    const addressControl = formGroup.controls["address"];
    const cityControl = formGroup.controls["city"];
    const countryControl = formGroup.controls["country"];
    const onlineURLControl = (<FormGroup>formGroup.root).controls["onlineURL"];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineURLControl && onlineURLControl.value)
    ) {
      return null;
    } 
    return { validateLocation: false };
    
  }
}
