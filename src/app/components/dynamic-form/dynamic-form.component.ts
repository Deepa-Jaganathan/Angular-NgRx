import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormFieldControlService } from '../form-field-control.service';
import { FormFields } from '../form-fields';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formFields: FormFields<string>[] = [];
  @Input() dynamicForm: FormFields<string>[] = [];
  form: FormGroup;
  payLoad = ' ';
  isFormSet = false;
  constructor(private formfieldService: FormFieldControlService,) { }

  ngOnInit(): void {

    // uncomment to get hard coded data to the form
      // this.form = this.formfieldService.toFormGroup(this.formFields);
    
  }

  formValid() : boolean{
    if (this.dynamicForm && !this.isFormSet) {
      this.form = this.formfieldService.toFormGroup(this.dynamicForm);
      this.isFormSet = true;
    }
   return this.dynamicForm !== null;
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
