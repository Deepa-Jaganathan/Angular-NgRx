import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormFields } from '../form-fields';

@Component({
  selector: 'app-dynamic-form-input',
  templateUrl: './dynamic-form-input.component.html',
  styleUrls: ['./dynamic-form-input.component.css']
})
export class DynamicFormInputComponent implements OnInit {

  @Input() input: FormFields<string>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    console.log(this.input)
  }

  get isValid() { return this.form.controls[this.input.key].valid; }

}
