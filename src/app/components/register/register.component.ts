import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormFieldControlService } from '../form-field-control.service';
import { FormFields } from '../form-fields';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormFieldControlService]
})
export class RegisterComponent implements OnInit {
  formFields: Observable<FormFields<any>[]>;
  dynamicFormFields: Observable<FormFields<any>[]>;

  constructor(service: FormFieldControlService) { 
    this.formFields = service.getFormFields();
    this.dynamicFormFields = service.getDynamicFormFields();
  }

  ngOnInit(): void {
    // this.dynamicFormFields.subscribe(data=> console.log(data))
    // this.formFields.subscribe(data=> console.log(data))
  }



}
