import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { FormFields } from './form-fields';

@Injectable({
  providedIn: 'root'
})
export class FormFieldControlService {
  inputs: FormFields<string>[] = [];
  sample: FormFields<string>[] = [];

  constructor(private http: HttpClient) { }

  getFormData(): Observable<any> {
    return this.http.get('/assets/mock-form-field.json');
  }

  getDynamicFormFields() {
    return this.getFormData().pipe(map((data) => {
      this.sample = data.controls; 
      return this.sample.sort((a, b) => a.order - b.order);
    }))
  }

  toFormGroup(inputs: FormFields<string>[]): FormGroup {
    console.log(inputs)
    const group: any = {};
    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case "email":
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                        : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

  getFormFields() {
    const inputs: FormFields<string>[] = [

      new FormFields<string>({
        controlType: "textbox",
        key: 'name',
        label: 'Name',
        required: true,
        order: 1
      }),

      new FormFields<string>({
        controlType: "textbox",
        key: 'email',
        label: 'Email',
        type: 'email',
        required: true,
        validator: "email",
        order: 2
      }),

      new FormFields<string>({
        controlType: "dropdown",
        key: 'country',
        label: 'Country',
        options: [
          {key: 'usa',  value: 'United States of America'},
          {key: 'br',  value: 'Brazil'},
          {key: 'other',   value: 'Other'}
        ],
        order: 3
      }),

      new FormFields<string>({
        controlType: "checkbox",
        key: 'agree',
        label: 'I accept terms and services',
        type: 'checkbox',
        required: true,
        order: 4
      }),

      new FormFields<string>({
        controlType: "radio",
        key: 'sex',
        label: 'Sex',
        type: 'radio',
        options: [
          {key: 'male',  value: 'Male'},
          {key: 'female',  value: 'Female'}
        ],
        required: true,
        order: 5
      }),

      new FormFields<string>({
        controlType: "textarea",
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 6
      })
    ];
    return of(inputs.sort((a, b) => a.order - b.order));
  }

}
